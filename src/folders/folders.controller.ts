import {Body, Controller, Delete, Get, Param, Post, ValidationPipe} from '@nestjs/common';
import {FolderDto} from "./dto/folder.dto";
import {FoldersService} from "./folders.service";

@Controller('folders')
export class FoldersController {

    constructor(private foldersService: FoldersService) {
    }

    @Get('/all')
    getFolders() {

    }

    @Get('/:id')
    getFolder(@Param('id') id: number) {

    }

    @Post()
    createFolder(@Body(ValidationPipe) folder: FolderDto) {

    }

    @Post()
    updateFolder(@Body(ValidationPipe) folder: FolderDto) {

    }

    @Delete('/:id')
    deleteFolder(@Param('id') id: number) {

    }
}
