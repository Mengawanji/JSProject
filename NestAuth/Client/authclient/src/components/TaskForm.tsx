"use client";

import { useState} from 'react';
import { createTask, CreateTaskData } from '../services/task.service';

interface TaskFormProps {
  onTaskCreated?: () => void;  // Callback to refresh task list
}

export default function TaskForm({ onTaskCreated }: TaskFormProps) {
  // State for form inputs - this is where user input is stored
  const [formData, setFormData] = useState<CreateTaskData>({
    title: '',
    description: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Handle input changes - updates state as user types
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e:any) => {
    e.preventDefault();  // Prevent page refresh
    
    // Basic validation
    if (!formData.title.trim()) {
      setError('Title is required');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      // THIS IS THE KEY PART - sending data to backend
      await createTask(formData);
      
      // Clear form after successful submission
      setFormData({ title: '', description: '' });
      
      // Notify parent component to refresh task list
      if (onTaskCreated) {
        onTaskCreated();
      }
      
      alert('Task created successfully!');
    } catch (err) {
      setError('Failed to create task. Please try again.');
      console.error('Error creating task:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded">
      <h2 className="text-xl font-bold">Create New Task</h2>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      {/* Title Input */}
      <div>
        <label htmlFor="title" className="block text-sm font-medium">
          Title *
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          className="mt-1 block w-full border rounded p-2"
          placeholder="Enter task title"
          disabled={isSubmitting}
        />
      </div>

      {/* Description Input */}
      <div>
        <label htmlFor="description" className="block text-sm font-medium">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          rows={4}
          className="mt-1 block w-full border rounded p-2"
          placeholder="Enter task description"
          disabled={isSubmitting}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 
          ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {isSubmitting ? 'Creating...' : 'Create Task'}
      </button>
    </form>
  );
}