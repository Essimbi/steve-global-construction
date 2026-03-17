import { Directive, ElementRef, AfterViewInit, Input, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appVanillaTilt]',
  standalone: true
})
export class VanillaTiltDirective implements AfterViewInit, OnDestroy {
  @Input() tiltSettings: any = {
    max: 10,
    speed: 600,
    glare: true,
    'max-glare': 0.1,
    scale: 1.02
  };

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId) && window.matchMedia('(hover: hover)').matches) {
      import('vanilla-tilt').then(({ default: VanillaTilt }) => {
        VanillaTilt.init(this.el.nativeElement, this.tiltSettings);
      });
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId) && (this.el.nativeElement as any).vanillaTilt) {
      (this.el.nativeElement as any).vanillaTilt.destroy();
    }
  }
}
