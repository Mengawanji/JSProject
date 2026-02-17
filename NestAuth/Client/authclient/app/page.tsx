"use client";

import { useState } from 'react';
import TaskForm from '@/src/components/TaskForm';
import TaskList from '@/src/components/TaskList';

export default function Home() {
  // Key to force TaskList to refresh when new task is created
  const [refreshKey, setRefreshKey] = useState(0);

  const handleTaskCreated = () => {
    // Increment key to force TaskList to re-fetch
    setRefreshKey(prev => prev + 1);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-8">Task Manager</h1>
      
      <TaskForm onTaskCreated={handleTaskCreated} />
      
      <div className="mt-8">
        {/* Key prop forces component to remount when refreshKey changes */}
        <TaskList key={refreshKey} />
      </div>
    </div>
  );
}