//Abstract Interface
abstract class TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string
    ){}
    abstract sepia(): void
    getReeltime(): number{
        return 7
    }
}
class Insta extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string
    ){
        super(cameraMode, filter)
    
    } sepia(): void{
        console.log("seiia")
    }
}
