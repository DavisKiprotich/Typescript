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

export{}
