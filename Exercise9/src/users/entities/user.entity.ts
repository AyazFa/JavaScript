import { Entity, Column, OneToOne, PrimaryColumn } from "typeorm";
import { Task } from '../../tasks/entities/task.entity';
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class User {
    @PrimaryColumn()
    @OneToOne(() => Task)
    @ApiProperty({ description: "User identifier", nullable: false })
    id: string;

    @Column()
    @ApiProperty({ description: "User name", nullable: false })    
    name: string;

    @Column()
    @ApiProperty({ description: "User role", nullable: false })    
    role: string;

    @Column()
    @ApiProperty({ description: "User organization", nullable: true })     
    organization: string;

    @Column("text", { array: true })
    @ApiProperty({ description: "User skills", nullable: true })    
    skills: string[];

    @Column()   
    createdAt: Date;

    @Column({ nullable: true })
    @ApiProperty({ description: "updated at", nullable: true })         
    updatedAt: Date;    
}
