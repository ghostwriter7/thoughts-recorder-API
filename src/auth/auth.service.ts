import {Injectable} from "@nestjs/common";
import {AuthCredentialsDto} from "./dto/auth-credentials.dto";

@Injectable()
export class AuthService {

    public async signUp(authCredentialsDto: AuthCredentialsDto) {

    }

    public async signIn(authCredentialsDto: AuthCredentialsDto) {

    }
}