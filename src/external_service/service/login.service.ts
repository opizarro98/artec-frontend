import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Person } from '../model/person';
import { ApiResponse } from '../model/ApiResponse';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private BASE_URL = 'http://localhost:8090/person';

  constructor(private http: HttpClient, private router: Router) {}

  // login(username: string, password: string): Observable<any> {
  //   console.log("Se llama al servicio: "+ this.BASE_URL+ "/login/"+ username +"/"+password);
  //   return this.http.get<any>(`${this.BASE_URL}/login/${username}/${password}`)
  //     .pipe(
  //       catchError(error => {
  //         console.error('Error en loginService:', error);
  //         throw error;
  //       })
  //     );
  // }

  login(username: string, password: string): Observable<ApiResponse<Person>> {
    return this.http.get<ApiResponse<Person>>(`${this.BASE_URL}/login/${username}/${password}`)
      .pipe(
        map((response: ApiResponse<Person>) => {
          if (response.status === 'OK') {
            this.router.navigate(['/nosotros']);
            return response;
          } else {
            throw new Error(response.message || 'Usuario o contraseña inválida');
          }
        }),
        catchError(this.handleError)
      );
  }

  register(person: Person): Observable<Person> {
    return this.http.post<ApiResponse<Person>>(`${this.BASE_URL}/registration`, person)
      .pipe(
        map((response: ApiResponse<Person>) => {
          if (response.status === 'OK' && response.data) {
            // Redirigir a la página deseada
            this.router.navigate(['/login']); // Redirige a la página de login
            return response.data;
          } else {
            throw new Error(response.message || 'Error en el registro');
          }
        }),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Error desconocido';
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Error del lado del servidor
      errorMessage = `Código de error: ${error.status}\nMensaje: ${error.message}`;
    }
    return throwError(errorMessage);
  }
  
}
