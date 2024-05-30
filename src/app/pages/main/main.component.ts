import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Event {
  image: string;
  title: string;
  date: string;
  location: string;
  description: string;
}

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
    title = 'Bienvenido a Artec';

      events: Event[] = [
    { 
      image: 'assets/EventosCuenca/Afiche-promocional-1.png', 
      title: 'Ecuentro de Mascaras', 
      date: 'Mayo 31, 2024', 
      location: 'Cuenca - Parque Calderon', 
      description: 'Circuito tecnico y conversatorio' 
    },
    { 
      image: 'assets/EventosCuenca/Afiche-promocional-2.png', 
      title: 'RugFestival', 
      date: 'Jun 29, 2024', 
      location: 'Cuenca - Teatro casa de la cultura', 
      description: '6 bandas en escena, no te lo pierdas.' 
    },
    { 
      image: 'assets/EventosCuenca/Afiche-promocional-3.png', 
      title: 'Tres reyes sabios', 
      date: 'Julio 9, 2024', 
      location: 'Cuenca - Sala Alfoncso Carrasco', 
      description: 'Obrade teatro' 
    },
    { 
     image: 'assets/EventosGuayaquil/Afiche-promocional-1.png', 
      title: 'Cantinflas', 
      date: 'Jun 10, 2024', 
      location: 'Guayaquil - Teatro Centro de Arte', 
      description: 'Monologo familiar.' 
    },
    { 
      image: 'assets/EventosGuayaquil/Afiche-promocional-2.png', 
      title: 'Chimoltrufia', 
      date: 'Jul 9, 2024', 
      location: 'Guayaquil - MicroTeatro UIO', 
      description: 'Descripción del evento 1.' 
    },
    { 
      image: 'assets/EventosGuayaquil/Afiche-promocional-3.png',  
      title: 'La india Maria', 
      date: 'Mayo 10, 2024', 
      location: 'Guayaquil - Teatro Centro de Arte', 
      description: 'Descripción del evento 2.' 
    },
    { 
      image: 'assets/EventosQuito/Afiche-promocional-1.png', 
      title: 'Latino America', 
      date: 'Mayo 9, 2024', 
      location: 'Quito - MicroTeatro UIO', 
      description: 'Descripción del evento 1.' 
    },
    { 
      image: 'assets/EventosQuito/Afiche-promocional-3.png', 
      title: 'Callate Isabel', 
      date: 'Mayo 10, 2024', 
      location: 'Quito - Teatro Centro de Arte', 
      description: 'Descripción del evento 2.' 
    },
    
  ];

  currentPage = 1;
  eventsPerPage = 12;


  onFilterChange(event: any) {
    const selectedCity = event.target.value;
    console.log('Selected city:', selectedCity);
  }

   get paginatedEvents(): Event[] {
    const startIndex = (this.currentPage - 1) * this.eventsPerPage;
    return this.events.slice(startIndex, startIndex + this.eventsPerPage);
  }

  get totalPages(): number {
    return Math.ceil(this.events.length / this.eventsPerPage);
  }

  setPage(page: number) {
    this.currentPage = page;
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
