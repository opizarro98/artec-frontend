import { Component,HostListener } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
    title = 'Bienvenido a Artec';

  carouselOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    nav: true,
    navText: ['<', '>'],
    items: 1,
    dots: true
  };
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

  onFilterChange(event: any) {
    const selectedCity = event.target.value;
    console.log('Selected city:', selectedCity);
    // Aquí puedes agregar lógica para filtrar eventos según la ciudad seleccionada
  }

}
