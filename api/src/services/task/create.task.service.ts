import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Client } from '@prisma/client';
import { ApiService } from 'src/app.service';
import { TaskRequest, TaskResponse } from 'src/interfaces/task.interface';
@Injectable()
export class CreateTaskService {
  constructor(private prisma: ApiService) {}

  async createTask(idToken: string, data: TaskRequest): Promise<TaskResponse> {
    const { category, description, title }: TaskRequest = data;
    const client: Client = await this.prisma.client.findUnique({
      where: {
        id: idToken,
      },
    });

    if (!client) {
      throw new HttpException('Client unauthorized', HttpStatus.UNAUTHORIZED);
    }

    const newTask: TaskResponse = await this.prisma.task.create({
      data: {
        title,
        description,
        category: {
          connectOrCreate: {
            where: {
              name: category,
            },
            create: {
              name: category,
            },
          },
        },
        client: {
          connect: {
            id: client.id,
          },
        },
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

    return newTask;
  }
}
