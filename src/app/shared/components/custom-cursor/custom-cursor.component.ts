import { Component, ElementRef, HostListener, ViewChild, AfterViewInit, NgZone, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-custom-cursor',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div #cursor class="custom-cursor"></div>
    <div #ring class="custom-cursor-ring"></div>
  `,
  styleUrl: './custom-cursor.component.scss'
})
export class CustomCursorComponent implements AfterViewInit {
  @ViewChild('cursor') cursor!: ElementRef;
  @ViewChild('ring') ring!: ElementRef;

  private mouseX = -100;
  private mouseY = -100;
  private ringX = -100;
  private ringY = -100;

  constructor(
    private ngZone: NgZone,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.ngZone.runOutsideAngular(() => {
        this.animate();
      });

      document.querySelectorAll('a, button, .clickable').forEach(el => {
        el.addEventListener('mouseenter', () => this.ring.nativeElement.classList.add('hover'));
        el.addEventListener('mouseleave', () => this.ring.nativeElement.classList.remove('hover'));
      });
    }
  }

  animate() {
    this.ringX += (this.mouseX - this.ringX) * 0.15;
    this.ringY += (this.mouseY - this.ringY) * 0.15;

    if (this.cursor) {
      this.cursor.nativeElement.style.transform = `translate(${this.mouseX}px, ${this.mouseY}px) translate(-50%, -50%)`;
    }
    if (this.ring) {
      this.ring.nativeElement.style.transform = `translate(${this.ringX}px, ${this.ringY}px) translate(-50%, -50%)`;
    }

    requestAnimationFrame(() => this.animate());
  }
}
