import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proof-bar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="ticker-wrapper">
      <div class="ticker">
        @for (item of tickerItems; track $index) {
          <div class="ticker-item">
            <span class="dot"></span>
            {{ item }}
          </div>
        }
        <!-- Duplicate for seamless loop -->
        @for (item of tickerItems; track $index) {
          <div class="ticker-item">
            <span class="dot"></span>
            {{ item }}
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    .ticker-wrapper {
      background: var(--bg-secondary);
      border-top: 1px solid var(--border);
      border-bottom: 1px solid var(--border);
      padding: 20px 0;
      overflow: hidden;
      white-space: nowrap;
      position: relative;
      z-index: 10;
    }

    .ticker {
      display: inline-flex;
      animation: ticker 40s linear infinite;
    }

    .ticker-item {
      display: flex;
      align-items: center;
      gap: 15px;
      padding: 0 40px;
      font-family: var(--font-mono);
      font-size: 0.8rem;
      color: var(--accent-gold);
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }

    .dot {
      width: 4px;
      height: 4px;
      background: var(--accent-gold);
      border-radius: 50%;
    }

    @keyframes ticker {
      0% { transform: translate3d(0, 0, 0); }
      100% { transform: translate3d(-50%, 0, 0); }
    }
  `]
})
export class ProofBarComponent {
  tickerItems = [
    "10+ ans d'expérience",
    "200+ projets livrés",
    "11 domaines d'expertise",
    "Douala, Cameroun",
    "Certifié & Agréé",
    "Innovation & Fiabilité",
    "Énergie Industrielle",
    "BTP Premium"
  ];
}
