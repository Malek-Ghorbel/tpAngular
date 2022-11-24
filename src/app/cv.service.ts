import { Injectable } from '@angular/core';
import { Cv } from './cv/model/cv.model';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  cvs = [
    new Cv(0, "firstOne", "aaaa", 3 , "AAAA" , "oooo" , "assets/images/rotating_card_profile3.png"),
    new Cv(1, "secondOne", "aaaa", 5 , "AAAA" , "oooo" , "assets/images/rotating_card_profile2.png"),
    new Cv(2, "thirdOne", "no image", 8 , "AAAA" , "oooo" , ""),
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
    console.log('hiiiii');
    if ( ! this.cvs.includes(cv)) {
      
      this.cvs.push(cv);
      console.log('here') ;
    }
  }
  constructor() { }
}
