import { Component, OnInit, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesDataService } from '../../core/services/services.service';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-realisations',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './realisations.html',
  styleUrl: './realisations.scss',
})
export class RealisationsComponent implements OnInit {
  private servicesService = inject(ServicesDataService);
  
  allImages: any[] = [];
  categories: string[] = [];
  filteredImages: any[] = [];
  activeCategory: string = 'Tous';

  // Lightbox State
  isModalOpen = false;
  selectedImage: any = null;
  selectedIndex = 0;

  ngOnInit() {
    this.allImages = this.servicesService.getAllImages();
    this.categories = ['Tous', ...this.servicesService.getCategories()];
    this.filteredImages = [...this.allImages];
  }

  filterByCategory(category: string) {
    this.activeCategory = category;
    if (category === 'Tous') {
      this.filteredImages = [...this.allImages];
    } else {
      this.filteredImages = this.allImages.filter(img => img.category === category);
    }
  }

  openModal(index: number) {
    this.selectedIndex = index;
    this.selectedImage = this.filteredImages[index];
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedImage = null;
    document.body.style.overflow = 'auto';
  }

  nextImage(event?: MouseEvent) {
    if (event) event.stopPropagation();
    this.selectedIndex = (this.selectedIndex + 1) % this.filteredImages.length;
    this.selectedImage = this.filteredImages[this.selectedIndex];
  }

  prevImage(event?: MouseEvent) {
    if (event) event.stopPropagation();
    this.selectedIndex = (this.selectedIndex - 1 + this.filteredImages.length) % this.filteredImages.length;
    this.selectedImage = this.filteredImages[this.selectedIndex];
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (!this.isModalOpen) return;
    
    if (event.key === 'Escape') this.closeModal();
    if (event.key === 'ArrowRight') this.nextImage();
    if (event.key === 'ArrowLeft') this.prevImage();
  }
}
