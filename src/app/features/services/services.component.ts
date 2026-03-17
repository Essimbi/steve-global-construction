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
  description: string;
  deliverables: string[];
  waText: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule, VanillaTiltDirective, LucideAngularModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements AfterViewInit {
  services: Service[] = [
    {
      id: 1, name: 'Groupes Électrogènes', icon: 'zap',
      description: 'Garantissez la continuité absolue de vos opérations. De l\'installation de relais télécoms aux solutions de secours pour l\'industrie lourde (jusqu\'à 2000 KVA), nous déployons des systèmes infaillibles.',
      deliverables: ['Audit capacitaire et dimensionnement précis', 'Déploiement, synchronisation et insonorisation', 'Contrats de maintenance préventive 24/7'],
      waText: 'Groupes%20%C3%A9lectrog%C3%A8nes'
    },
    {
      id: 2, name: 'Parcs Machines Industriels', icon: 'settings',
      description: 'L\'ingénierie mécanique au service de votre productivité. Nous assurons l\'implantation, le réglage micrométrique et la mise en service de chaînes de production complexes.',
      deliverables: ['Levage et manutention lourde sécurisée', 'Alignement laser et tests en charge', 'Rétrofit et optimisation des lignes existantes'],
      waText: 'Machines%20industrielles'
    },
    {
      id: 3, name: 'Énergies Renouvelables', icon: 'sun',
      description: 'Prenez le virage de la transition énergétique. Conception de fermes solaires, centrales hybrides et solutions d\'autonomie totale pour sites isolés.',
      deliverables: ['Ingénierie photovoltaïque avancée', 'Stockage Lithium haute capacité', 'Supervision technique et pilotage intelligent'],
      waText: '%C3%89nergies%20renouvelables'
    },
    {
      id: 4, name: 'Forage & Adduction', icon: 'droplet',
      description: 'Maîtrise complète de la ressource en eau. Des forages profonds aux réseaux d\'adduction sous pression pour l\'agriculture, l\'industrie et l\'habitat urbain.',
      deliverables: ['Études hydrogéologiques pointues', 'Tubage résistant et pompage immergé', 'Unités de potabilisation et filtration'],
      waText: 'Forage'
    },
    {
      id: 5, name: 'Électricité Bâtiment & Tertiaire', icon: 'plug',
      description: 'L\'intelligence électrique de vos infrastructures. Courants forts et faibles, domotique, et réseaux sécurisés pour des bâtiments conformes aux normes internationales.',
      deliverables: ['Conception des armoires TGBT sur mesure', 'Câblage structuré et fibre optique', 'Mise en conformité et certification consuel'],
      waText: '%C3%89lectricit%C3%A9%20b%C3%A2timent'
    },
    {
      id: 6, name: 'Plomberie & Fluides', icon: 'shower-head',
      description: 'Réseaux hydrauliques de haute fiabilité. Nous concevons des installations sanitaires et industrielles garantissant zéro fuite et une gestion optimale des pressions.',
      deliverables: ['Pose de réseaux PER, Multicouche et Inox', 'Chaufferie, surpresseurs et sécurité incendie', 'Équipements sanitaires de standing'],
      waText: 'Plomberie'
    },
    {
      id: 7, name: 'Revêtements & Carrelage', icon: 'brick-wall',
      description: 'L\'alliance de la robustesse et du design architectural. Pose de matériaux nobles, marbres, et grès cérame très grand format avec une précision millimétrique.',
      deliverables: ['Ragréage technique et étanchéité sous carrelage', 'Calepinage complexe et découpes sur mesure', 'Traitement des pierres naturelles'],
      waText: 'Carrelage'
    },
    {
      id: 8, name: 'Peinture Architecturale', icon: 'paint-bucket',
      description: 'La signature visuelle de vos projets. Application de revêtements techniques, peintures anti-corrosion et finitions haut de gamme pour façades et intérieurs.',
      deliverables: ['Diagnostic des supports et traitements', 'Application Airless haute pression', 'Garantie de tenue aux climats extrêmes'],
      waText: 'Peinture%20en%20b%C3%A2timent'
    },
    {
      id: 9, name: 'Plâtrerie & Traitement de Surfaces', icon: 'sparkles',
      description: 'L\'art de la perfection pour vos murs. Enduits de préparation, lissage intégral et correction acoustique pour des volumes intérieurs irréprochables.',
      deliverables: ['Rattrapage des aplombs complexes', 'Enduisage pelliculaire et projection mécanique', 'Bandes à joints invisibles'],
      waText: 'Enduit'
    },
    {
      id: 10, name: 'Béton Ciré & Décoration', icon: 'image',
      description: 'Exprimez l\'unicité de vos espaces. Création de matières exclusives : béton ciré, stucco vénitien, résine époxy et effets métallisés.',
      deliverables: ['Béton spatulé sur sols et cloisons', 'Stuc marbré et Tadelakt traditionnel', 'Finitions hydrofuges spécifiques'],
      waText: 'D%C3%A9coration%20murale'
    },
    {
      id: 11, name: 'Cloisons & Faux Plafonds', icon: 'building-2',
      description: 'Structuration et design des volumes intérieurs. Systèmes de cloisons modulaires, plafonds techniques, et décors en staff pour locaux commerciaux et résidentiels.',
      deliverables: ['Plafonds suspendus acoustiques coupe-feu', 'Création de corniches lumineuses et voûtes', 'Modélisation et pose d\'éléments 3D en staff'],
      waText: 'Staff%20et%20placo'
    }
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private el: ElementRef
  ) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const cards = this.el.nativeElement.querySelectorAll('.service-detail-card');
      const triggerSection = this.el.nativeElement.querySelector('.services-detail-grid');
      
      if (cards.length > 0 && triggerSection) {
        gsap.from(cards, {
          scrollTrigger: { trigger: triggerSection, start: 'top 85%' },
          y: 60, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out'
        });
      }
    }
  }

  onWhatsApp(service: Service) {
    const url = `https://wa.me/237600000000?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20votre%20service%20%3A%20${service.waText}`;
    window.open(url, '_blank');
  }
}
