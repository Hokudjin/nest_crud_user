import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
// import { UserModule } from './user/user.module';
// import * as dotenv from 'dotenv';
// dotenv.config({ path: process.cwd() + `/.env.${process.env.NODE_ENV}` });

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // видаляє зайві поля
      forbidNonWhitelisted: true, // помилка, якщо є неописані поля
      transform: true, // приводить типи (наприклад id з string у number)
    }),
  );
  const config = new DocumentBuilder()
    .setTitle('User')
    .setDescription('User creation API')
    .setVersion('1.0')
    .addTag('user')
    .addSecurity('ApiKeyAuth', {
      type: 'apiKey',
      in: 'header',
      name: 'x-api-key',
    })
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
