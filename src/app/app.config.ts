import { ApplicationConfig, provideBrowserGlobalErrorListeners, importProvidersFrom } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { LucideAngularModule, Zap, Settings, Sun, Droplet, Plug, ShowerHead, BrickWall, PaintBucket, Sparkles, Image as ImageIcon, Building2, Wrench, Trophy, Target, ShieldCheck, Award, Leaf, Plus, Minus, X, ChevronLeft, ChevronRight, ImageOff, Facebook, Linkedin, MessageCircle, Mail, Phone, MapPin, Instagram, Twitter, Music } from 'lucide-angular';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: 'enabled' })), 
    provideClientHydration(withEventReplay()),
    importProvidersFrom(LucideAngularModule.pick({ Zap, Settings, Sun, Droplet, Plug, ShowerHead, BrickWall, PaintBucket, Sparkles, Image: ImageIcon, Building2, Wrench, Trophy, Target, ShieldCheck, Award, Leaf, Plus, Minus, X, ChevronLeft, ChevronRight, ImageOff, Facebook, Linkedin, MessageCircle, Mail, Phone, MapPin, Instagram, Twitter, Music }))
  ]
};
