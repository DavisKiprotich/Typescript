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

export{}
