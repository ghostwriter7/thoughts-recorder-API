import {Body, Controller, HttpCode, Logger, Post, ValidationPipe} from '@nestjs/common';
import {AuthCredentialsDto} from "./dto/auth-credentials.dto";
import {AuthService} from "./auth.service";
import {ISignInResponse} from "./interfaces";

@Controller('auth')
export class AuthController {
    private readonly logger = new Logger('AuthController');

    constructor(private authService: AuthService) {}

    @Post('/signup')
    public signUp(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto): Promise<void> {
        this.logger.log(`SignUp attempt with email ${authCredentialsDto.email}.`);
        return this.authService.signUp(authCredentialsDto);
    }

    @Post('/signin')
    @HttpCode(200)
    public signIn(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto): Promise<ISignInResponse> {
        this.logger.log(`SignIn attempt with email ${authCredentialsDto.email}`);
        return this.authService.signIn(authCredentialsDto);
    }
}
