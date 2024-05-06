import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>
  ) {}

  findAll() : Promise<Task[]> {
    return this.taskRepository.find();
  }

  findOne(id: string) : Promise<Task | null > {
    return this.taskRepository.findOneBy({ id });
  }

  async create(Task: Partial<Task>) : Promise<Task> {
    const newTask = this.taskRepository.create(Task);   
    return this.taskRepository.save(newTask);
  }

  async update(id: string, Task: Partial<Task>) : Promise<Task> {
    await this.taskRepository.update(id, Task);
    return this.taskRepository.findOneBy({id});
  }

  async remove(id: string) : Promise<void> {
    await this.taskRepository.delete(id);
  }
}
