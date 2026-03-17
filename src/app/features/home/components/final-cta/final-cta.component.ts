import { Component, AfterViewInit, Inject, PLATFORM_ID, ElementRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-final-cta',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="final-cta">
      <div class="cta-bg-overlay"></div>
      <div class="container cta-content">
        <h2 class="display-text reveal">Votre projet mérite <br> <span class="gold-gradient-text">les meilleurs.</span></h2>
        <p class="reveal">Contactez-nous dès aujourd'hui pour un devis gratuit et personnalisé.</p>
        
        <div class="cta-buttons reveal">
          <a href="https://wa.me/237600000000?text=Bonjour%20Steve%20Global%20Construction%2C%20je%20souhaite%20un%20devis." 
             target="_blank" class="btn btn-whatsapp">
             Écrire sur WhatsApp
          </a>
          <a routerLink="/contact" class="btn btn-outline">Formulaire de contact</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .final-cta {
      position: relative;
      padding: 150px 0;
      background: var(--bg-primary);
      text-align: center;
      overflow: hidden;
      border-top: 1px solid var(--border);
    }

    .cta-bg-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at center, rgba(200, 151, 41, 0.05) 0%, transparent 70%);
      pointer-events: none;
    }

    .cta-content {
      position: relative;
      z-index: 2;

      h2 {
        font-size: clamp(2.5rem, 6vw, 5rem);
        margin-bottom: 30px;
      }

      p {
        font-size: 1.25rem;
        color: var(--text-secondary);
        margin-bottom: 50px;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
      }
    }

    .cta-buttons {
      display: flex;
      justify-content: center;
      gap: 20px;
    }

    @media (max-width: 768px) {
      .cta-buttons {
        flex-direction: column;
        align-items: center;
        width: 100%;
        
        .btn {
          width: 100%;
          justify-content: center;
        }
      }
    }
  `]
})
export class FinalCtaComponent implements AfterViewInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private el: ElementRef
  ) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const reveals = this.el.nativeElement.querySelectorAll('.reveal');
      const container = this.el.nativeElement.querySelector('.final-cta');
      
      if (reveals.length > 0 && container) {
        gsap.from(reveals, {
          scrollTrigger: {
            trigger: container,
            start: 'top 80%'
          },
          y: 40,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out'
        });
      }
    }
  }
}
