import { ApplicationConfig } from '@angular/core';
import {
  PreloadAllModules,
  provideRouter,
  withComponentInputBinding,
  withDebugTracing,
  withPreloading,
} from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideHttpClient, withJsonpSupport } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withPreloading(PreloadAllModules),
      withDebugTracing()
    ),
    provideStore(),
    provideHttpClient(),
    provideHttpClient(withJsonpSupport()),
    provideRouter(routes, withComponentInputBinding()),
  ],
};
