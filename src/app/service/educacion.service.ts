import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Educacion } from '../model/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  
  public getEducacion():Observable<Educacion[]>{
    return this.http.get<Educacion[]>(`${this.apiServerUrl}ver/educacion`);
   }


   public addEducacion(educacion:Educacion):Observable<Educacion>{
    return this.http.post<any>(`${this.apiServerUrl}new/educacion`, educacion);
  }


  public updateEducacion(id: number, educacion: Educacion):Observable<any>{
    return this.http.put<any>(`${this.apiServerUrl}/editar/educacion/${id}`, educacion);

  }

  public deleteEducacion(id:number):Observable<any>{
    return this.http.delete<any>(`${this.apiServerUrl}delete/${id}`);
  }


  
  



}
