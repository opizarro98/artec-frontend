import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {RouterLink, RouterOutlet} from '@angular/router';
import { Person } from '../../../external_service/model/person';
import {LoginService} from '../../../external_service/service/login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [RouterLink,RouterOutlet,FormsModule,CommonModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

 person: Person = {
    identifier: '',
    name: '',
    lastName: '',
    address: '',
    phoneNumber: '',
    userName: '',
    password: ''
  };
  errorMessage: string = '';

  constructor(private loginService: LoginService) {}

  register() {
    this.loginService.register(this.person).subscribe({
      next: (response: Person) => {
        console.log('Registro exitoso', response);
        // Aquí puedes manejar lo que necesitas hacer después de un registro exitoso
      },
      error: (error) => {
        console.error('Error en el registro:', error);
        this.errorMessage = error; // Muestra el mensaje de error en la UI
      }
    });
  }
}
