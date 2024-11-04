import {
  ApplicationConfig,
  provideZoneChangeDetection,
  importProvidersFrom,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { initializeApp } from 'firebase/app';
import { provideAuth0 } from '@auth0/auth0-angular';

const firebaseConfig = {
  apiKey: ,
  authDomain: ,
  projectId: ,
  storageBucket: ,
  messagingSenderId: ,
  appId: ,
};

const app = initializeApp(firebaseConfig);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom([
      AngularFireModule.initializeApp(firebaseConfig),
      AngularFireAuthModule,
      AngularFireDatabaseModule,
      AngularFirestoreModule,
    ]),
    provideAuth0({
      domain: ,
      clientId: ,
      authorizationParams: {
        redirect_uri: 
        audience: ,
      },
      useRefreshTokens:,
      cacheLocation: ,
    }),
  ],
};
