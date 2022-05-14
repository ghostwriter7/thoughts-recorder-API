import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import {AuthService} from "./auth/auth.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {typeOrmConfig} from "./config/typeorm.config";

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig)],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AppModule {}
