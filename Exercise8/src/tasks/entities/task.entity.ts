import { Entity, Column } from "typeorm";
@Entity()
export class Task {
    @Column()
    id: string;

    @Column()   
    name: string; 
    
    @Column()    
    description: string;

    @Column()    
    type: string; 
    
    @Column()    
    userId: string; 
    
    @Column()    
    state: string; 
}
