import {BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique} from "typeorm";
import * as bcrypt from 'bcrypt';
import {Logger} from "@nestjs/common";

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

    public async validatePassword(password: string): Promise<boolean> {
        const hash = await bcrypt.hash(password, this.salt);
        const isEqual = hash === this.password;
        if (!isEqual) {
            this.logger.error('Password invalid!');
        }
        return isEqual;
    }
}