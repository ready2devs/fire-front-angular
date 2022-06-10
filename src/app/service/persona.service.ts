import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {

  private apiServerUrl=environment.apiBaseUrl;

  
  // URL = 'http://localhost:8080/personas/';

  constructor(private http: HttpClient) { }

  public getPersona(): Observable<Persona[]>{
  //   return this.http.get<persona>(this.URL+ 'traer/perfil');
    return this.http.get<Persona[]>(`${this.apiServerUrl}persona/todas`);
  }

  public updatePersona(persona: Persona): Observable<Persona>{
    return this.http.put<Persona>(`${this.apiServerUrl}persona/editar`, persona);
  }

  public addPersona(persona:Persona):Observable<Persona>{
    return this.http.post<Persona>(`${this.apiServerUrl}persona/agregar`, persona);
  }

  public deletePersona(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}persona/borrar/${id}`);
  }


}
