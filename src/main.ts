import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations'; // Import the provideAnimations function

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

// Enable production mode manually
if (process.env['NODE_ENV'] === 'production') {
  enableProdMode();
}

// Bootstrap the app with the necessary providers, including provideAnimations for animations
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),     // Provide routing
    provideAnimations()        // Enable animations
  ],
}).catch((err) => console.error(err));
