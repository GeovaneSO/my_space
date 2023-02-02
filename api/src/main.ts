import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ApiService } from './app.service';
import { ClientModule } from './modules/client.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const apiService = app.get(ApiService);
  await apiService.enableShutdownHooks(app);

  app.enableCors();

  app.setGlobalPrefix('/api/v1');

  await app.listen(4000);
}
bootstrap();
