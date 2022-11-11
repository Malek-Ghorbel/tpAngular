import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Composant1Component } from './composant1/composant1.component';
import { CarteVisiteComponent } from './carte-visite/carte-visite.component';
import { CompFilsComponent } from './comp-fils/comp-fils.component';
import { CvComponent } from './cv/cv.component';
import { LisComponent } from './lis/lis.component';
import { ItemComponent } from './item/item.component';
import { DetailtComponent } from './detailt/detailt.component';

@NgModule({
  declarations: [
    AppComponent,
    Composant1Component,
    CarteVisiteComponent,
    CompFilsComponent,
    CvComponent,
    LisComponent,
    ItemComponent,
    DetailtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
