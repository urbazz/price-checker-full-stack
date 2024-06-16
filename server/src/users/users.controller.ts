import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { createUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {

    constructor(private UsersService: UsersService) {}

    @Post()
    createUser(@Body() userDto: createUserDto) {
        return this.UsersService.createUser(userDto);
    }

    // @Get()
    // getUser() {

    // }

    @Get()
    getAllUsers() {
        return this.UsersService.getAllUsers();
    }

    @Delete()
    deleteUser() {

    }
}
