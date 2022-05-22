import {BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "../auth/user.entity";

@Entity()
export class Folder extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @ManyToOne(type => User, user => user.id)
    owner: number;
}
