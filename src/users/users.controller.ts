import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post()
    @ApiResponse({ status: 201, description: 'User created', type: User })
    create(@Body() createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto);
    }

    @Get()
    @ApiResponse({ status: 200, description: 'Return all users', type: [User] })
    findAll() {
        return this.usersService.findAll();
    }

    @Get(':id')
    @ApiResponse({ status: 200, description: 'Return single user', type: User })
    findOne(@Param('id') id: string) {
        return this.usersService.findOne(+id);
    }

    @Put(':id')
    @ApiResponse({ status: 200, description: 'Update user', type: User })
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.usersService.update(+id, updateUserDto);
    }

    @Delete(':id')
    @ApiResponse({ status: 200, description: 'Delete user' })
    remove(@Param('id') id: string) {
        return this.usersService.remove(+id);
    }
}
