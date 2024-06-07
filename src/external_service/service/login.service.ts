import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private BASE_URL = 'http://localhost:8090/person';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    console.log("Se llama al servicio: "+ this.BASE_URL+ "/login/"+ username +"/"+password);
    return this.http.get<any>(`${this.BASE_URL}/login/${username}/${password}`)
      .pipe(
        catchError(error => {
          console.error('Error en loginService:', error);
          throw error;
        })
      );
  }
  
}
