import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { createUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {

    constructor(private UsersService: UsersService) {}

    @Post()
    createUser(@Body() userDto: createUserDto) {
        return this.UsersService.createUser(userDto)
    }

    @Get()
    getAllUsers() {
        return this.UsersService.getAllUsers()
    }

    @Get(':id')
    getUser(@Param('id') id: string | number) {
        return this.UsersService.getUser(id)
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string | number) {
        return this.UsersService.deleteUser(id)
    }
}
