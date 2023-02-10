import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Task } from '@prisma/client';
import { ApiService } from 'src/app.service';

@Injectable()
export class GetAllTasksService {
  constructor(private prisma: ApiService) {}

  async getAllTasks(idToken: string): Promise<Task[]> {
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

    return client.tasks;
  }
}
