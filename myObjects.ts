// Declaring Objects
const user = {
    name: "Karoti",
    isPaid: true
}

function createUser  ({name: string, isFined: boolean}){}
createUser({name: "Kaka", isFined: false})

function createAnswer():{}{   //First curly describes if param are string, number e.t.c
    return {}
}

// we can use type alias
type User ={
    name: string,
    email: string,
    isActive: boolean;
}

function createUser(user: User){}
createUser({name: "", email: "", isActive: true})

//readonly keyword does not allow changes in value
type User ={
    readonly name: string,
    email: string,
    isActive: boolean,
    credcarddetails ?: number // When question mark is added along gives it as an option
}

let myUser: user = {
    name: "",
    email: "afgh@h.com",
    isActive: true
}
myUser.email = "sdg@gmail.com"

type cardNumber = {
    cardNumber: string
}
type cardDate = {
    cardDate: number
}
type cardDetails = cardDate & cardNumber & {
    cvv: boolean
}



export{}
