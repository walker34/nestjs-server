import { ObjectID, Repository } from 'typeorm';

import { Component } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Component()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async create(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(id): Promise<User> {
    // tslint:disable-next-line:no-console
    console.log(`user ${id} from the db: `, id);
    return await this.userRepository.findOne(id);
  }
}