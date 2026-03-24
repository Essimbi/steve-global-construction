import { Injectable } from '@angular/core';

export interface Service {
  id: number;
  name: string;
  icon: string;
  image: string;
  description: string;
  deliverables: string[];
  waText: string;
  gallery?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ServicesDataService {
  private readonly IMAGES_PATH = 'assets/images/';
  private readonly SERVICES_PATH = 'assets/services/';

  private services: Service[] = [
    {
      id: 1, name: 'Groupes Électrogènes', icon: 'zap',
      image: this.SERVICES_PATH + 'groupe.jpeg',
      description: 'Garantissez la continuité absolue de vos opérations. De l\'installation de relais télécoms aux solutions de secours pour l\'industrie lourde (jusqu\'à 2000 KVA), nous déployons des systèmes infaillibles.',
      deliverables: ['Audit capacitaire et dimensionnement précis', 'Déploiement, synchronisation et insonorisation', 'Contrats de maintenance préventive 24/7'],
      waText: 'Groupes%20%C3%A9lectrog%C3%A8nes'
    },
    {
      id: 2, name: 'Parcs Machines Industriels', icon: 'settings',
      image: this.SERVICES_PATH + 'parcs.jpeg',
      description: 'L\'ingénierie mécanique au service de votre productivité. Nous assurons l\'implantation, le réglage micrométrique et la mise en service de chaînes de production complexes.',
      deliverables: ['Levage et manutention lourde sécurisée', 'Alignement laser et tests en charge', 'Rétrofit et optimisation des lignes existantes'],
      waText: 'Machines%20industrielles'
    },
    {
      id: 3, name: 'Énergies Renouvelables', icon: 'sun',
      image: this.SERVICES_PATH + 'energie_r.jpeg',
      description: 'Prenez le virage de la transition énergétique. Conception de fermes solaires, centrales hybrides et solutions d\'autonomie totale pour sites isolés.',
      deliverables: ['Ingénierie photovoltaïque avancée', 'Stockage Lithium haute capacité', 'Supervision technique et pilotage intelligent'],
      waText: '%C3%89nergies%20renouvelables'
    },
    {
      id: 4, name: 'Forage & Adduction', icon: 'droplet',
      image: this.SERVICES_PATH + 'forage.jpeg',
      description: 'Maîtrise complète de la ressource en eau. Des forages profonds aux réseaux d\'adduction sous pression pour l\'agriculture, l\'industrie et l\'habitat urbain.',
      deliverables: ['Études hydrogéologiques pointues', 'Tubage résistant et pompage immergé', 'Unités de potabilisation et filtration'],
      waText: 'Forage'
    },
    {
      id: 5, name: 'Électricité Bâtiment & Tertiaire', icon: 'plug',
      image: this.SERVICES_PATH + 'electricite.jpeg',
      description: 'L\'intelligence électrique de vos infrastructures. Courants forts et faibles, domotique, et réseaux sécurisés pour des bâtiments conformes aux normes internationales.',
      deliverables: ['Conception des armoires TGBT sur mesure', 'Câblage structuré et fibre optique', 'Mise en conformité et certification consuel'],
      waText: '%C3%89lectricit%C3%A9%20b%C3%A2timent',
      gallery: [
        this.IMAGES_PATH + 'WhatsApp Image 2026-03-14 at 15.58.33(22).jpeg',
        this.IMAGES_PATH + 'WhatsApp Image 2026-03-14 at 15.58.33(32).jpeg'
      ]
    },
    {
      id: 6, name: 'Plomberie & Fluides', icon: 'shower-head',
      image: this.SERVICES_PATH + 'plomberie.jpeg',
      description: 'Réseaux hydrauliques de haute fiabilité. Nous concevons des installations sanitaires et industrielles garantissant zéro fuite et une gestion optimale des pressions.',
      deliverables: ['Pose de réseaux PER, Multicouche et Inox', 'Chaufferie, surpresseurs et sécurité incendie', 'Équipements sanitaires de standing'],
      waText: 'Plomberie',
      gallery: [
        this.IMAGES_PATH + 'WhatsApp Image 2026-03-14 at 15.58.33(29).jpeg',
        this.IMAGES_PATH + 'WhatsApp Image 2026-03-14 at 15.58.33(19).jpeg',
        this.IMAGES_PATH + 'WhatsApp Image 2026-03-14 at 15.58.33(27).jpeg'
      ]
    },
    {
      id: 7, name: 'Revêtements & Carrelage', icon: 'brick-wall',
      image: this.SERVICES_PATH + 'revetement.jpeg',
      description: 'L\'alliance de la robustesse et du design architectural. Pose de matériaux nobles, marbres, et grès cérame très grand format avec une précision millimétrique.',
      deliverables: ['Ragréage technique et étanchéité sous carrelage', 'Calepinage complexe et découpes sur mesure', 'Traitement des pières naturelles'],
      waText: 'Carrelage',
      gallery: [
        this.IMAGES_PATH + 'WhatsApp Image 2026-03-14 at 15.58.33(21).jpeg',
        this.IMAGES_PATH + 'WhatsApp Image 2026-03-14 at 15.58.33(26).jpeg'
      ]
    },
    {
      id: 8, name: 'Peinture Architecturale', icon: 'paint-bucket',
      image: this.SERVICES_PATH + 'penture.avif',
      description: 'La signature visuelle de vos projets. Application de revêtements techniques, peintures anti-corrosion et finitions haut de gamme pour façades et intérieurs.',
      deliverables: ['Diagnostic des supports et traitements', 'Application Airless haute pression', 'Garantie de tenue aux climats extrêmes'],
      waText: 'Peinture%20en%20b%C3%A2timent',
      gallery: [
        this.IMAGES_PATH + 'WhatsApp Image 2026-03-14 at 15.58.33(25).jpeg',
        this.IMAGES_PATH + 'WhatsApp Image 2026-03-14 at 15.58.33(31).jpeg',
        this.IMAGES_PATH + 'WhatsApp Image 2026-03-14 at 15.58.33(35).jpeg'
      ]
    },
    {
      id: 9, name: 'Plâtrerie & Traitement de Surfaces', icon: 'sparkles',
      image: this.SERVICES_PATH + 'platrerie.jpg',
      description: 'L\'art de la perfection pour vos murs. Enduits de préparation, lissage intégral et correction acoustique pour des volumes intérieurs irréprochables.',
      deliverables: ['Rattrapage des aplombs complexes', 'Enduisage pelliculaire et projection mécanique', 'Bandes à joints invisibles'],
      waText: 'Enduit',
      gallery: [
        this.IMAGES_PATH + 'WhatsApp Image 2026-03-14 at 15.58.33(24).jpeg',
        this.IMAGES_PATH + 'WhatsApp Image 2026-03-14 at 15.58.33(28).jpeg',
        this.IMAGES_PATH + 'WhatsApp Image 2026-03-14 at 15.58.33(34).jpeg'
      ]
    },
    {
      id: 10, name: 'Béton Ciré & Décoration', icon: 'image',
      image: this.SERVICES_PATH + 'beton.jpg',
      description: 'Exprimez l\'unicité de vos espaces. Création de matières exclusives : béton ciré, stucco vénitien, résine époxy et effets métallisés.',
      deliverables: ['Béton spatulé sur sols et cloisons', 'Stuc marbré et Tadelakt traditionnel', 'Finitions hydrofuges spécifiques'],
      waText: 'D%C3%A9coration%20murale',
      gallery: [
        this.IMAGES_PATH + 'WhatsApp Image 2026-03-14 at 15.58.33(37).jpeg',
        this.IMAGES_PATH + 'WhatsApp Image 2026-03-14 at 15.58.33(18).jpeg',
        this.IMAGES_PATH + 'WhatsApp Image 2026-03-14 at 15.58.33(23).jpeg',
        this.IMAGES_PATH + 'WhatsApp Image 2026-03-14 at 15.58.33(33).jpeg'
      ]
    },
    {
      id: 11, name: 'Cloisons & Faux Plafonds', icon: 'building-2',
      image: this.SERVICES_PATH + 'plafond.jpeg',
      description: 'Structuration et design des volumes intérieurs. Systèmes de cloisons modulaires, plafonds techniques, et décors en staff pour locaux commerciaux et résidentiels.',
      deliverables: ['Plafonds suspendus acoustiques coupe-feu', 'Création de corniches lumineuses et voûtes', 'Modélisation et pose d\'éléments 3D en staff'],
      waText: 'Staff%20et%20placo',
      gallery: [
        this.IMAGES_PATH + 'WhatsApp Image 2026-03-14 at 15.58.33(20).jpeg',
        this.IMAGES_PATH + 'WhatsApp Image 2026-03-14 at 15.58.33(30).jpeg',
        this.IMAGES_PATH + 'WhatsApp Image 2026-03-14 at 15.58.33(36).jpeg'
      ]
    },
    {
      id: 12, name: 'Vente de Matériels Électriques', icon: 'shopping-cart',
      image: this.SERVICES_PATH + 'vente_electrique.jpg',
      description: 'Accédez à un catalogue complet de matériel électrique certifié. Disjoncteurs, câbles armés, onduleurs et composants industriels des plus grandes marques internationales.',
      deliverables: ['Composants basse et moyenne tension', 'Équipements de protection et coupure', 'Conseil technique et SAV réactif'],
      waText: 'Vente%20mat%C3%A9riel%20%C3%A9lectrique'
    },
    {
      id: 13, name: 'Formation Professionnelle Pratique', icon: 'graduation-cap',
      image: this.SERVICES_PATH + 'formation_pro.jpeg',
      description: 'Montez en compétence avec nos experts. Formations techniques 100% pratiques sur le terrain en électricité, maintenance de groupes et installations industrielles.',
      deliverables: ['Modules spécialisés par métier', 'Certification de fin de formation', 'Accompagnement et insertion professionnelle'],
      waText: 'Formation%20professionnelle'
    },
    {
      id: 14, name: 'Réseaux Basse Tension (BT)', icon: 'network',
      image: this.SERVICES_PATH + 'reseau_basse_tension.jpeg',
      description: 'Conception et déploiement de réseaux de distribution électrique. Nous assurons l\'extension de réseaux, la pose de transformateurs et le raccordement final.',
      deliverables: ['Études de charge et plans de réseau', 'Plantation de supports et tirage de câbles', 'Mise en service et équilibrage des phases'],
      waText: 'R%C3%A9seau%20BT'
    }
  ];

  getServices(): Service[] {
    return this.services;
  }

  getServiceById(id: number): Service | undefined {
    return this.services.find(s => s.id === id);
  }

  getAllImages() {
    const allImages: { url: string; service: string; category: string }[] = [];
    this.services.forEach(s => {
      if (s.gallery) {
        s.gallery.forEach(img => {
          allImages.push({
            url: img,
            service: s.name,
            category: s.name
          });
        });
      }
    });
    return allImages;
  }

  getCategories() {
    return this.services
      .filter(s => s.gallery && s.gallery.length > 0)
      .map(s => s.name);
  }
}
