import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Task } from '@prisma/client';
import { ApiService } from 'src/app.service';

@Injectable()
export class DeleteTaskService {
  constructor(private prisma: ApiService) {}

  async deleteTask(idToken: string, idTask: string): Promise<object> {
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

    this.prisma.task.delete({
      where: {
        id: task.id,
      },
    });

    return { message: 'Task deleted' };
  }
}
