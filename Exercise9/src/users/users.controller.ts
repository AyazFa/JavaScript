import { Controller, Get, Post, Body, Param, Delete, HttpCode, Put, NotFoundException, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity'
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: "Creates a new user" })
  @ApiResponse({ status: HttpStatus.CREATED, description: "Success", type: User })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request" })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: "Failed" })
  async create(@Body() user: User) : Promise<User> {
    const createdUser = await this.usersService.create(user);
    return createdUser;
  }

  @Get()
  @ApiOperation({ summary: "Returns all users" })
  @ApiResponse({ status: HttpStatus.OK, description: "Success", type: User, isArray: true })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request" })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: "Failed" }) 
  findAll() : Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: "Returns a user with specified id" })
  @ApiParam({ name: "id", required: true, description: "User identifier" })
  @ApiResponse({ status: HttpStatus.OK, description: "Success", type: User })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request" })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: "Not Found" })  
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: "Failed" })  
  findOne(@Param('id') id: string) : Promise<User> {
    return this.usersService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: "Updates a user with specified id" })
  @ApiParam({ name: "id", required: true, description: "User identifier" })
  @ApiResponse({ status: HttpStatus.OK, description: "Success", type: User })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request" })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: "Not Found" })  
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: "Failed" })  
  async update(@Param('id') id: string, @Body() user: User) : Promise<any> {
    await this.usersService.update(id, user);
    return { message: `User with id: ${id} updated successfully`};
  } 

  @Delete(':id')
  @ApiOperation({ summary: "Deletes a user with specified id" })
  @ApiParam({ name: "id", required: true, description: "User identifier" })
  @ApiResponse({ status: HttpStatus.NO_CONTENT, description: "Success" })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request" })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: "Not Found" })  
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: "Failed" })  
  async delete(@Param('id') id: string) : Promise<any> {
    const user = await this.usersService.findOne(id);
    if (!user){
      throw new NotFoundException(`User with id: ${id} does not exist`);
    }

    await this.usersService.remove(id);
    return { message: `User with id: ${id} deleted successfully`};
  }
}
