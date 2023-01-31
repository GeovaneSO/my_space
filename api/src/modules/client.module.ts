import { Module } from '@nestjs/common';
import { ClientController } from 'src/controllers/client/createClient.controller';

@Module({
  controllers: [ClientController],
})
export class ClientModule {}
