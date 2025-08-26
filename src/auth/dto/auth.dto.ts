import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class RegisterDto {
    @ApiProperty({ example: 'Alex' })
    @IsNotEmpty()
    firstName: string;

    @ApiProperty({ example: 'Tokarchuk' })
    @IsNotEmpty()
    lastName: string;

    @ApiProperty({ example: 'alex@example.com' })
    @IsEmail()
    email: string;

    @ApiProperty({ example: 'StrongPassword123' })
    @MinLength(6)
    password: string;
}

export class LoginDto {
    @ApiProperty({ example: 'alex@example.com' })
    @IsEmail()
    email: string;

    @ApiProperty({ example: 'StrongPassword123' })
    @IsNotEmpty()
    password: string;
}
