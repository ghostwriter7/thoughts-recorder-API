import {Injectable, UnauthorizedException} from "@nestjs/common";
import {AuthCredentialsDto} from "./dto/auth-credentials.dto";
import {InjectRepository} from "@nestjs/typeorm";
import {UserRepository} from "./user.repository";
import {IJwtPayload, ISignInResponse} from "./interfaces";
import {JwtService} from "@nestjs/jwt";


@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
        private jwtService: JwtService
        ) {}

    public async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
        return this.userRepository.signUp(authCredentialsDto);
    }

    public async signIn(authCredentialsDto: AuthCredentialsDto): Promise<ISignInResponse> {
        const email = await this.userRepository.validateUserPassword(authCredentialsDto);

        if (!email) {
            throw new UnauthorizedException('Invalid credentials');
        } else {
            const payload: IJwtPayload = { email };
            const accessToken = this.jwtService.sign(payload);
            return { accessToken };
        }
    }
}