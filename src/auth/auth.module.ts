import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./user.entity";
import {UserRepository} from "./user.repository";
import {AuthController} from "./auth.controller";
import {AuthService} from "./auth.service";
import {PassportModule} from "@nestjs/passport";
import {JwtModule} from "@nestjs/jwt";
import {JWT_SECRET} from "../../environment";
import {JwtStrategy} from "./jwt.strategy";

@Module({
    imports: [
        TypeOrmModule.forFeature([User, UserRepository]),
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
            secret: JWT_SECRET,
            signOptions: {
                expiresIn: 3600
            }
        })
    ],
    controllers: [AuthController],
    providers: [
        AuthService,
        JwtStrategy
    ],
    exports: [
        JwtStrategy,
        PassportModule
    ]
})
export class AuthModule {}