import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto, UpdateTaskDto } from './task.dto';

@Controller('api/tasks')  // Base route: /api/tasks
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  // GET /api/tasks - Get all tasks
  @Get()
  getAllTasks() {
    return this.taskService.findAll();
  }

  // GET /api/tasks/:id - Get single task
  @Get(':id')
  getTask(@Param('id') id: string) {
    return this.taskService.findOne(parseInt(id));
  }

  // POST /api/tasks - Create new task
  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }

  // PUT /api/tasks/:id - Update task
  @Put(':id')
  updateTask(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.update(parseInt(id), updateTaskDto);
  }

  // DELETE /api/tasks/:id - Delete task
  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return this.taskService.delete(parseInt(id));
  }
}