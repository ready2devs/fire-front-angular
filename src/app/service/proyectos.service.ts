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
    return this.http.get<Proyectos[]>(`${this.apiServerUrl}ver/proyectos`);
   }


   public addProyecto(proyecto:Proyectos):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}new/proyecto`, proyecto);
  }


  public updateProyecto(id:number, proyecto: Proyectos):Observable<any>{
    return this.http.put<any>(`${this.apiServerUrl}/editar/proyecto/${id}`, proyecto);

  }

  public deleteProyecto(id:number):Observable<any>{
    return this.http.delete<any>(`${this.apiServerUrl}delete/${id}`);
  }
  


}
