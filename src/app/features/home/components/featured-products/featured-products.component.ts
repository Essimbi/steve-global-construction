import { Component, AfterViewInit, Inject, PLATFORM_ID, ElementRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface Product {
  id: number;
  name: string;
  image: string;
  category: string;
}

@Component({
  selector: 'app-featured-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './featured-products.component.html',
  styleUrl: './featured-products.component.scss'
})
export class FeaturedProductsComponent implements AfterViewInit {
  products: Product[] = [
    { id: 1, name: 'Groupe Électrogène Insonorisé 20KVA', category: 'Énergie', image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=800' },
    { id: 2, name: 'Panneau Solaire Monocristallin 550W', category: 'Énergie', image: 'https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?auto=format&fit=crop&q=80&w=800' },
    { id: 3, name: 'Armoire Électrique TGBT', category: 'Électricité', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800' }
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private el: ElementRef
  ) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      gsap.registerPlugin(ScrollTrigger);
      
      const cards = this.el.nativeElement.querySelectorAll('.product-card');
      const triggerSection = this.el.nativeElement.querySelector('.featured-products');

      if (cards.length > 0 && triggerSection) {
        gsap.from(cards, {
          scrollTrigger: {
            trigger: triggerSection,
            start: 'top 80%',
          },
          x: 100,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out'
        });
      }
    }
  }

  onOrder(product: Product) {
    const text = encodeURIComponent(`Bonjour, je souhaite commander le produit suivant : *${product.name}*`);
    window.open(`https://wa.me/237600000000?text=${text}`, '_blank');
  }
}
