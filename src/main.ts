import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(
  AppComponent,
  {
    providers:
    [
      provideExperimentalZonelessChangeDetection(),
      provideRouter(routes)
    ]
  }
)
.catch( error => console.error(error) );
