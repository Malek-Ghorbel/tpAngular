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
import { MiniWordComponent } from './mini-word/mini-word.component';
import { RainbowDirective } from './rainbow.directive';
import { DefaultimagePipe } from './defaultimage.pipe';
import { EmbaucheComponent } from './embauche/embauche.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    Composant1Component,
    CarteVisiteComponent,
    CompFilsComponent,
    CvComponent,
    LisComponent,
    ItemComponent,
    DetailtComponent,
    MiniWordComponent,
    RainbowDirective,
    DefaultimagePipe,
    EmbaucheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
