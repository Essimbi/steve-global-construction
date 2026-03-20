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
      title: 'Centrale Solaire Off-Grid',
      category: 'Énergie',
      image: 'https://images.unsplash.com/photo-1509391366360-fe5bb5858345?auto=format&fit=crop&q=80&w=800',
      description: 'Installation d\'une ferme solaire de 500kW pour un site industriel isolé.'
    },
    {
      id: 2,
      title: 'Résidence Horizon',
      category: 'Construction',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
      description: 'Immeuble de standing R+5 avec finitions architecturales haut de gamme.'
    },
    {
      id: 3,
      title: 'Réseau d\'Adduction d\'Eau',
      category: 'Forage',
      image: 'https://images.unsplash.com/photo-1541944743827-e04bb645f946?auto=format&fit=crop&q=80&w=800',
      description: 'Système complet de pompage et de distribution pour une zone rurale.'
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
