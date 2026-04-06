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
    // Sélection manuelle des 8 meilleures réalisations pour la page d'accueil
    this.projects = [
      {
        id: 1,
        title: 'Chantier de Construction',
        category: 'Gros Œuvre & Bâtiment',
        image: 'assets/images/construction/WhatsApp Image 2026-04-04 at 10.49.50 (1).jpeg',
        description: 'Exécution rigoureuse de travaux structurels avec un suivi de qualité irréprochable.'
      },
      {
        id: 2,
        title: 'Aménagement Intérieur',
        category: 'Plâtrerie & Finitions',
        image: 'assets/images/platerie/WhatsApp Image 2026-04-04 at 10.49.44 (2).jpeg',
        description: 'Design des espaces intérieurs avec des finitions en staff et plâtrerie haut de gamme.'
      },
      {
        id: 3,
        title: 'Installation Électrique',
        category: 'Électricité Tertiaire',
        image: 'assets/images/electrique/WhatsApp Image 2026-04-04 at 10.49.47.jpeg',
        description: 'Déploiement de réseaux électriques complexes et mise en conformité.'
      },
      {
        id: 4,
        title: 'Réseau de Froid',
        category: 'Froid & Climatisation',
        image: 'assets/images/froid/froid_1.jpg',
        description: 'Installation de systèmes de climatisation et de chambre froide industrielle.'
      },
      {
        id: 5,
        title: 'Sécurité Intégrale',
        category: 'Vidéo Surveillance',
        image: 'assets/images/cameras/camera_1.jpg',
        description: 'Mise en place de caméras de sécurité et d\'infrastructures de télésurveillance 24/7.'
      },
      {
        id: 6,
        title: 'Adduction d\'Eau',
        category: 'Forage & Pompage',
        image: 'assets/services/forage/forage_1.jpg',
        description: 'Forage hydraulique de grande profondeur et systèmes de pompage fluides.'
      },
      {
        id: 7,
        title: 'Éclairage Public Solaire',
        category: 'Énergies Renouvelables',
        image: 'assets/images/lampadaires/lampadaire_1.jpg',
        description: 'Installation de lampadaires solaires pour villes et quartiers résidentiels autonômes.'
      },
      {
        id: 8,
        title: 'Infrastructures Lourdes',
        category: 'Parcs Machines',
        image: 'assets/services/parcs/parcs_1.jpg',
        description: 'Manutention, alignement et mise en service de machines industrielles professionnelles.'
      },
      {
        id: 9,
        title: 'Déploiement Groupes Électrogènes',
        category: 'Secours & Énergie',
        image: 'assets/services/groupes/groupe_1.jpg',
        description: 'Installation et synchronisation de groupes électrogènes haute capacité pour l\'industrie.'
      },
      {
        id: 10,
        title: 'Plomberie Industrielle',
        category: 'Plomberie & Fluides',
        image: 'assets/services/plomberie/plomberie_1.jpg',
        description: 'Conception de réseaux hydrauliques et installations sanitaires complexes zéro fuite.'
      }
    ];
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
