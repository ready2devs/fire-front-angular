import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyectos } from '../model/proyectos.model';

@Injectable({
  providedIn: 'root'
})

export class ProyectosService {

  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getProyecto():Observable<Proyectos[]>{
    return this.http.get<Proyectos[]>(`${this.apiServerUrl}proyectos/todos`);
   }


   public addProyecto(proyecto:Proyectos):Observable<Proyectos>{
    return this.http.post<Proyectos>(`${this.apiServerUrl}proyectos/agregar`, proyecto);
  }


  public updateProyecto(proyecto: Proyectos):Observable<Proyectos>{
    return this.http.put<Proyectos>(`${this.apiServerUrl}proyectos/editar`, proyecto);

  }

  public deleteProyecto(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}proyectos/borrar/${id}`);
  }
  


}
