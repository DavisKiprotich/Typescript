interface takePic {
  cameraMtode: string
  filter: string
  pass : number
}

interface story{
  createStory(): void
}

 class insta implements takepic{
   constructor(
     public cameraMode: string
     public filter: string
     public pass: number
   ){}
   class Youtube implements takepic, story{
   constructor(
     public cameraMode: string,
     public filter: string,
     public pass: number, 
     public short: number
   ){}
     createStory(): void{
     console.log("Story has been created")
     }
 }
