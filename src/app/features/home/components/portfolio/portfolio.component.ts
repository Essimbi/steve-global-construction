import { Component, AfterViewInit, Inject, PLATFORM_ID, ElementRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
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
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements AfterViewInit {
  projects: Project[] = [
    {
      id: 1,
      title: 'Installation Électrique Tertiaire',
      category: 'Électricité',
      image: 'assets/images/WhatsApp Image 2026-03-14 at 15.58.33(22).jpeg',
      description: 'Déploiement complet du réseau électrique pour un complexe de bureaux moderne.'
    },
    {
      id: 2,
      title: 'Suite Parentale de Luxe',
      category: 'Finition & Déco',
      image: 'assets/images/WhatsApp Image 2026-03-14 at 15.58.33(37).jpeg',
      description: 'Aménagement complet d\'une chambre haut de gamme avec habillage mural doré.'
    },
    {
      id: 3,
      title: 'Cuisine Moderne Équipée',
      category: 'Menuiserie & Plomberie',
      image: 'assets/images/WhatsApp Image 2026-03-14 at 15.58.33(26).jpeg',
      description: 'Installation d\'une cuisine contemporaine avec plan de travail de précision.'
    },
    {
      id: 4,
      title: 'Bar & Lounge Premium',
      category: 'Électricité & Déco',
      image: 'assets/images/WhatsApp Image 2026-03-14 at 15.58.33(32).jpeg',
      description: 'Création d\'un espace détente avec éclairage LED dynamique haute performance.'
    },
    {
      id: 5,
      title: 'Plomberie Haute Performance',
      category: 'Plomberie',
      image: 'assets/images/WhatsApp Image 2026-03-14 at 15.58.33(29).jpeg',
      description: 'Réseau complexe de distribution de fluides pour installation industrielle.'
    }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private el: ElementRef) {}

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
