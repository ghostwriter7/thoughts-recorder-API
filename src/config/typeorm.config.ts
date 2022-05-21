import {TypeOrmModuleOptions} from "@nestjs/typeorm";
import {DB_NAME, DB_PASSWORD, DB_USER} from "../../environment";
import {User} from "../auth/user.entity";
import {Folder} from "../folders/folder.entity";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    entities: [User, Folder],
    synchronize: true,
};