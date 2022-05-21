import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {typeOrmConfig} from "./config/typeorm.config";
import {AuthModule} from "./auth/auth.module";
import { FoldersModule } from './folders/folders.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), AuthModule, FoldersModule],
})
export class AppModule {}
