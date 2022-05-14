import {Injectable, UnauthorizedException} from "@nestjs/common";
import {PassportStrategy} from "@nestjs/passport";
import {Strategy, ExtractJwt} from 'passport-jwt';
import {InjectRepository} from "@nestjs/typeorm";
import {UserRepository} from "./user.repository";
import {JWT_SECRET} from "../../environment";
import {IJwtPayload} from "./interfaces";
import {User} from "./user.entity";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        @InjectRepository(UserRepository) private userRepository: UserRepository
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken,
            secretOrKey: JWT_SECRET
        });
    }

    public async validate(payload: IJwtPayload): Promise<User> {
        const { email } = payload;
        const user = await this.userRepository.findOne({ email });

        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }



}