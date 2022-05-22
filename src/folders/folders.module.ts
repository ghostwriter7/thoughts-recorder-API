import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {AuthModule} from "../auth/auth.module";
import {Folder} from "./folder.entity";
import {FolderRepository} from "./folder.repository";
import { FoldersController } from './folders.controller';
import { FoldersService } from './folders.service';

@Module({
  imports: [TypeOrmModule.forFeature([Folder, FolderRepository]), AuthModule],
  controllers: [FoldersController],
  providers: [FoldersService]
})
export class FoldersModule {}
