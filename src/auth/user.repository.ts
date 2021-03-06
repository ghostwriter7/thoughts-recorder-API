import {EntityRepository, Repository} from "typeorm";
import {User} from "./user.entity";
import {AuthCredentialsDto} from "./dto/auth-credentials.dto";
import * as bcrypt from 'bcrypt';
import {ConflictException, InternalServerErrorException, Logger} from "@nestjs/common";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    private readonly logger = new Logger('UserRepository');

    public async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
        const { email, password } = authCredentialsDto;

        const user = new User();
        user.email = email;
        user.salt = await bcrypt.genSalt();
        user.password = await this.hashPassword(password, user.salt);

        try {
            await user.save();
        } catch(error) {
            if (error.code === '23505') {
                throw new ConflictException('User already exists, please log in!');
            }

            throw new InternalServerErrorException();
        }
    }
    public async validateUserPassword(authCredentialsDto: AuthCredentialsDto): Promise<string> {
        const { email, password } = authCredentialsDto;
        const user = await this.findOne({ email });

        if (user && (await user.validatePassword(password))) {
            return user.email;
        } else {
            return null;
        }
    }

    private async hashPassword(password: string, salt: string): Promise<string> {
        return bcrypt.hash(password, salt);
    }
}