import { Component, AfterViewInit, OnDestroy, Inject, PLATFORM_ID, ElementRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { RouterModule } from '@angular/router';
import { VanillaTiltDirective } from '../../shared/directives/vanilla-tilt.directive';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import { ServicesDataService, Service } from '../../core/services/services.service';

interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

interface CarouselState {
  currentIndex: number;
  autoplayTimer: any;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule, VanillaTiltDirective, LucideAngularModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements AfterViewInit, OnDestroy {
  heroImage = 'assets/hero-services.png';
  services: Service[] = [];
  carouselStates: Map<number, CarouselState> = new Map();
  private platformId: Object;
  private isBrowser: boolean = false;

  faqItems: FaqItem[] = [
    {
      question: 'Intervenez-vous sur tout le territoire ?',
      answer: 'Oui, Steve Global Construction dispose d\'équipes mobiles capables de se déployer sur l\'ensemble du territoire national ainsi que dans la sous-région pour des projets d\'envergure.',
      isOpen: false
    },
    {
      question: 'Quels sont vos délais de déploiement ?',
      answer: 'La réactivité est l\'une de nos forces. Pour un audit technique, nous intervenons généralement sous 48h. Pour les chantiers, le planning est défini lors de la phase d\'ingénierie.',
      isOpen: false
    },
    {
      question: 'Offrez-vous des contrats de maintenance ?',
      answer: 'Absolument. Nous proposons des contrats de maintenance préventive et curative personnalisés pour garantir la pérennité de vos installations hydrauliques et électriques.',
      isOpen: false
    },
    {
      question: 'Vos installations sont-elles garanties ?',
      answer: 'Toutes nos réalisations bénéficient d\'une garantie décennale sur le gros œuvre et d\'une garantie de parfait achèvement sur les équipements techniques.',
      isOpen: false
    }
  ];

  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    private el: ElementRef,
    private servicesData: ServicesDataService
  ) {
    this.platformId = platformId;
    this.isBrowser = isPlatformBrowser(platformId);
    this.services = this.servicesData.getServices();
    
    // Initialize carousel states for each service
    this.services.forEach(service => {
      this.carouselStates.set(service.id, {
        currentIndex: 0,
        autoplayTimer: null
      });
    });
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
      // Initialize carousels
      this.services.forEach(service => {
        if (service.gallery && service.gallery.length > 0) {
          this.startAutoplay(service.id);
        }
      });

      const cards = this.el.nativeElement.querySelectorAll('.service-detail-card');
      
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
            delay: (index % 2) * 0.1, // Small stagger for cards in the same row
            ease: 'power3.out'
          });
        });

        // New sections animations
        const methodologyItems = this.el.nativeElement.querySelectorAll('.methodology-item');
        if (methodologyItems.length > 0) {
          methodologyItems.forEach((item: HTMLElement) => {
            gsap.from(item, {
              scrollTrigger: { trigger: item, start: 'top 90%', once: true },
              y: 40, opacity: 0, duration: 0.8, ease: 'power3.out'
            });
          });
        }

        const pillars = this.el.nativeElement.querySelectorAll('.pillar');
        if (pillars.length > 0) {
          pillars.forEach((pillar: HTMLElement, i: number) => {
            gsap.from(pillar, {
              scrollTrigger: { trigger: pillar, start: 'top 90%', once: true },
              y: 40, opacity: 0, duration: 0.8, delay: i * 0.1, ease: 'power3.out'
            });
          });
        }

        const faqItems = this.el.nativeElement.querySelectorAll('.faq-item');
        if (faqItems.length > 0) {
          faqItems.forEach((item: HTMLElement) => {
            gsap.from(item, {
              scrollTrigger: { trigger: item, start: 'top 92%', once: true },
              x: -20, opacity: 0, duration: 0.6, ease: 'power2.out'
            });
          });
        }

        // Refresh ScrollTrigger after a short delay to ensure correct positions with Lenis
        setTimeout(() => {
          ScrollTrigger.refresh();
        }, 800);
      }
    }
  }

  onWhatsApp(service: Service) {
    const url = `https://wa.me/237656199216?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20votre%20service%20%3A%20${service.waText}`;
    window.open(url, '_blank');
  }

  toggleFaq(item: FaqItem) {
    item.isOpen = !item.isOpen;
    // Trigger a ScrollTrigger refresh after the accordion expands/collapses
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);
  }

  // Carousel methods
  startAutoplay(serviceId: number) {
    const state = this.carouselStates.get(serviceId);
    const service = this.services.find(s => s.id === serviceId);
    
    if (!state || !service || !service.gallery || service.gallery.length <= 1) return;

    // Stop any existing autoplay
    this.stopAutoplay(serviceId);

    state.autoplayTimer = setInterval(() => {
      this.nextSlide(serviceId);
    }, 4000); // Change slide every 4 seconds
  }

  stopAutoplay(serviceId: number) {
    const state = this.carouselStates.get(serviceId);
    if (state && state.autoplayTimer) {
      clearInterval(state.autoplayTimer);
      state.autoplayTimer = null;
    }
  }

  nextSlide(serviceId: number) {
    const state = this.carouselStates.get(serviceId);
    const service = this.services.find(s => s.id === serviceId);
    
    if (!state || !service || !service.gallery) return;

    const galleryLength = service.gallery.length;
    state.currentIndex = (state.currentIndex + 1) % galleryLength;
    
    // Restart autoplay timer
    this.startAutoplay(serviceId);
  }

  prevSlide(serviceId: number) {
    const state = this.carouselStates.get(serviceId);
    const service = this.services.find(s => s.id === serviceId);
    
    if (!state || !service || !service.gallery) return;

    const galleryLength = service.gallery.length;
    state.currentIndex = (state.currentIndex - 1 + galleryLength) % galleryLength;
    
    // Restart autoplay timer
    this.startAutoplay(serviceId);
  }

  getCurrentSlide(serviceId: number): string {
    const state = this.carouselStates.get(serviceId);
    const service = this.services.find(s => s.id === serviceId);
    
    if (!state || !service || !service.gallery) return service?.image || '';
    
    return service.gallery[state.currentIndex];
  }

  ngOnDestroy() {
    // Clean up all autoplay timers
    this.carouselStates.forEach((state, serviceId) => {
      this.stopAutoplay(serviceId);
    });
  }
}
