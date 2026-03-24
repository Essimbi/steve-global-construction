import { Component, AfterViewInit, Inject, PLATFORM_ID, ElementRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { RouterModule } from '@angular/router';
import { VanillaTiltDirective } from '../../../../shared/directives/vanilla-tilt.directive';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { ServicesDataService, Service } from '../../../../core/services/services.service';

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
    private el: ElementRef,
    private servicesData: ServicesDataService
  ) {
    this.services = this.servicesData.getServices();
  }

  services: Service[] = [];

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
