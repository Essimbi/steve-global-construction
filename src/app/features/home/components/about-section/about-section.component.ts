import { Component, AfterViewInit, ElementRef, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss'
})
export class AboutSectionComponent implements AfterViewInit {
  @ViewChild('section') section!: ElementRef;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private el: ElementRef
  ) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initAnimations();
    }
  }

  private initAnimations() {
    const textEls = this.el.nativeElement.querySelectorAll('.about-text-content > *');
    const imageEl = this.el.nativeElement.querySelector('.about-image-wrapper');
    const triggerSection = this.el.nativeElement.querySelector('.about-section');

    if (textEls.length > 0 && triggerSection) {
      gsap.from(textEls, {
        scrollTrigger: {
          trigger: triggerSection,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      });
    }

    if (imageEl && triggerSection) {
      gsap.from(imageEl, {
        scrollTrigger: {
          trigger: triggerSection,
          start: 'top 80%',
        },
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
      });
    }
  }
}
