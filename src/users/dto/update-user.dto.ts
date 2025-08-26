import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { MinLength, IsOptional, IsEmail } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @ApiPropertyOptional({ example: 'Oleksii' })
    @IsOptional()
    firstName?: string;

    @ApiPropertyOptional({ example: 'Ivanov' })
    @IsOptional()
    lastName?: string;

    @ApiPropertyOptional({ example: 'newmail@example.com' })
    @IsOptional()
    @IsEmail()
    email?: string;

    @ApiPropertyOptional({ example: 'NewPassword123' })
    @IsOptional()
    @MinLength(6)
    password?: string;
}
