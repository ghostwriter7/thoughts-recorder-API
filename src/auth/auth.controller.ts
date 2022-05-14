import {Body, Controller, Post, ValidationPipe} from '@nestjs/common';
import {AuthCredentialsDto} from "./dto/auth-credentials.dto";
import {AuthService} from "./auth.service";
import {ISignInResponse} from "./interfaces";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('/signup')
    public signUp(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto): Promise<void> {
        return this.authService.signUp(authCredentialsDto);
    }

    @Post('/signin')
    public signIn(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto): Promise<ISignInResponse> {
        return this.authService.signIn(authCredentialsDto);
    }
}
