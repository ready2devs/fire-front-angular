import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experiencia } from '../model/experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getExperiencia():Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(`${this.apiServerUrl}ver/experiencia`);
   }


   public addExperiencia(experiencia:Experiencia):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}new/experiencia`, experiencia);
  }


  public updateExperiencia(id:number, experiencia: Experiencia):Observable<any>{
    return this.http.put<any>(`${this.apiServerUrl}/editar/experiencia/${id}`, experiencia);

  }

  public deleteExperiencia(id:number):Observable<any>{
    return this.http.delete<any>(`${this.apiServerUrl}delete/${id}`);
  }
  


}
