import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero.component';
import { ProofBarComponent } from './components/proof-bar/proof-bar.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { ServicesGridComponent } from './components/services-grid/services-grid.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';
import { FinalCtaComponent } from './components/final-cta/final-cta.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    HeroComponent, 
    ProofBarComponent, 
    AboutSectionComponent,
    ServicesGridComponent,
    FeaturedProductsComponent,
    WhyChooseUsComponent,
    FinalCtaComponent
  ],
  template: `
    <div class="home-page">
      <app-hero></app-hero>
      <app-proof-bar></app-proof-bar>
      <app-about-section></app-about-section>
      <app-services-grid></app-services-grid>
      <app-featured-products></app-featured-products>
      <app-why-choose-us></app-why-choose-us>
      <app-final-cta></app-final-cta>
    </div>
  `,
  styles: [`
    .home-page {
      width: 100%;
    }
  `]
})
export class HomeComponent {}
