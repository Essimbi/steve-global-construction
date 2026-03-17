import { Component, AfterViewInit, Inject, PLATFORM_ID, ElementRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './why-choose-us.component.html',
  styleUrl: './why-choose-us.component.scss'
})
export class WhyChooseUsComponent implements AfterViewInit {
  reasons = [
    { 
      icon: 'wrench', 
      title: 'Expertise Technique', 
      desc: 'Des ingénieurs et techniciens hautement qualifiés pour chaque domaine.',
      stat: 150,
      suffix: '+'
    },
    { 
      icon: 'trophy', 
      title: 'Qualité Certifiée', 
      desc: 'Utilisation de matériaux normés et respect des standards internationaux.',
      stat: 100,
      suffix: '%'
    },
    { 
      icon: 'zap', 
      title: 'Réactivité Terrain', 
      desc: 'Intervention rapide et suivi rigoureux de chaque chantier.',
      stat: 24,
      suffix: '/7'
    }
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private el: ElementRef
  ) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initAnimations();
    }
  }

  private initAnimations() {
    const items = this.el.nativeElement.querySelectorAll('.reason-item');
    
    items.forEach((item: HTMLElement) => {
      const statNum = item.querySelector('.stat-number');
      const targetVal = parseInt(statNum?.getAttribute('data-value') || '0');

      gsap.to(statNum, {
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
        },
        innerHTML: targetVal,
        duration: 2,
        ease: 'power2.out',
        snap: { innerHTML: 1 },
      });
    });
  }
}
