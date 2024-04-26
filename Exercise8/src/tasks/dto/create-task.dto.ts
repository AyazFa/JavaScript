export class CreateTaskDto {
    private id: number;
    private name: string;    
    private description: string;
    private type: string;    
    private userId: string;    
    private state: string;   
    
    public constructor(id, name, description, type, userId, state){
        this.id = id,
        this.name = name,
        this.description = description,
        this.type = type,
        this.userId = userId,
        this.state = state
    }    
}
