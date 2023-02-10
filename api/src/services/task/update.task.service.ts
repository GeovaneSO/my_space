import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Task } from '@prisma/client';
import { ApiService } from 'src/app.service';
import { TaskResponse, TaskUpdateRequest } from 'src/interfaces/task.interface';

@Injectable()
export class UpdateTaskService {
  constructor(private prisma: ApiService) {}

  async updateTask(
    idToken: string,
    idTask: string,
    data: TaskUpdateRequest,
  ): Promise<TaskResponse> {
    const { description, status, title }: TaskUpdateRequest = data;

    const client = await this.prisma.client.findUnique({
      where: {
        id: idToken,
      },
      select: {
        tasks: true,
      },
    });

    if (!client) {
      throw new HttpException('Client unauthorized', HttpStatus.UNAUTHORIZED);
    }

    const task: Task = await this.prisma.task.findUnique({
      where: {
        id: idTask,
      },
    });

    if (!task) {
      throw new HttpException('Client unauthorized', HttpStatus.UNAUTHORIZED);
    }

    const updatedTask: TaskResponse = await this.prisma.task.update({
      where: {
        id: idTask,
      },
      data: {
        title: title ? title : task.title,
        status,
        description: description ? description : task.description,
      },
      select: {
        id: true,
        title: true,
        description: true,
        status: true,
        create_at: true,
        update_at: true,
        category: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
    if (!updatedTask) {
      throw new HttpException('Client unauthorized', HttpStatus.UNAUTHORIZED);
    }

    return updatedTask;
  }
}
