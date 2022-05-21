import {Body, Controller, Delete, Get, Param, Post, ValidationPipe} from '@nestjs/common';
import {FolderDto} from "./dto/folder.dto";
import {FoldersService} from "./folders.service";
import {Folder} from "./interfaces";

@Controller('folders')
export class FoldersController {

    constructor(private foldersService: FoldersService) {
    }

    @Get('/all')
    getFolders(): Promise<Folder[]> {
        return this.foldersService.getFolders();
    }

    @Get('/:id')
    getFolder(@Param('id') id: number) {

    }

    @Post()
    createFolder(@Body(ValidationPipe) folder: FolderDto): Promise<Folder> {
        return this.foldersService.saveFolder(folder);
    }

    @Post()
    updateFolder(@Body(ValidationPipe) folder: FolderDto) {

    }

    @Delete('/:id')
    deleteFolder(@Param('id') id: number) {

    }
}
