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
  apiKey: 'AIzaSyB4zWcUMYtdA0KIN4kEwTWYvV3ZByNU9NI',
  authDomain: 'my-e-commerce-f5789.firebaseapp.com',
  projectId: 'my-e-commerce-f5789',
  storageBucket: 'my-e-commerce-f5789.appspot.com',
  messagingSenderId: '773143157089',
  appId: '1:773143157089:web:c0ec3a507f7debe03b0d20',
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
      domain: 'dev-147itc6fogjjtaz5.us.auth0.com',
      clientId: 'VoXYESZ9rRJKFzfHFYb01NlVzmPh0ZuB',
      authorizationParams: {
        redirect_uri: window.location.origin,
        audience: 'https://my-public-api',
      },
      useRefreshTokens: true,
      cacheLocation: 'localstorage',
    }),
  ],
};
