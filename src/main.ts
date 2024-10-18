import { provideZoneChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
// import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(
  AppComponent,
  {
    providers:
    [
      provideZoneChangeDetection({ eventCoalescing: true }),
      provideRouter(
        routes,
        withComponentInputBinding()
      ),
      // provideHttpClient()
    ]
  }
)
.catch( error => console.error(error));
