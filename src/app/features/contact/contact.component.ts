import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, LucideAngularModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  heroImage = 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600';
  contactForm: FormGroup;
  submitted = false;

  services = [
    'Groupes électrogènes', 'Machines industrielles', 'Énergies renouvelables',
    'Forage', 'Électricité bâtiment', 'Plomberie', 'Carrelage',
    'Peinture en bâtiment', 'Enduit', 'Décoration murale', 'Staff et placo'
  ];

  constructor(
    private fb: FormBuilder,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.contactForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      services: [[], [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(20)]]
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.contactForm.controls;
  }

  toggleService(service: string) {
    const current: string[] = this.f['services'].value || [];
    const idx = current.indexOf(service);
    if (idx > -1) {
      this.f['services'].setValue(current.filter(s => s !== service));
    } else {
      this.f['services'].setValue([...current, service]);
    }
  }

  isServiceSelected(service: string): boolean {
    return (this.f['services'].value || []).includes(service);
  }

  onSubmit() {
    this.submitted = true;
    if (this.contactForm.invalid || !isPlatformBrowser(this.platformId)) return;

    const v = this.contactForm.value;
    const msg = [
      `*Nouvelle demande de devis*`,
      ``,
      `Nom: ${v.fullName}`,
      `Email: ${v.email}`,
      `Tél: ${v.phone || 'Non renseigné'}`,
      `Service(s): ${v.services.join(', ')}`,
      ``,
      `Projet: ${v.message}`
    ].join('\n');

    window.open(`https://wa.me/237656199216?text=${encodeURIComponent(msg)}`, '_blank');
  }
}
