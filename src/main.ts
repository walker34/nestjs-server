import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // To set the prefix for each route in the application
  app.setGlobalPrefix('v1');
  await app.listen(3000);
}
bootstrap();