export class CreateUserDto {
    private id: number;
    private name: string;
    
    public constructor(id, name){
        this.id = id,
        this.name = name
    }     
}
