import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(
  AppComponent,
  {
    providers:
    [
      provideExperimentalZonelessChangeDetection(),
      provideRouter(
        routes,
        withComponentInputBinding()
      )
    ]
  }
)
.catch( error => console.error(error) );
