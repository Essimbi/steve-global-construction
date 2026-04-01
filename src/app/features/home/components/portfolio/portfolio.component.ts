import { Component, AfterViewInit, Inject, PLATFORM_ID, ElementRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { ServicesDataService } from '../../../../core/services/services.service';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements AfterViewInit {
  projects: Project[] = [];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object, 
    private el: ElementRef,
    private servicesData: ServicesDataService
  ) {
    this.initializeProjects();
  }

  private initializeProjects() {
    // Services phares à afficher + autres services
    const serviceIds = [5, 12, 15, 16, 4, 9, 3]; // Électricité, Vente Électrique & Solaire, Vidéo Surveillance, Froid & Climatisation, Forage, Plâtrerie, Énergies Renouvelables
    const projects: Project[] = [];
    let projectId = 1;

    serviceIds.forEach(serviceId => {
      const service = this.servicesData.getServiceById(serviceId);
      if (service && service.gallery && service.gallery.length > 0) {
        // Prendre la première image de la galerie du service
        projects.push({
          id: projectId++,
          title: `Réalisation ${service.name}`,
          category: service.name,
          image: service.gallery[0],
          description: service.description
        });
      }
    });

    this.projects = projects;
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initAnimations();
    }
  }

  private initAnimations() {
    const cards = this.el.nativeElement.querySelectorAll('.project-card');
    cards.forEach((card: HTMLElement, i: number) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
        },
        y: 60,
        opacity: 0,
        duration: 1,
        delay: i * 0.2,
        ease: 'power3.out'
      });
    });
  }
}
