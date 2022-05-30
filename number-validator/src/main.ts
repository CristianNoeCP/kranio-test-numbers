import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ValidatorModule } from './modules/validator/validator.module';

async function bootstrap() {
  const app = await NestFactory.create(ValidatorModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
  console.log('🚀 server in port 3000 🚀');
}
bootstrap();
