export class Experiencia {
    id?: number;
    position: string;
    description: string;
    start: string;
    end: string;
    organization: string;
    imgExp: string;


    constructor(position: string, description: string, start: string, end: string, organization: string, imgExp: string){
        
        this.position = position;
        this.description = description;
        this.start = start;
        this.end = end;
        this.organization = organization;
        this.imgExp = imgExp;
       
    }

}