import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-whatsapp-btn',
  standalone: true,
  imports: [CommonModule],
  template: `
    <a [href]="whatsappUrl" target="_blank" class="whatsapp-btn" aria-label="Contactez-nous sur WhatsApp">
      <div class="pulse"></div>
      <svg viewBox="0 0 24 24" class="wa-icon">
        <path fill="currentColor" d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793 0-.852.449-1.271.608-1.445.159-.175.348-.218.463-.218.116 0 .232.001.334.005.109.004.256-.041.401.31.145.352.493 1.203.535 1.29.042.087.071.19.014.305-.057.115-.084.19-.17.29-.086.1-.184.22-.263.294-.092.086-.188.18-.081.364.107.184.478.788.102 1.367-.376.579-.691.751-.837.915s-.28.167-.464.075c-.184-.09-.78-.287-1.446-.882-.519-.462-.869-1.033-.97-1.207-.101-.174-.01-.268.077-.355.078-.078.184-.131.276-.232l.184-.184c.092-.092.115-.156.174-.261.059-.105.029-.197-.014-.284-.043-.087-.492-1.188-.675-1.623-.178-.423-.359-.364-.492-.371-.128-.007-.275-.008-.421-.008-.146 0-.383.055-.584.275-.2.22-.765.75-.765 1.832 0 1.082.788 2.126.897 2.271.109.145 1.55 2.368 3.755 3.32.524.226.934.361 1.254.463.525.167 1.003.144 1.381.087.422-.064 1.293-.528 1.474-1.038.182-.509.182-.945.127-1.035-.054-.09-.202-.144-.42-.254z"/>
        <path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.168L2 22l4.985-1.312C8.36 21.571 10.113 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.741 0-3.37-.476-4.767-1.3l-.341-.202-2.946.776.789-2.883-.221-.365A7.953 7.953 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/>
      </svg>
    </a>
  `,
  styles: [`
    .whatsapp-btn {
      position: fixed;
      bottom: 30px;
      right: 30px;
      width: 60px;
      height: 60px;
      background-color: #25D366;
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      box-shadow: 0 10px 25px rgba(37, 211, 102, 0.3);
      transition: transform 0.3s ease;
      
      &:hover {
        transform: scale(1.1) translateY(-5px);
      }
    }

    .wa-icon {
      width: 32px;
      height: 32px;
    }

    .pulse {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: #25D366;
      border-radius: 50%;
      z-index: -1;
      animation: pulse-animation 2s infinite;
    }

    @keyframes pulse-animation {
      0% {
        transform: scale(1);
        opacity: 0.5;
      }
      100% {
        transform: scale(1.6);
        opacity: 0;
      }
    }

    @media (max-width: 768px) {
      .whatsapp-btn {
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
      }
    }
  `]
})
export class WhatsappBtnComponent {
  whatsappUrl = 'https://wa.me/237600000000?text=Bonjour%20Steve%20Global%20Construction%20!';
}
