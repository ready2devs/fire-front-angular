import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginDto } from '../config/login-dto/login-dto.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public login(credentials:LoginDto) : 
  
  Observable<Boolean> {
    return this.http.post<Boolean>(`${this.apiServerUrl}login`, credentials).pipe(
      tap((response: Boolean) => {
        if (response)
          sessionStorage.setItem("user", "lucianosica");
      })
    );
  }

  public logout() {
    sessionStorage.removeItem("user");
  }

  public isUserLogged():boolean {
    return sessionStorage.getItem("user") !== null;
  }
}
