// classesc
class User12{
    public email: string  //Public and private can be used to control accessibility
    id: number
    private readonly city: string = "Timbuktu"
    constructor(email: string, id: number){
        this.email: email,
        this.id: id
    }
// getters
get getAppEmail(): string{
    return `apply ${this.email}`
}
get getCourse(): number{
    return this.id
}

// setters does not have a return type

set getCourse(Nume){
    if(Nume <= 1){
        throw new Error
    }
    this.getCourse = Nume
}
}
let hsfsg= new User12("vahvhv@g.com", 45566)
