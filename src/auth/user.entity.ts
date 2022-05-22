import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique} from "typeorm";
import * as bcrypt from 'bcrypt';
import {Logger} from "@nestjs/common";
import {Folder} from "../folders/folder.entity";

@Entity()
@Unique(['email'])
export class User extends BaseEntity {
    private readonly logger = new Logger('UserEntity');

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    salt: string;

    @OneToMany(type => Folder, folder => folder.id)
    folders: Folder[];

    public async validatePassword(password: string): Promise<boolean> {
        const hash = await bcrypt.hash(password, this.salt);
        const isEqual = hash === this.password;
        if (!isEqual) {
            this.logger.error('Password invalid!');
        }
        return isEqual;
    }
}