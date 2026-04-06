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
      image: this.SERVICES_PATH + 'groupes/groupe_1.jpg',
      description: 'Garantissez la continuité absolue de vos opérations. De l\'installation de relais télécoms aux solutions de secours pour l\'industrie lourde (jusqu\'à 2000 KVA), nous déployons des systèmes infaillibles.',
      deliverables: ['Audit capacitaire et dimensionnement précis', 'Déploiement, synchronisation et insonorisation', 'Contrats de maintenance préventive 24/7'],
      waText: 'Groupes%20%C3%A9lectrog%C3%A8nes',
      gallery: [
        this.SERVICES_PATH + 'groupes/groupe_1.jpg',
        this.SERVICES_PATH + 'groupes/groupe_2.jpg',
        this.SERVICES_PATH + 'groupes/groupe_3.jpg',
        this.SERVICES_PATH + 'groupes/groupe_4.jpg'
      ]
    },
    {
      id: 2, name: 'Parcs Machines Industriels', icon: 'settings',
      image: this.SERVICES_PATH + 'parcs/parcs_1.jpg',
      description: 'L\'ingénierie mécanique au service de votre productivité. Nous assurons l\'implantation, le réglage micrométrique et la mise en service de chaînes de production complexes.',
      deliverables: ['Levage et manutention lourde sécurisée', 'Alignement laser et tests en charge', 'Rétrofit et optimisation des lignes existantes'],
      waText: 'Machines%20industrielles',
      gallery: [
        this.SERVICES_PATH + 'parcs/parcs_1.jpg',
        this.SERVICES_PATH + 'parcs/parcs_2.jpg',
        this.SERVICES_PATH + 'parcs/parcs_3.jpg'
      ]
    },
    {
      id: 3, name: 'Énergies Renouvelables', icon: 'sun',
      image: this.SERVICES_PATH + 'energie/energie_1.jpg',
      description: 'Prenez le virage de la transition énergétique. Conception de fermes solaires, centrales hybrides et solutions d\'autonomie totale pour sites isolés.',
      deliverables: ['Ingénierie photovoltaïque avancée', 'Stockage Lithium haute capacité', 'Supervision technique et pilotage intelligent'],
      waText: '%C3%89nergies%20renouvelables',
      gallery: [
        this.SERVICES_PATH + 'energie/energie_1.jpg',
        this.SERVICES_PATH + 'energie/energie_2.jpg',
        this.SERVICES_PATH + 'energie/energie_3.jpg',
        this.SERVICES_PATH + 'energie/energie_4.jpg',
        this.IMAGES_PATH + 'rea/WhatsApp Image 2026-03-30 at 09.54.40 (3).jpeg'
      ]
    },
    {
      id: 4, name: 'Forage & Adduction', icon: 'droplet',
      image: this.SERVICES_PATH + 'forage/forage_1.jpg',
      description: 'Maîtrise complète de la ressource en eau. Des forages profonds aux réseaux d\'adduction sous pression pour l\'agriculture, l\'industrie et l\'habitat urbain.',
      deliverables: ['Études hydrogéologiques pointues', 'Tubage résistant et pompage immergé', 'Unités de potabilisation et filtration'],
      waText: 'Forage',
      gallery: [
        this.SERVICES_PATH + 'forage/forage_1.jpg',
        this.SERVICES_PATH + 'forage/forage_2.jpg',
        this.SERVICES_PATH + 'forage/forage_3.jpg'
      ]
    },
    {
      id: 5, name: 'Électricité Bâtiment & Tertiaire', icon: 'plug',
      image: this.SERVICES_PATH + 'electricite/electricite_1.jpg',
      description: 'L\'intelligence électrique de vos infrastructures. Courants forts et faibles, domotique, et réseaux sécurisés pour des bâtiments conformes aux normes internationales.',
      deliverables: ['Conception des armoires TGBT sur mesure', 'Câblage structuré et fibre optique', 'Mise en conformité et certification consuel'],
      waText: '%C3%89lectricit%C3%A9%20b%C3%A2timent',
      gallery: [
        this.SERVICES_PATH + 'electricite/electricite_1.jpg',
        this.SERVICES_PATH + 'electricite/electricite_2.jpg',
        this.SERVICES_PATH + 'electricite/electricite_3.jpg',
        this.IMAGES_PATH + 'electrique/WhatsApp Image 2026-04-04 at 10.49.39.jpeg',
        this.IMAGES_PATH + 'electrique/WhatsApp Image 2026-04-04 at 10.49.43 (1).jpeg',
        this.IMAGES_PATH + 'electrique/WhatsApp Image 2026-04-04 at 10.49.46 (1).jpeg',
        this.IMAGES_PATH + 'electrique/WhatsApp Image 2026-04-04 at 10.49.46.jpeg',
        this.IMAGES_PATH + 'electrique/WhatsApp Image 2026-04-04 at 10.49.47 (2).jpeg',
        this.IMAGES_PATH + 'electrique/WhatsApp Image 2026-04-04 at 10.49.47.jpeg',
        this.IMAGES_PATH + 'electrique/WhatsApp Image 2026-04-04 at 10.49.49 (1).jpeg',
        this.IMAGES_PATH + 'electrique/WhatsApp Image 2026-04-04 at 10.49.51 (1).jpeg',
        this.IMAGES_PATH + 'electrique/WhatsApp Image 2026-04-04 at 10.49.52.jpeg'
      ]
    },
    {
      id: 6, name: 'Plomberie & Fluides', icon: 'shower-head',
      image: this.SERVICES_PATH + 'plomberie/plomberie_1.jpg',
      description: 'Réseaux hydrauliques de haute fiabilité. Nous concevons des installations sanitaires et industrielles garantissant zéro fuite et une gestion optimale des pressions.',
      deliverables: ['Pose de réseaux PER, Multicouche et Inox', 'Chaufferie, surpresseurs et sécurité incendie', 'Équipements sanitaires de standing'],
      waText: 'Plomberie',
      gallery: [
        this.SERVICES_PATH + 'plomberie/plomberie_1.jpg',
        this.SERVICES_PATH + 'plomberie/plomberie_2.jpg',
        this.SERVICES_PATH + 'plomberie/plomberie_3.jpg',
        this.IMAGES_PATH + 'rea/WhatsApp Image 2026-03-30 at 09.54.40 (2).jpeg'
      ]
    },
    {
      id: 7, name: 'Revêtements & Carrelage', icon: 'brick-wall',
      image: this.SERVICES_PATH + 'carrelage/carrelage_1.jpg',
      description: 'L\'alliance de la robustesse et du design architectural. Pose de matériaux nobles, marbres, et grès cérame très grand format avec une précision millimétrique.',
      deliverables: ['Ragréage technique et étanchéité sous carrelage', 'Calepinage complexe et découpes sur mesure', 'Traitement des pières naturelles'],
      waText: 'Carrelage',
      gallery: [
        this.SERVICES_PATH + 'carrelage/carrelage_1.jpg',
        this.SERVICES_PATH + 'carrelage/carrelage_2.jpg',
        this.SERVICES_PATH + 'carrelage/carrelage_3.jpg'
      ]
    },
    {
      id: 8, name: 'Peinture Architecturale', icon: 'paint-bucket',
      image: this.SERVICES_PATH + 'peinture/peinture_1.jpg',
      description: 'La signature visuelle de vos projets. Application de revêtements techniques, peintures anti-corrosion et finitions haut de gamme pour façades et intérieurs.',
      deliverables: ['Diagnostic des supports et traitements', 'Application Airless haute pression', 'Garantie de tenue aux climats extrêmes'],
      waText: 'Peinture%20en%20b%C3%A2timent',
      gallery: [
        this.SERVICES_PATH + 'peinture/peinture_1.jpg',
        this.SERVICES_PATH + 'peinture/peinture_2.jpg',
        this.SERVICES_PATH + 'peinture/peinture_3.jpg'
      ]
    },
    {
      id: 9, name: 'Plâtrerie & Traitement de Surfaces', icon: 'sparkles',
      image: this.SERVICES_PATH + 'platrerie/platrerie_1.jpg',
      description: 'L\'art de la perfection pour vos murs. Enduits de préparation, lissage intégral et correction acoustique pour des volumes intérieurs irréprochables.',
      deliverables: ['Rattrapage des aplombs complexes', 'Enduisage pelliculaire et projection mécanique', 'Bandes à joints invisibles'],
      waText: 'Enduit',
      gallery: [
        this.SERVICES_PATH + 'platrerie/platrerie_1.jpg',
        this.SERVICES_PATH + 'platrerie/platrerie_2.jpg',
        this.SERVICES_PATH + 'platrerie/platrerie_3.png',
        this.IMAGES_PATH + 'platerie/WhatsApp Image 2026-04-04 at 10.49.38 (1).jpeg',
        this.IMAGES_PATH + 'platerie/WhatsApp Image 2026-04-04 at 10.49.38.jpeg',
        this.IMAGES_PATH + 'platerie/WhatsApp Image 2026-04-04 at 10.49.41 (1).jpeg',
        this.IMAGES_PATH + 'platerie/WhatsApp Image 2026-04-04 at 10.49.41.jpeg',
        this.IMAGES_PATH + 'platerie/WhatsApp Image 2026-04-04 at 10.49.42 (2).jpeg',
        this.IMAGES_PATH + 'platerie/WhatsApp Image 2026-04-04 at 10.49.42.jpeg',
        this.IMAGES_PATH + 'platerie/WhatsApp Image 2026-04-04 at 10.49.43.jpeg',
        this.IMAGES_PATH + 'platerie/WhatsApp Image 2026-04-04 at 10.49.44 (1).jpeg',
        this.IMAGES_PATH + 'platerie/WhatsApp Image 2026-04-04 at 10.49.44 (2).jpeg',
        this.IMAGES_PATH + 'platerie/WhatsApp Image 2026-04-04 at 10.49.47 (1).jpeg',
        this.IMAGES_PATH + 'platerie/WhatsApp Image 2026-04-04 at 10.49.48 (2).jpeg',
        this.IMAGES_PATH + 'platerie/WhatsApp Image 2026-04-04 at 10.49.48.jpeg',
        this.IMAGES_PATH + 'platerie/WhatsApp Image 2026-04-04 at 10.49.50.jpeg',
        this.IMAGES_PATH + 'platerie/WhatsApp Image 2026-04-04 at 10.49.51 (2).jpeg',
        this.IMAGES_PATH + 'platerie/WhatsApp Image 2026-04-04 at 10.49.51.jpeg',
        this.IMAGES_PATH + 'platerie/WhatsApp Image 2026-04-04 at 10.49.52 (2).jpeg',
        this.IMAGES_PATH + 'platerie/WhatsApp Image 2026-04-04 at 10.49.53 (1).jpeg',
        this.IMAGES_PATH + 'platerie/WhatsApp Image 2026-04-04 at 10.49.53 (2).jpeg',
        this.IMAGES_PATH + 'platerie/WhatsApp Image 2026-04-04 at 10.49.53.jpeg'
      ]
    },
    {
      id: 10, name: 'Béton Ciré & Décoration', icon: 'image',
      image: this.SERVICES_PATH + 'beton/beton_1.jpg',
      description: 'Exprimez l\'unicité de vos espaces. Création de matières exclusives : béton ciré, stucco vénitien, résine époxy et effets métallisés.',
      deliverables: ['Béton spatulé sur sols et cloisons', 'Stuc marbré et Tadelakt traditionnel', 'Finitions hydrofuges spécifiques'],
      waText: 'D%C3%A9coration%20murale',
      gallery: [
        this.SERVICES_PATH + 'beton/beton_1.jpg',
        this.SERVICES_PATH + 'beton/beton_2.jpg',
        this.SERVICES_PATH + 'beton/beton_3.jpg'
      ]
    },
    {
      id: 11, name: 'Cloisons & Faux Plafonds', icon: 'building-2',
      image: this.SERVICES_PATH + 'plafond/cloison_1.jpg',
      description: 'Structuration et design des volumes intérieurs. Systèmes de cloisons modulaires, plafonds techniques, et décors en staff pour locaux commerciaux et résidentiels.',
      deliverables: ['Plafonds suspendus acoustiques coupe-feu', 'Création de corniches lumineuses et voûtes', 'Modélisation et pose d\'éléments 3D en staff'],
      waText: 'Staff%20et%20placo',
      gallery: [
        this.SERVICES_PATH + 'plafond/cloison_1.jpg',
        this.SERVICES_PATH + 'plafond/cloison_2.jpg',
        this.SERVICES_PATH + 'plafond/cloison_3.jpg',
        this.SERVICES_PATH + 'plafond/cloison_4.jpg'
      ]
    },
    {
      id: 12, name: 'Vente de Matériels Électriques et Accessoires Solaire', icon: 'shopping-cart',
      image: this.SERVICES_PATH + 'vente_electrique/vente_electrique_1.jpg',
      description: 'Accédez à un catalogue complet de matériel électrique certifié et d\'accessoires solaires. Disjoncteurs, câbles armés, onduleurs, panneaux solaires et composants industriels des plus grandes marques internationales.',
      deliverables: ['Composants basse et moyenne tension', 'Équipements de protection et coupure', 'Panneaux solaires et accessoires solaires', 'Conseil technique et SAV réactif'],
      waText: 'Vente%20mat%C3%A9riel%20%C3%A9lectrique%20et%20accessoires%20solaire',
      gallery: [
        this.SERVICES_PATH + 'vente_electrique/vente_electrique_1.jpg',
        this.SERVICES_PATH + 'vente_electrique/vente_electrique_2.jpg',
        this.SERVICES_PATH + 'vente_electrique/vente_electrique_3.jpg',
        this.SERVICES_PATH + 'vente_electrique/lampadaire_4.jpg',
        this.SERVICES_PATH + 'vente_electrique/cable.jpg',
        this.SERVICES_PATH + 'vente_electrique/batterie.jpg',
      ]
    },
    {
      id: 13, name: 'Formation Professionnelle Pratique', icon: 'graduation-cap',
      image: this.SERVICES_PATH + 'formation/formation_1.jpg',
      description: 'Montez en compétence avec nos experts. Formations techniques 100% pratiques sur le terrain en électricité, maintenance de groupes et installations industrielles.',
      deliverables: ['Modules spécialisés par métier', 'Certification de fin de formation', 'Accompagnement et insertion professionnelle'],
      waText: 'Formation%20professionnelle',
      gallery: [
        this.SERVICES_PATH + 'formation/formation_1.jpg',
        this.SERVICES_PATH + 'formation/formation_2.jpg',
        this.SERVICES_PATH + 'formation/formation_3.jpg'
      ]
    },
    {
      id: 14, name: 'Réseaux Basse Tension (BT)', icon: 'network',
      image: this.SERVICES_PATH + 'reseau_bt/reseau_bt_1.jpg',
      description: 'Conception et déploiement de réseaux de distribution électrique. Nous assurons l\'extension de réseaux, la pose de transformateurs et le raccordement final.',
      deliverables: ['Études de charge et plans de réseau', 'Plantation de supports et tirage de câbles', 'Mise en service et équilibrage des phases'],
      waText: 'R%C3%A9seau%20BT',
      gallery: [
        this.SERVICES_PATH + 'reseau_bt/reseau_bt_1.jpg',
        this.SERVICES_PATH + 'reseau_bt/reseau_bt_2.jpg',
        this.SERVICES_PATH + 'reseau_bt/reseau_bt_3.jpg'
      ]
    },
    {
      id: 15, name: 'Vidéo Surveillance', icon: 'wrench',
      image: this.IMAGES_PATH + 'cameras/camera_1.jpg',
      description: 'Sécurisez vos sites et installations avec nos systèmes de vidéo surveillance ultra-performants. Caméras haute résolution, enregistrement intelligent et surveillance 24/7 pour une tranquillité complète.',
      deliverables: ['Installation de caméras IP première qualité', 'Système d\'enregistrement et stockage sécurisé', 'Monitoring à distance et alertes en temps réel'],
      waText: 'Vid%C3%A9o%20surveillance',
      gallery: [
        this.IMAGES_PATH + 'cameras/camera_1.jpg',
        this.IMAGES_PATH + 'cameras/camera_2.jpg',
        this.IMAGES_PATH + 'cameras/camera_3.jpg',
        this.IMAGES_PATH + 'cameras/camera_4.jpg'
      ]
    },
    {
      id: 16, name: 'Froid et Climatisation', icon: 'settings',
      image: this.IMAGES_PATH + 'froid/froid_1.jpg',
      description: 'Maîtrisez le confort thermique de vos espaces en toutes saisons. Solutions de froid industriel, climatisation commerciale et systèmes performants pour une ambiance optimale.',
      deliverables: ['Dimensionnement et conception des installations', 'Installation de compresseurs et évaporateurs', 'Maintenance préventive et dépannage 24/7'],
      waText: 'Froid%20et%20climatisation',
      gallery: [
        this.IMAGES_PATH + 'froid/froid_1.jpg',
        this.IMAGES_PATH + 'froid/froidf_2.jpg',
        this.IMAGES_PATH + 'froid/froid_3.jpg',
        this.IMAGES_PATH + 'froid/froid_4.jpg'
      ]
    }
  ];

  getServices(): Service[] {
    return this.services;
  }

  getHomepageServices(): Service[] {
    // Retourne uniquement les services à afficher sur la home page
    const homepageServiceIds = [5, 12, 15, 16]; // Électricité, Vente Électrique & Solaire, Vidéo Surveillance, Froid & Climatisation
    return this.services.filter(s => homepageServiceIds.includes(s.id));
  }

  getServiceById(id: number): Service | undefined {
    return this.services.find(s => s.id === id);
  }

  getAllImages() {
    const allImages: { url: string; service: string; category: string }[] = [];
    
    // Ajouter les images des services
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

    // Ajouter les images des lampadaires depuis le dossier images
    const lampImages = [
      this.IMAGES_PATH + 'lampadaires/lampadaire_1.jpg',
      this.IMAGES_PATH + 'lampadaires/lampadaire_3.jpg'
    ];
    lampImages.forEach(img => {
      allImages.push({
        url: img,
        service: 'Lampadaires et Éclairage Public',
        category: 'Lampadaires et Éclairage Public'
      });
    });

    // Ajouter les images de construction générale
    const constImages = [
      this.IMAGES_PATH + 'construction/WhatsApp Image 2026-04-04 at 10.49.42 (1).jpeg',
      this.IMAGES_PATH + 'construction/WhatsApp Image 2026-04-04 at 10.49.44.jpeg',
      this.IMAGES_PATH + 'construction/WhatsApp Image 2026-04-04 at 10.49.48 (1).jpeg',
      this.IMAGES_PATH + 'construction/WhatsApp Image 2026-04-04 at 10.49.49.jpeg',
      this.IMAGES_PATH + 'construction/WhatsApp Image 2026-04-04 at 10.49.50 (1).jpeg',
      this.IMAGES_PATH + 'construction/WhatsApp Image 2026-04-04 at 10.49.52 (1).jpeg'
    ];
    constImages.forEach(img => {
      allImages.push({
        url: img,
        service: 'Construction & Bâtiment',
        category: 'Construction & Bâtiment'
      });
    });

    return allImages;
  }

  getCategories() {
    const serviceCategories = this.services
      .filter(s => s.gallery && s.gallery.length > 0)
      .map(s => s.name);
    
    // Ajouter la catégorie des lampadaires
    return [...serviceCategories, 'Lampadaires et Éclairage Public', 'Construction & Bâtiment'];
  }
}
