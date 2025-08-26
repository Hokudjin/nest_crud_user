import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    private users: User[] = [];
    private counter = 1;

    create(createUserDto: CreateUserDto): User {
        const newUser: User = {
            id: this.counter++,
            ...createUserDto,
            isActive: true,
        };
        this.users.push(newUser);
        return newUser;
    }

    findAll(): User[] {
        return this.users;
    }

    findOne(id: number): User {
        const user = this.users.find((u) => u.id === id);
        if (!user) throw new NotFoundException(`User #${id} not found`);
        return user;
    }

    update(id: number, updateUserDto: UpdateUserDto): User {
        const user = this.findOne(id);
        Object.assign(user, updateUserDto);
        return user;
    }

    remove(id: number): void {
        const index = this.users.findIndex((u) => u.id === id);
        if (index === -1) throw new NotFoundException(`User #${id} not found`);
        this.users.splice(index, 1);
    }

    findByEmail(email: string) {
        return this.users.find((u) => u.email === email);
    }

}
