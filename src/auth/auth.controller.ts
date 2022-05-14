import {Body, Controller, Post, ValidationPipe} from '@nestjs/common';
import {AuthCredentialsDto} from "./dto/auth-credentials.dto";
import {AuthService} from "./auth.service";

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @Post('/signup')
    public signUp(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto) {

    }

    @Post('/signin')
    public signIn(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto) {

    }
}
