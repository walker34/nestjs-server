import { MiddlewaresConsumer, Module, NestModule } from '@nestjs/common';

import { AppController } from './app.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import { UserController } from 'modules/user/user.controller';
import { UserModule } from 'modules/user/user.module';
import { loggerMiddleware } from 'middlewares/logger.middeware';

@Module({
  imports: [TypeOrmModule.forRoot(), UserModule, AppController],
  controllers: [],
  components: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewaresConsumer): void {
    consumer.apply(loggerMiddleware).forRoutes(UserController);
  }
}