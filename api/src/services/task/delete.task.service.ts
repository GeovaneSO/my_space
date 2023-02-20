import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

    const task = client.tasks.find((task) => task.id === idTask);

    if (!task) {
      throw new HttpException('Task does not exist', HttpStatus.UNAUTHORIZED);
    }

    await this.prisma.task.delete({
      where: {
        id: task.id,
      },
    });

    return { message: 'Task deleted' };
  }
}
