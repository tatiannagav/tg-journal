import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import {UserEntity} from "./user/entities/user.entity";


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST || 'localhost',
      port: +process.env.POSTGRES_PORT || 5432,
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
      database: 'tg_journal',
      entities: [UserEntity],
      synchronize: true,
    }),
    UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
