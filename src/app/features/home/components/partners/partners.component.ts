import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.scss'
})
export class PartnersComponent {
  partners = [
    { name: 'SNH Cameroun' },
    { name: 'ENEO' },
    { name: 'CDE' },
    { name: 'MAGZI' },
    { name: 'MINMAP' },
    { name: 'TOTAL Energies' },
    { name: 'Group CFAO' },
    { name: 'Tradex' }
  ];
}
