import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ApiService } from './app.service';
import { ClientModule } from './modules/client.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Api MySpace')
    .setDescription(
      'Essa é uma apicação possíbilita ao usuário criar uma conta no serviço, o que na api é denominado de `client`. Com o cadastro feito o usuário é direcionado a página de login, onde será realizada a confirmação dos dados fornecidos na requisição.',
    )
    .setVersion('1.0')
    .addTag('client')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  const apiService = app.get(ApiService);
  await apiService.enableShutdownHooks(app);

  app.enableCors();

  app.setGlobalPrefix('/api/v1');

  await app.listen(4000);
}
bootstrap();
