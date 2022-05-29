import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Skills } from '../model/skills.model';

@Injectable({
  providedIn: 'root'
})

export class SkillsService {

  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getSkill():Observable<Skills[]>{
    return this.http.get<Skills[]>(`${this.apiServerUrl}ver/skills`);
   }


   public addSkill(skill:Skills):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}new/skill`, skill);
  }


  public updateSkill(id:number, skill: Skills):Observable<any>{
    return this.http.put<any>(`${this.apiServerUrl}/editar/skill/${id}`, skill);

  }

  public deleteSkill(id:number):Observable<any>{
    return this.http.delete<any>(`${this.apiServerUrl}delete/${id}`);
  }
  
}
