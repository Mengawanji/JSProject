import { Injectable } from '@nestjs/common';
import { Task } from './task.entity';
import { CreateTaskDto, UpdateTaskDto } from './task.dto';

@Injectable()
export class TaskService {
  // In-memory storage (replace with database in real app)
  private tasks: Task[] = [];
  private idCounter = 1;

  // Get all tasks
  findAll(): Task[] {
    return this.tasks;
  }

  // Get single task
  findOne(id: number): Task | undefined  {
    return this.tasks.find(task => task.id === id);
  }

  // Create a task
  create(createTaskDto: CreateTaskDto): Task {
    const newTask: Task = {
      id: this.idCounter++,
      ...createTaskDto,
      completed: false,
      createdAt: new Date(),
    };
    this.tasks.push(newTask);
    return newTask;
  }

  // Update a task
  update(id: number, updateTaskDto: UpdateTaskDto): Task | null  {
    const taskIndex = this.tasks.findIndex(task => task.id === id);
    if (taskIndex > -1) {
      this.tasks[taskIndex] = { ...this.tasks[taskIndex], ...updateTaskDto };
      return this.tasks[taskIndex];
    }
    return null;
  }

  // Delete a task
  delete(id: number): boolean {
    const taskIndex = this.tasks.findIndex(task => task.id === id);
    if (taskIndex > -1) {
      this.tasks.splice(taskIndex, 1);
      return true;
    }
    return false;
  }
}