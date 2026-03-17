import { ApplicationConfig, provideBrowserGlobalErrorListeners, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { LucideAngularModule, Zap, Settings, Sun, Droplet, Plug, ShowerHead, BrickWall, PaintBucket, Sparkles, Image as ImageIcon, Building2, Wrench, Trophy, Target } from 'lucide-angular';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), 
    provideClientHydration(withEventReplay()),
    importProvidersFrom(LucideAngularModule.pick({ Zap, Settings, Sun, Droplet, Plug, ShowerHead, BrickWall, PaintBucket, Sparkles, Image: ImageIcon, Building2, Wrench, Trophy, Target }))
  ]
};
