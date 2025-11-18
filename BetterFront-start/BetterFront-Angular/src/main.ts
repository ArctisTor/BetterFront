// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';  
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config'; // Import appConfig

bootstrapApplication(AppComponent, {
  providers: [
    appConfig.providers,  // Spread appConfig providers
    provideHttpClient()      // Keep HttpClient
  ],
}).catch((err) => console.error(err));
