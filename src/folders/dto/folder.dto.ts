import {IsNotEmpty, IsOptional, IsString, MaxLength, MinLength} from "class-validator";

export class FolderDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    title: string;

    @IsOptional()
    @IsString()
    @MaxLength(200)
    description: string;

    @IsOptional()
    id?: string;
}