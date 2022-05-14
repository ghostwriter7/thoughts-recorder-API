import {IsEmail, IsString, Matches, MaxLength, MinLength} from "class-validator";

export class AuthCredentialsDto {
    @IsString()
    @IsEmail()
    public email: string;

    @IsString()
    @MinLength(4)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        { message: 'The password is too weak!'})
    public password: string;
}