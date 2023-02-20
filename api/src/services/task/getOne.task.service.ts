import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Task } from '@prisma/client';
import { ApiService } from 'src/app.service';
import { TaskResponse } from 'src/interfaces/task.interface';

@Injectable()
export class GetOneTaskService {
  constructor(private prisma: ApiService) {}

  async getOneTask(idToken: string, idTask: string): Promise<TaskResponse> {
    const client: {
      tasks: Task[];
    } = await this.prisma.client.findUnique({
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

    const taskClient = client.tasks.find((task) => task.id === idTask);

    if (!taskClient) {
      throw new HttpException('Task does not exist', HttpStatus.BAD_REQUEST);
    }

    const task: TaskResponse = await this.prisma.task.findUnique({
      where: {
        id: taskClient.id,
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
    if (!task) {
      throw new HttpException('Client unauthorized', HttpStatus.UNAUTHORIZED);
    }
    return task;
  }
}
