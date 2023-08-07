// union types - combination of 2 or more types using |

let score: number | string = 30
score = 44;
score= "55";

type User = {
    name: '',
    id: 34
}
type User1 = {
    name: '',
    id: 34
}
let Momo : User | User1

// union in arrays
const data: (string | number | boolean)[] = ["1",2 ,'',true]

let seatAllotment: "shazam" | "ghsh"
