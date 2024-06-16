import { Body, Injectable } from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository: typeof User) {}

    async createUser(dto: createUserDto) {
        const user = await this.userRepository.create(dto)
        return user
    }

    async getUser(id: string | number) {
        const user = await this.userRepository.findOne({where: {id}})
        return user
    }

    async getAllUsers() {
        const users = await this.userRepository.findAll()
        return users
    }

    async deleteUser(id: string | number) {
        const user = await this.userRepository.destroy({where: {id}})
        return user
    }

}
