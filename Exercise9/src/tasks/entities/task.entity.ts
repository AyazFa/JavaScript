import { Entity, Column, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { User } from '../../users/entities/user.entity';
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Task {
    @PrimaryColumn()
    @ApiProperty({ description: "Task identifier", nullable: false })    
    id: string;

    @Column()
    @ApiProperty({ description: "Task name", nullable: false })       
    name: string; 
    
    @Column()
    @ApiProperty({ description: "Task description", nullable: false })          
    description: string;

    @Column()
    @ApiProperty({ description: "Task type", nullable: false })         
    type: string; 
    
    @JoinColumn()
    @OneToOne(() => User)
    @ApiProperty({ description: "User identifier", nullable: false })        
    user: string; 
    
    @Column()
    @ApiProperty({ description: "Task state", nullable: false })        
    state: string; 
}
