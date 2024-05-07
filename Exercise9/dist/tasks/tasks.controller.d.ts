import { TasksService } from './tasks.service';
import { Task } from './entities/task.entity';
export declare class TasksController {
    private readonly TasksService;
    constructor(TasksService: TasksService);
    create(task: Task): Promise<Task>;
    findAll(): Promise<Task[]>;
    findOne(id: string): Promise<Task>;
    update(id: string, Task: Task): Promise<any>;
    delete(id: string): Promise<any>;
}
