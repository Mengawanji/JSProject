const API_URL= "http://localhost:8080/api/tasks";

export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
}

export interface CreateTaskData {
  title: string;
  description: string;
}

// GET all tasks
export async function fetchTasks(): Promise<Task[]> {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch tasks');
  }
  return response.json();
}

// GET single task
export async function fetchTask(id: number): Promise<Task> {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch task');
  }
  return response.json();
}

// POST create task
export async function createTask(formData: CreateTaskData): Promise<Task> {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });
  
  if (!response.ok) {
    throw new Error('Failed to create task');
  }
  return response.json();
}

// PUT update task
export async function updateTask(id: number, taskData: Partial<Task>): Promise<Task> {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskData),
  });
  
  if (!response.ok) {
    throw new Error('Failed to update task');
  }
  return response.json();
}

// DELETE task
export async function deleteTask(id: number): Promise<boolean> {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  
  if (!response.ok) {
    throw new Error('Failed to delete task');
  }
  return response.json();
}