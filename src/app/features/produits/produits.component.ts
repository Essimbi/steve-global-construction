import { Component, signal, computed, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { VanillaTiltDirective } from '../../shared/directives/vanilla-tilt.directive';

interface Product {
  id: number;
  name: string;
  description: string;
  category: 'Énergie' | 'Électricité' | 'BTP & Finition' | 'Eau & Forage';
  image: string;
  price?: string;
}

@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [CommonModule, VanillaTiltDirective],
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.scss'
})
export class ProduitsComponent {
  activeFilter = signal<string>('Tout');

  categories = ['Tout', 'Énergie', 'Électricité', 'BTP & Finition', 'Eau & Forage'];

  allProducts: Product[] = [
    { id: 1, name: 'Groupe Électrogène Insonorisé 20KVA', description: 'Idéal pour les chantiers urbains et les relais télécoms. Autonomie de 24h, moteur diesel Perkins, régulation AVR ultra-précise.', category: 'Énergie', image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=800', price: 'Sur devis' },
    { id: 2, name: 'Générateur Industriel 100KVA', description: 'Une puissance brute pour les industries lourdes. Châssis renforcé, système de refroidissement optimisé pour les climats tropicaux.', category: 'Énergie', image: 'https://images.unsplash.com/photo-1574880312604-bb70ced89b6c?auto=format&fit=crop&q=80&w=800', price: 'Sur devis' },
    { id: 3, name: 'Panneau Solaire Monocristallin 550W', description: 'Technologie Half-Cut Cell pour une efficacité maximale même en cas d\'ombrage partiel. Cadre en aluminium anodisé, garantie de rendement de 25 ans.', category: 'Énergie', image: 'https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?auto=format&fit=crop&q=80&w=800', price: 'Sur devis' },
    { id: 4, name: 'Onduleur Hybride 5KW', description: 'Gestion intelligente intégrée de l\'énergie. Compatible avec les batteries Lithium-ion de dernière génération.', category: 'Énergie', image: 'https://images.unsplash.com/photo-1583091929367-1518f97e70ec?auto=format&fit=crop&q=80&w=800', price: 'Sur devis' },
    { id: 5, name: 'Pompe Immergée Forage 3CV', description: 'Corps entièrement en acier inoxydable AISI 304. Idéale pour les grands débits et les puits profonds (jusqu\'à 150m).', category: 'Eau & Forage', image: 'https://images.unsplash.com/photo-1621376840733-46387bd216b3?auto=format&fit=crop&q=80&w=800', price: 'Sur devis' },
    { id: 6, name: 'Armoire Électrique TGBT', description: 'Tableau Général Basse Tension sur mesure. Équipé de disjoncteurs Schneider Electric, conçu pour la sécurité industrielle absolue.', category: 'Électricité', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800', price: 'Sur devis' },
    { id: 7, name: 'Touret Câble Cuivre Armé', description: 'Câblage basse et moyenne tension pour enfouissement direct. Gaine ultra-résistante aux chocs mécaniques et à l\'humidité.', category: 'Électricité', image: 'https://images.unsplash.com/photo-1596525166245-7adff12d8a43?auto=format&fit=crop&q=80&w=800', price: 'Sur devis' },
    { id: 8, name: 'Grès Cérame Pleine Masse 120×60', description: 'Carrelage très grand format effet béton brut. Résistance exceptionnelle au passage intensif, finition antidérapante R10.', category: 'BTP & Finition', image: 'https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&q=80&w=800', price: 'Sur devis' },
    { id: 9, name: 'Enduit de Lissage Pro', description: 'Micro-mortier haute performance pour une finition miroir avant peinture. Temps de prise rapide, sans fissure ni retrait.', category: 'BTP & Finition', image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800', price: 'Sur devis' },
    { id: 10, name: 'Peinture Façade Extrême', description: 'Revêtement acrylique imperméabilisant. Résiste aux UV intenses et aux pluies tropicales, lavable et durable.', category: 'BTP & Finition', image: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&q=80&w=800', price: 'Sur devis' },
  ];

  filteredProducts = computed(() => {
    const filter = this.activeFilter();
    return filter === 'Tout'
      ? this.allProducts
      : this.allProducts.filter(p => p.category === filter);
  });

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  setFilter(cat: string) {
    this.activeFilter.set(cat);
  }

  onOrder(product: Product) {
    if (isPlatformBrowser(this.platformId)) {
      const msg = encodeURIComponent(
        `Bonjour, je souhaite commander le produit suivant :\n\n*${product.name}*\n${product.description}\n\nMerci de me donner plus d'informations.`
      );
      window.open(`https://wa.me/237656199216?text=${msg}`, '_blank');
    }
  }
}
