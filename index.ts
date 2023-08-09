// classesc
class User12{
    public email: string  //Public and private can be used to control accessibility
    id: number
    private readonly city: string = "Timbuktu"
    constructor(email: string, id: number){
        this.email: email,
        this.id: id
    }
}
let hsfsg= new User12("vahvhv@g.com", 45566)
