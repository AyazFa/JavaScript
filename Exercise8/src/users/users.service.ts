import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  findAll() : Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: string) : Promise<User | null > {
    return this.userRepository.findOneBy({ id });
  }

  async create(user: Partial<User>) : Promise<User> {
    user.createdAt = new Date() 
    const newUser = this.userRepository.create(user);   
    return this.userRepository.save(newUser);
  }

  async update(id: string, user: Partial<User>) : Promise<User> {
    user.updatedAt = new Date();
    await this.userRepository.update(id, user);
    return this.userRepository.findOneBy({id});
  }

  async remove(id: string) : Promise<void> {
    await this.userRepository.delete(id);
  }
}
