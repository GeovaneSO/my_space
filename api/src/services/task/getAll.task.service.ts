import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ApiService } from 'src/app.service';
import { TaskResponse } from 'src/interfaces/task.interface';

@Injectable()
export class GetAllTasksService {
  constructor(private prisma: ApiService) {}

  async getAllTasks(idToken: string): Promise<TaskResponse[]> {
    const client: {
      tasks: TaskResponse[];
    } = await this.prisma.client.findUnique({
      where: {
        id: idToken,
      },
      select: {
        tasks: {
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
        },
      },
    });

    if (!client) {
      throw new HttpException('Client unauthorized', HttpStatus.UNAUTHORIZED);
    }

    return client.tasks;
  }
}
