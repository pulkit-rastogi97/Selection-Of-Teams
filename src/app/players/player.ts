export class Player{
    private id:number
    name:string;
    imgPath:string;
    pos:string;
        constructor(id:number,name:string,imgPath:string,pos:string){
        this.id = id;
        this.name = name;
        this.imgPath = imgPath;
        this.pos = pos;       
    }
}