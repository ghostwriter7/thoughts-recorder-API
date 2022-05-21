import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {FolderDto} from "./dto/folder.dto";
import {FolderRepository} from "./folder.repository";
import {Folder} from "./interfaces";

@Injectable()
export class FoldersService {

    constructor(@InjectRepository(FolderRepository) private folderRepository: FolderRepository) {
    }

    async getFolders(): Promise<Folder[]> {
      return await this.folderRepository.find();
    }

    async saveFolder({title, description}: FolderDto): Promise<Folder> {
        const folder = { title, description };
        const saved = await this.folderRepository.save(folder);

        return saved;
    }
}
