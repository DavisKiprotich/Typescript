function detectTypes(val: number | string){
  if(typeof val === "string"){
    return val.toLowerCase()
  }
  return val + 3
}

function provideID(id: string | null){
  if(!id){
    console.log("Please provide id")
    return
  }
  id.toLowerCase()
}

// Type Narrowing
function printAll(strs: string | string[] | null) {

  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}
// in operator narrowing
interface User{
    name: string,
    id: number
}
interface Admin{
    name: string,
    id: number,
    isAdmin: boolean
}
function isAdminAcc(account: User | Admin){
    if("isAdmin" in account){
        return account.isAdmin
    }
}

// type predicate
type Fish= {swim: () => void}
type Bird = {fly: () => void}
function isFish(pet: Fish | Bird): pet is Fish{
    return (pet as Fish).swim !== undefined
}

function getFood (pet: Fish | Bird){
    if(isFish(pet)){
        pet
        return "Fish food"
    }
    pet
    return "Bird Food"
}

