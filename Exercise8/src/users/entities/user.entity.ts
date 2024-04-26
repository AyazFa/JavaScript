import { Entity, Column } from "typeorm";
@Entity()
export class User {
    @Column()
    id: string;

    @Column()
    name: string;

    @Column()
    role: string;

    @Column()
    organization: string;

    @Column()
    skills: string[];

    @Column()
    createdAt: Date;

    @Column()    
    updatedAt: Date;    
}
