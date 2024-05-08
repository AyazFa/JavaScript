import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from "./users/entities/user.entity"
import { Task } from "./tasks/entities/task.entity"

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'dpg-cotm9n7109ks73anpfo0-a',
      port: 5432,
      username: 'otus',
      password: '202312',
      database: 'leet_clone',
      entities: [User, Task],
      synchronize: true     
    }),
    TypeOrmModule.forFeature([User, Task]),
    UsersModule, 
    TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
