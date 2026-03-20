import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'M. Jean-Paul',
      role: 'Directeur Technique - Industrie',
      content: 'Une expertise inégalée dans l\'installation de groupes électrogènes de forte puissance. SGC nous a accompagnés avec un professionnalisme rare.',
      rating: 5
    },
    {
      id: 2,
      name: 'Mme Claire E.',
      role: 'Promotrice Immobilière',
      content: 'Les finitions en carrelage et peinture sur notre dernier projet sont impeccables. La réactivité des équipes sur le terrain est un vrai plus.',
      rating: 5
    },
    {
      id: 3,
      name: 'Ing. Ibrahim B.',
      role: 'Chef de Projet Énergie',
      content: 'SGC est notre partenaire de confiance pour les projets solaires off-grid. Leur maîtrise technique est impressionnante.',
      rating: 4
    }
  ];
}
