import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterOutlet, Routes} from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { FooterComponent } from './pages/footer/footer.component';
import { MenuComponent } from './pages/menu/menu.component';
import { LoginComponent } from './pages/login/login.component';
import {RegistroComponent} from './pages/registro/registro.component';
import {NosotrosComponent} from './pages/nosotros/nosotros.component';
import {PromocionateComponent} from './pages/promocionate/promocionate.component';


export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'promocionate', component: PromocionateComponent },
    { path: 'inicio',component: MainComponent  }
];
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, FooterComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'artec';
  

}
