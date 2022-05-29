export class Educacion {
    id?: number;
    title: string;
    detail: string;
    start: string;
    end: string;
    institution: string;
    imgEdu: string;
    

    constructor(title: string, detail: string, start: string, end: string, institution: string, imgEdu: string){
        
        this.title = title;
        this.detail = detail;
        this.start = start;
        this.end = end;
        this.institution = institution;
        this.imgEdu = imgEdu;
       
    }

}    