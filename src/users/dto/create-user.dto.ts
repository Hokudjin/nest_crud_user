import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
    @ApiProperty({ example: 'Alex' })
    @IsNotEmpty()
    firstName: string;

    @ApiProperty({ example: 'Tokarchuk' })
    @IsNotEmpty()
    lastName: string;

    @ApiProperty({ example: 'alex@example.com' })
    @IsEmail()
    email: string;
}
