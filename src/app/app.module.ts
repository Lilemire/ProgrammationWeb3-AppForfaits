import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnteteComponent } from './entete/entete.component';
import { FicheForfaitComponent } from './fiche-forfait/fiche-forfait.component';
import { ImageComponent } from './image/image.component';
import { LienDetailsComponent } from './lien-details/lien-details.component';
import { ListeForfaitsComponent } from './liste-forfaits/liste-forfaits.component';
import { NomDescriptionComponent } from './nom-description/nom-description.component';
import { PiedPageComponent } from './pied-page/pied-page.component';
import { PrixComponent } from './prix/prix.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    EnteteComponent,
    FicheForfaitComponent,
    ImageComponent,
    LienDetailsComponent,
    ListeForfaitsComponent,
    NomDescriptionComponent,
    PiedPageComponent,
    PrixComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
