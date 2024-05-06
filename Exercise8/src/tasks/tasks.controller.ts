import { Controller, Get, Post, Body, Param, Delete, HttpCode, Put, NotFoundException, HttpStatus } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Task } from './entities/task.entity';


@ApiTags('Tasks')
@Controller('api/tasks')
export class TasksController {
  constructor(private readonly TasksService: TasksService) {}

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: "Creates a new Task" })
  @ApiResponse({ status: HttpStatus.CREATED, description: "Success", type: Task })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request" })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: "Failed" })
  async create(@Body() task: Task) : Promise<Task> {
    const createdTask = await this.TasksService.create(task);
    return createdTask;
  }

  @Get()
  @ApiOperation({ summary: "Returns all Tasks" })
  @ApiResponse({ status: HttpStatus.OK, description: "Success", type: Task, isArray: true })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request" })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: "Failed" }) 
  findAll() : Promise<Task[]> {
    return this.TasksService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: "Returns a Task with specified id" })
  @ApiParam({ name: "id", required: true, description: "Task identifier" })
  @ApiResponse({ status: HttpStatus.OK, description: "Success", type: Task })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request" })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: "Not Found" })  
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: "Failed" })  
  findOne(@Param('id') id: string) : Promise<Task> {
    return this.TasksService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: "Updates a Task with specified id" })
  @ApiParam({ name: "id", required: true, description: "Task identifier" })
  @ApiResponse({ status: HttpStatus.OK, description: "Success", type: Task })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request" })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: "Not Found" })  
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: "Failed" })  
  async update(@Param('id') id: string, @Body() Task: Task) : Promise<any> {
    await this.TasksService.update(id, Task);
    return { message: `Task with id: ${id} updated successfully`};
  } 

  @Delete(':id')
  @ApiOperation({ summary: "Deletes a Task with specified id" })
  @ApiParam({ name: "id", required: true, description: "Task identifier" })
  @ApiResponse({ status: HttpStatus.NO_CONTENT, description: "Success" })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request" })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: "Not Found" })  
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: "Failed" })  
  async delete(@Param('id') id: string) : Promise<any> {
    const Task = await this.TasksService.findOne(id);
    if (!Task){
      throw new NotFoundException(`Task with id: ${id} does not exist`);
    }

    await this.TasksService.remove(id);
    return { message: `Task with id: ${id} deleted successfully`};
  }
}
