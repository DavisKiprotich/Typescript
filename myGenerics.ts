// Generics
const scores: Array<number> = []
const names: Array<string> = []

function identify(val: boolean | number): boolean| number{
    return val
}

function identify1(val: any) : any{
    return val
}
function identify2<Type>(val: Type): Type{
    return val
}
identify2("9")

function identify3<T>(val: T): T{
    return val
}

interface Bubble{
    brand: string,
    type: number
}

identify3<Bubble>({})


function searchPar<T>(parameter: T[]): T{
    const myInd = 3
    return parameter[myInd]
}

const getMorePar = <T>(param: T[]): T =>{
    const myIndex = 45
    return param[myIndex]
}
interface Db {
    connection: string,
    user: string,
    id: number
}

function getMorParameter<T, U extends number | string>(val1: T, val2:U):object{
    return{
        val1,
        val2
    }
}
getMorParameter(3, "5")

interface Quiz{
    name: string,
    type: string
}
interface Course{
    name: string,
    author: string,
    subject: string
}

class sellable<T>{
    public cart: T[] = []

    addToCart(product: T){
        this.cart.push(product)
    }
}



export{}

export{}
