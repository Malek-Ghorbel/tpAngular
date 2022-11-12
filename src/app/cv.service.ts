import { Injectable } from '@angular/core';
import { Cv } from './cv/model/cv.model';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  cvs = [
    new Cv(1, "firstOne", "aaaa", 3 , "AAAA" , "oooo" , "assets/images/rotating_card_profile3.png"),
    new Cv(2, "secondOne", "aaaa", 5 , "AAAA" , "oooo" , "assets/images/rotating_card_profile2.png"),
    new Cv(3, "thirdOne", "no image", 8 , "AAAA" , "oooo" , ""),
  ]

  getCvs(): Cv[] {
    return this.cvs;
  }

  deleteCv(cv : Cv) {
    let i = this.cvs.indexOf(cv);
    if ( i >= 0)
      this.cvs.splice(i,1);
  }

  addCv(cv: Cv){
    if ( ! this.cvs.find(element => element.id == cv.id))
      this.cvs.push(cv);
  }
  constructor() { }
}
