import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';
export declare class TasksService {
    private taskRepository;
    constructor(taskRepository: Repository<Task>);
    findAll(): Promise<Task[]>;
    findOne(id: string): Promise<Task | null>;
    create(Task: Partial<Task>): Promise<Task>;
    update(id: string, Task: Partial<Task>): Promise<Task>;
    remove(id: string): Promise<void>;
}
