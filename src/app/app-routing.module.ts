import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';
import { CarteVisiteComponent } from './carte-visite/carte-visite.component';
import { CvDetailsComponent } from './cv-details/cv-details.component';
import { CvComponent } from './cv/cv.component';
import { EmbaucheComponent } from './embauche/embauche.component';
import { ImageSequenceComponent } from './image-sequence/image-sequence.component';
import { MiniWordComponent } from './mini-word/mini-word.component';

const routes: Routes = [
  {path : 'cv' , component: CvComponent } ,
  {path : 'embauche' , component: EmbaucheComponent},
  {path: 'miniword' ,component: MiniWordComponent},
  {path : 'authentification' , component: AuthentificationComponent},
  {path : 'add' , component:CarteVisiteComponent},
  {path:'image' , component:ImageSequenceComponent},
  {path:'cv/details/:id' , component:CvDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
