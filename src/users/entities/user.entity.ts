import { ApiProperty } from '@nestjs/swagger';

export class User {
    @ApiProperty({ example: 1 })
    id: number;

    @ApiProperty({ example: 'Alex' })
    firstName: string;

    @ApiProperty({ example: 'Tokarchuk' })
    lastName: string;

    @ApiProperty({ example: 'alex@example.com' })
    email: string;

    password: string; // зберігаємо хеш паролю

    @ApiProperty({ example: true })
    isActive: boolean;
}
