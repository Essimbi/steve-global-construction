import { Component, AfterViewInit, Inject, PLATFORM_ID, ElementRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { RouterModule } from '@angular/router';
import { VanillaTiltDirective } from '../../../../shared/directives/vanilla-tilt.directive';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface Service {
  id: number;
  name: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-services-grid',
  standalone: true,
  imports: [CommonModule, RouterModule, VanillaTiltDirective, LucideAngularModule],
  templateUrl: './services-grid.component.html',
  styleUrl: './services-grid.component.scss'
})
export class ServicesGridComponent implements AfterViewInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private el: ElementRef
  ) {}

  services: Service[] = [
    { id: 1, name: 'Groupes électrogènes', description: 'Installation & maintenance de groupes toutes puissances.', icon: 'zap' },
    { id: 2, name: 'Machines industrielles', description: 'Expertise en montage et entretien de parcs machines.', icon: 'settings' },
    { id: 3, name: 'Énergies renouvelables', description: 'Solutions solaires et hybrides pour une énergie propre.', icon: 'sun' },
    { id: 4, name: 'Forage', description: 'Captage d’eau et installation de systèmes de pompage.', icon: 'droplet' },
    { id: 5, name: 'Électricité bâtiment', description: 'Installations électriques tertiaires et domestiques.', icon: 'plug' },
    { id: 6, name: 'Plomberie', description: 'Réseaux hydrauliques et équipements sanitaires.', icon: 'shower-head' },
    { id: 7, name: 'Carrelage', description: 'Pose de revêtements premium pour sols et murs.', icon: 'brick-wall' },
    { id: 8, name: 'Peinture en bâtiment', description: 'Finitions intérieures et extérieures haute qualité.', icon: 'paint-bucket' },
    { id: 9, name: 'Enduit', description: 'Préparation et lissage des surfaces pour un rendu parfait.', icon: 'sparkles' },
    { id: 10, name: 'Décoration murale', description: 'Peinture décorative, stucco et finitions artistiques.', icon: 'image' },
    { id: 11, name: 'Staff et placo', description: 'Faux plafonds et cloisons pour des espaces modernes.', icon: 'building-2' }
  ];

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      gsap.registerPlugin(ScrollTrigger);
      
      const cards = this.el.nativeElement.querySelectorAll('.service-card');
      const triggerSection = this.el.nativeElement.querySelector('.services-grid-wrapper');

      if (cards.length > 0) {
        cards.forEach((card: HTMLElement, index: number) => {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: 'top 92%',
              once: true
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: (index % 2) * 0.1,
            ease: 'power3.out'
          });
        });

        setTimeout(() => {
          ScrollTrigger.refresh();
        }, 500);
      }
    }
  }
}
