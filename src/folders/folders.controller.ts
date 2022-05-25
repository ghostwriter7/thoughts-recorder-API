import {Body, Controller, Delete, Get, Param, Post, UseGuards, ValidationPipe} from '@nestjs/common';
import {AuthGuard} from "@nestjs/passport";
import {GetUser} from "../auth/get-user.decorator";
import {User} from "../auth/user.entity";
import {FolderDto} from "./dto/folder.dto";
import {FoldersService} from "./folders.service";
import {Folder} from "./interfaces";

@Controller('folders')
@UseGuards(AuthGuard())
export class FoldersController {

    constructor(private foldersService: FoldersService) {
    }

    @Get('/all')
    getFolders(@GetUser() user: User): Promise<Folder[]> {
        return this.foldersService.getFolders(user);
    }

    @Get('/:id')
    getFolder(@Param('id') id: number,
              @GetUser() user: User) {
        return this.foldersService.getFolder(user, id);
    }

    @Post()
    createFolder(
        @Body(ValidationPipe) folder: FolderDto,
        @GetUser() user: User): Promise<Folder> {
        return this.foldersService.saveFolder(folder, user);
    }

    @Post()
    updateFolder(@Body(ValidationPipe) folder: FolderDto,
                 @GetUser() user: User) {

    }

    @Delete('/:id')
    deleteFolder(@Param('id') id: number,
                 @GetUser() user: User) {

    }
}
