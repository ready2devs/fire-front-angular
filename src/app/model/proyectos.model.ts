export class Proyectos {
    id?: number;
    title: string;
    detail: string;
    start: string;
    end: string;
    imgProyecto: string;


    constructor(title: string, detail: string, start: string, end: string, imgProyecto: string){
        
        this.title = title;
        this.detail = detail;
        this.start = start;
        this.end = end;
        this.imgProyecto = imgProyecto;
       
    }


}