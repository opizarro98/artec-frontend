import { Component, HostListener } from '@angular/core';
import {MainComponent} from '../main/main.component';
import {LoginComponent} from '../login/login.component';
import {Routes, RouterOutlet, RouterLink} from '@angular/router';
import {RegistroComponent} from '../registro/registro.component';
import {NosotrosComponent} from '../nosotros/nosotros.component';
import {PromocionateComponent} from '../promocionate/promocionate.component';
import {CommonModule} from '@angular/common';
import {FooterComponent} from '../footer/footer.component';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterLink,RouterOutlet, MainComponent, FooterComponent, MenuComponent, LoginComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const header = document.getElementById('header');
    if (header) {
      if (window.pageYOffset > 50) {
        header.classList.add('transparent');
      } else {
        header.classList.remove('transparent');
      }
    }
  }
}
