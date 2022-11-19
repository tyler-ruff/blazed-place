import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LazyLoadDirective } from './lazyload.directive';
import { BrowseComponent } from './pages/browse/browse.component';
import { AboutComponent } from './pages/about/about.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/compat/storage';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { ViewComponent } from './pages/view/view.component';
import { SingleComponent } from './components/single/single.component';
import { MdBodyComponent } from './components/md-body/md-body.component';

import { RenderMdPipe } from './util/render-md/render-md.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LazyLoadDirective,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    BrowseComponent,
    AboutComponent,
    ViewComponent,
    SingleComponent,
    MdBodyComponent,
    RenderMdPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
    
  ],
  providers: [
    { provide: BUCKET, useValue: 'gs://blz-one-9e383.appspot.com' },
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
