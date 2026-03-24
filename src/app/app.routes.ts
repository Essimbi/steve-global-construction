import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'services',
    loadComponent: () => import('./features/services/services.component').then(m => m.ServicesComponent)
  },
  {
    path: 'realisations',
    loadComponent: () => import('./features/realisations/realisations').then(m => m.RealisationsComponent)
  },
  {
    path: 'produits',
    loadComponent: () => import('./features/produits/produits.component').then(m => m.ProduitsComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
