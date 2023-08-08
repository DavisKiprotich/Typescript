// Interface
interface Userdetail{
    email : string,
    name: string,
    id: number,
    startTrial: () => string,
    getCoupon(couponname: string): number
}

// Reopening and extension of the interface 
interface Userdetail{
    githubdet: string
}

const hit: Userdetail = {email:"gshs@g.com" ,
id: 6766, 
name:"gshhshsh",
githubdet: "fgsgshs"
, startTrial: () =>{
    return ""
},
getCoupon:(name: "gshsh") => {
    return 2
}
}



export{}
