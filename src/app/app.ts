import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { WhatsappBtnComponent } from './shared/components/whatsapp-btn/whatsapp-btn.component';
import { CustomCursorComponent } from './shared/components/custom-cursor/custom-cursor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    NavbarComponent, 
    FooterComponent, 
    WhatsappBtnComponent, 
    CustomCursorComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initLenis();
    }
  }

  private async initLenis() {
    const Lenis = (await import('lenis')).default;
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    // Reset scroll on navigation
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      lenis.scrollTo(0, { immediate: true });
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }
}
