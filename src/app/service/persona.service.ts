import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {

  private apiServerUrl=environment.apiBaseUrl;

  
  // URL = 'http://localhost:8080/personas/';

  constructor(private http: HttpClient) { }

  public getPersona(): Observable<persona>{
  //   return this.http.get<persona>(this.URL+ 'traer/perfil');
    return this.http.get<persona>(`${this.apiServerUrl}detallepersona/1`);
  }

  public updatePersona(): Observable<persona>{
    return this.http.put<persona>(`${this.apiServerUrl}editar/persona/1`,persona);
  }

  


  // constructor(private http: HttpClient) { }

  // public getPersona(): Observable<persona[]> {
  //   return this.http.get<persona[]>(`${this.apiServerUrl}/detallepersona/1`);
  // }

  // public updatePerson(person: persona): Observable<persona> {
  //   return this.http.put<persona>(`${this.apiServerUrl}/editar/persona/1`,person);
  // }




}
