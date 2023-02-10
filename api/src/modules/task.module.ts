import { Module } from '@nestjs/common';
import { ApiService } from 'src/app.service';
import { TaskController } from 'src/controllers/task/task.cotroller';
import { CreateTaskService } from 'src/services/task/create.task.service';
import { DeleteTaskService } from 'src/services/task/delete.task.service';
import { GetAllTasksService } from 'src/services/task/getAll.task.service';
import { GetOneTaskService } from 'src/services/task/getOne.task.service';
import { UpdateTaskService } from 'src/services/task/update.task.service';

@Module({
  imports: [],
  controllers: [TaskController],
  providers: [
    CreateTaskService,
    GetAllTasksService,
    GetOneTaskService,
    UpdateTaskService,
    DeleteTaskService,
    ApiService,
  ],
})
export class TaskModule {}
