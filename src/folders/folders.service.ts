import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../auth/user.entity";
import {FolderDto} from "./dto/folder.dto";
import {FolderRepository} from "./folder.repository";
import {Folder} from "./interfaces";

@Injectable()
export class FoldersService {

    constructor(@InjectRepository(FolderRepository) private folderRepository: FolderRepository) {
    }

    async getFolders(user: User): Promise<Folder[]> {
      return await this.folderRepository.find({ where: { owner: user.id }});
    }

    async saveFolder({title, description}: FolderDto, user: User): Promise<Folder> {
        const folder = { title, description, owner: user.id };
        return await this.folderRepository.save(folder);
    }
}
