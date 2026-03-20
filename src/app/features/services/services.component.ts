import { Component, AfterViewInit, Inject, PLATFORM_ID, ElementRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { RouterModule } from '@angular/router';
import { VanillaTiltDirective } from '../../shared/directives/vanilla-tilt.directive';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Service {
  id: number;
  name: string;
  icon: string;
  image: string;
  description: string;
  deliverables: string[];
  waText: string;
}

interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule, VanillaTiltDirective, LucideAngularModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements AfterViewInit {
  heroImage = 'assets/hero-services.png';
  services: Service[] = [
    {
      id: 1, name: 'Groupes Électrogènes', icon: 'zap',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
      description: 'Garantissez la continuité absolue de vos opérations. De l\'installation de relais télécoms aux solutions de secours pour l\'industrie lourde (jusqu\'à 2000 KVA), nous déployons des systèmes infaillibles.',
      deliverables: ['Audit capacitaire et dimensionnement précis', 'Déploiement, synchronisation et insonorisation', 'Contrats de maintenance préventive 24/7'],
      waText: 'Groupes%20%C3%A9lectrog%C3%A8nes'
    },
    {
      id: 2, name: 'Parcs Machines Industriels', icon: 'settings',
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5f58316c?auto=format&fit=crop&q=80&w=800',
      description: 'L\'ingénierie mécanique au service de votre productivité. Nous assurons l\'implantation, le réglage micrométrique et la mise en service de chaînes de production complexes.',
      deliverables: ['Levage et manutention lourde sécurisée', 'Alignement laser et tests en charge', 'Rétrofit et optimisation des lignes existantes'],
      waText: 'Machines%20industrielles'
    },
    {
      id: 3, name: 'Énergies Renouvelables', icon: 'sun',
      image: 'https://images.unsplash.com/photo-1509391366360-fe5bb5858345?auto=format&fit=crop&q=80&w=800',
      description: 'Prenez le virage de la transition énergétique. Conception de fermes solaires, centrales hybrides et solutions d\'autonomie totale pour sites isolés.',
      deliverables: ['Ingénierie photovoltaïque avancée', 'Stockage Lithium haute capacité', 'Supervision technique et pilotage intelligent'],
      waText: '%C3%89nergies%20renouvelables'
    },
    {
      id: 4, name: 'Forage & Adduction', icon: 'droplet',
      image: 'https://images.unsplash.com/photo-1541944743827-e04bb645f946?auto=format&fit=crop&q=80&w=800',
      description: 'Maîtrise complète de la ressource en eau. Des forages profonds aux réseaux d\'adduction sous pression pour l\'agriculture, l\'industrie et l\'habitat urbain.',
      deliverables: ['Études hydrogéologiques pointues', 'Tubage résistant et pompage immergé', 'Unités de potabilisation et filtration'],
      waText: 'Forage'
    },
    {
      id: 5, name: 'Électricité Bâtiment & Tertiaire', icon: 'plug',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800',
      description: 'L\'intelligence électrique de vos infrastructures. Courants forts et faibles, domotique, et réseaux sécurisés pour des bâtiments conformes aux normes internationales.',
      deliverables: ['Conception des armoires TGBT sur mesure', 'Câblage structuré et fibre optique', 'Mise en conformité et certification consuel'],
      waText: '%C3%89lectricit%C3%A9%20b%C3%A2timent'
    },
    {
      id: 6, name: 'Plomberie & Fluides', icon: 'shower-head',
      image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=800',
      description: 'Réseaux hydrauliques de haute fiabilité. Nous concevons des installations sanitaires et industrielles garantissant zéro fuite et une gestion optimale des pressions.',
      deliverables: ['Pose de réseaux PER, Multicouche et Inox', 'Chaufferie, surpresseurs et sécurité incendie', 'Équipements sanitaires de standing'],
      waText: 'Plomberie'
    },
    {
      id: 7, name: 'Revêtements & Carrelage', icon: 'brick-wall',
      image: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80&w=800',
      description: 'L\'alliance de la robustesse et du design architectural. Pose de matériaux nobles, marbres, et grès cérame très grand format avec une précision millimétrique.',
      deliverables: ['Ragréage technique et étanchéité sous carrelage', 'Calepinage complexe et découpes sur mesure', 'Traitement des pières naturelles'],
      waText: 'Carrelage'
    },
    {
      id: 8, name: 'Peinture Architecturale', icon: 'paint-bucket',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800',
      description: 'La signature visuelle de vos projets. Application de revêtements techniques, peintures anti-corrosion et finitions haut de gamme pour façades et intérieurs.',
      deliverables: ['Diagnostic des supports et traitements', 'Application Airless haute pression', 'Garantie de tenue aux climats extrêmes'],
      waText: 'Peinture%20en%20b%C3%A2timent'
    },
    {
      id: 9, name: 'Plâtrerie & Traitement de Surfaces', icon: 'sparkles',
      image: 'https://images.unsplash.com/photo-1517646281602-7b9a56caed3b?auto=format&fit=crop&q=80&w=800',
      description: 'L\'art de la perfection pour vos murs. Enduits de préparation, lissage intégral et correction acoustique pour des volumes intérieurs irréprochables.',
      deliverables: ['Rattrapage des aplombs complexes', 'Enduisage pelliculaire et projection mécanique', 'Bandes à joints invisibles'],
      waText: 'Enduit'
    },
    {
      id: 10, name: 'Béton Ciré & Décoration', icon: 'image',
      image: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800',
      description: 'Exprimez l\'unicité de vos espaces. Création de matières exclusives : béton ciré, stucco vénitien, résine époxy et effets métallisés.',
      deliverables: ['Béton spatulé sur sols et cloisons', 'Stuc marbré et Tadelakt traditionnel', 'Finitions hydrofuges spécifiques'],
      waText: 'D%C3%A9coration%20murale'
    },
    {
      id: 11, name: 'Cloisons & Faux Plafonds', icon: 'building-2',
      image: 'https://images.unsplash.com/photo-1544450173-8c8797913cf9?auto=format&fit=crop&q=80&w=800',
      description: 'Structuration et design des volumes intérieurs. Systèmes de cloisons modulaires, plafonds techniques, et décors en staff pour locaux commerciaux et résidentiels.',
      deliverables: ['Plafonds suspendus acoustiques coupe-feu', 'Création de corniches lumineuses et voûtes', 'Modélisation et pose d\'éléments 3D en staff'],
      waText: 'Staff%20et%20placo'
    }
  ];

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
    @Inject(PLATFORM_ID) private platformId: Object,
    private el: ElementRef
  ) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
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
}
