import { CommonModule } from '@angular/common';
import { Component,HostListener } from '@angular/core';

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
      image: 'assets/event1.jpg', 
      title: 'Evento 1', 
      date: 'Mayo 9, 2024', 
      location: 'Quito - MicroTeatro UIO', 
      description: 'Descripción del evento 1.' 
    },
    { 
      image: 'assets/event2.jpg', 
      title: 'Evento 2', 
      date: 'Mayo 10, 2024', 
      location: 'Guayaquil - Teatro Centro de Arte', 
      description: 'Descripción del evento 2.' 
    },
    { 
      image: 'assets/event1.jpg', 
      title: 'Evento 1', 
      date: 'Mayo 9, 2024', 
      location: 'Quito - MicroTeatro UIO', 
      description: 'Descripción del evento 1.' 
    },
    { 
      image: 'assets/event2.jpg', 
      title: 'Evento 2', 
      date: 'Mayo 10, 2024', 
      location: 'Guayaquil - Teatro Centro de Arte', 
      description: 'Descripción del evento 2.' 
    },
    { 
      image: 'assets/event1.jpg', 
      title: 'Evento 1', 
      date: 'Mayo 9, 2024', 
      location: 'Quito - MicroTeatro UIO', 
      description: 'Descripción del evento 1.' 
    },
    { 
      image: 'assets/event2.jpg', 
      title: 'Evento 2', 
      date: 'Mayo 10, 2024', 
      location: 'Guayaquil - Teatro Centro de Arte', 
      description: 'Descripción del evento 2.' 
    },
    { 
      image: 'assets/event1.jpg', 
      title: 'Evento 1', 
      date: 'Mayo 9, 2024', 
      location: 'Quito - MicroTeatro UIO', 
      description: 'Descripción del evento 1.' 
    },
    { 
      image: 'assets/event2.jpg', 
      title: 'Evento 2', 
      date: 'Mayo 10, 2024', 
      location: 'Guayaquil - Teatro Centro de Arte', 
      description: 'Descripción del evento 2.' 
    },
    
  ];

  currentPage = 1;
  eventsPerPage = 12;

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
