import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Task } from '@prisma/client';
import {
  TaskRequest,
  TaskResponse,
  TaskUpdateRequest,
} from 'src/interfaces/task.interface';
import { CreateTaskService } from 'src/services/task/create.task.service';
import { DeleteTaskService } from 'src/services/task/delete.task.service';
import { GetAllTasksService } from 'src/services/task/getAll.task.service';
import { GetOneTaskService } from 'src/services/task/getOne.task.service';
import { UpdateTaskService } from 'src/services/task/update.task.service';

@Controller('/tasks')
export class TaskController {
  constructor(
    private readonly createTaskService: CreateTaskService,
    private readonly getAllTasksService: GetAllTasksService,
    private readonly getOneTaskService: GetOneTaskService,
    private readonly updateTaskService: UpdateTaskService,
    private readonly deleteTaskService: DeleteTaskService,
  ) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('')
  public async createTask(
    @Request() req,
    @Body() body: TaskRequest,
  ): Promise<TaskResponse> {
    const idToken = req.user.sub;
    return await this.createTaskService.createTask(idToken, body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('')
  public async getAllTasks(@Request() req): Promise<Task[]> {
    const idToken = req.user.sub;
    return await this.getAllTasksService.getAllTasks(idToken);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  public async getOneTask(
    @Request() req,
    @Param('id') id: string,
  ): Promise<TaskResponse> {
    const idToken = req.user.sub;
    return await this.getOneTaskService.getOneTask(idToken, id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  public async updateTask(
    @Request() req,
    @Body() body: TaskUpdateRequest,
    @Param('id') id: string,
  ): Promise<TaskResponse> {
    const idToken = req.user.sub;
    return await this.updateTaskService.updateTask(idToken, id, body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  public async deleteTask(
    @Request() req,
    @Body() body: TaskUpdateRequest,
    @Param('id') id: string,
  ): Promise<object> {
    const idToken = req.user.sub;
    return await this.deleteTaskService.deleteTask(idToken, id);
  }
}
