"use client";

import { useEffect, useState } from 'react';
import { fetchTasks, deleteTask, updateTask, Task } from '../services/task.service';

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Function to load tasks from backend
  const loadTasks = async () => {
    try {
      setLoading(true);
      const data = await fetchTasks();
      setTasks(data);
      setError(null);
    } catch (err) {
      setError('Failed to load tasks');
      console.error('Error loading tasks:', err);
    } finally {
      setLoading(false);
    }
  };

  // Load tasks when component mounts
  useEffect(() => {
    loadTasks();
  }, []);

  // Handle task deletion
  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this task?')) return;

    try {
      await deleteTask(id);
      // Remove from local state to update UI immediately
      setTasks(tasks.filter(task => task.id !== id));
    } catch (err) {
      alert('Failed to delete task');
      console.error('Error deleting task:', err);
    }
  };

  // Handle task completion toggle
  const handleToggleComplete = async (task: Task) => {
    try {
      const updated = await updateTask(task.id, {
        completed: !task.completed
      });
      // Update local state
      setTasks(tasks.map(t => t.id === task.id ? updated : t));
    } catch (err) {
      alert('Failed to update task');
      console.error('Error updating task:', err);
    }
  };

  if (loading) return <div>Loading tasks...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Tasks</h2>
      
      {tasks.length === 0 ? (
        <p>No tasks yet. Create one above!</p>
      ) : (
        tasks.map(task => (
          <div key={task.id} className="border rounded p-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleToggleComplete(task)}
                  className="h-5 w-5"
                />
                <div>
                  <h3 className={`font-medium ${task.completed ? 'line-through text-gray-500' : ''}`}>
                    {task.title}
                  </h3>
                  <p className="text-gray-600">{task.description}</p>
                  <p className="text-sm text-gray-400">
                    Created: {new Date(task.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
              
              <button
                onClick={() => handleDelete(task.id)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}