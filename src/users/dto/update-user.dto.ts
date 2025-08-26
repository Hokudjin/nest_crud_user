import { ApiPropertyOptional } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @ApiPropertyOptional({ example: 'Oleksii' })
    firstName?: string;

    @ApiPropertyOptional({ example: 'Ivanov' })
    lastName?: string;

    @ApiPropertyOptional({ example: 'newmail@example.com' })
    email?: string;
}
