export class CreateTaskDto {
    private id: number;
    private description: string;
    
    public constructor(id, description){
        this.id = id,
        this.description = description
    }    
}
