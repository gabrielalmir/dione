import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { env } from './config/env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Dione')
    .setDescription('Dione is an HTTP-based task queuing system designed for environments with limited infrastructure. Developed in TypeScript, Node.js & NestJS, Dione is ideal for situations where a simple yet effective queuing solution is needed without the complexity or additional infrastructure overhead.')
    .setVersion('0.0.1')
    .addBearerAuth()
    .build();

  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(env.PORT);
}

bootstrap();
