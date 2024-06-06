import {
  ApplicationConfig,
  provideZoneChangeDetection,
  importProvidersFrom,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { firebaseConfig } from './database/firebase';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    importProvidersFrom([
      AngularFireModule.initializeApp(firebaseConfig),
      AngularFireAuthModule,
      AngularFireDatabaseModule,
      AngularFirestoreModule,
    ]), provideFirebaseApp(() => initializeApp({"projectId":"checklistwf3","appId":"1:945728064927:web:b7511ac72fe11d745e81aa","storageBucket":"checklistwf3.appspot.com","apiKey":"AIzaSyDAyqanqrMWsn3ZD5S3K3Fw1ncvLm3AW4I","authDomain":"checklistwf3.firebaseapp.com","messagingSenderId":"945728064927","measurementId":"G-QY9BBZ34H5"})), provideFirestore(() => getFirestore()), provideAnimationsAsync(),
  ],
};
