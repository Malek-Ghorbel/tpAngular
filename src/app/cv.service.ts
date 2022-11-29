import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Cv } from './cv/model/cv.model';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  cvs = [
    new Cv(0, "firstOne", "aaaa", 3 , "AAAA" , "oooo" , "assets/images/rotating_card_profile3.png"),
    new Cv(1, "secondOne", "aaaa", 5 , "AAAA" , "oooo" , "assets/images/rotating_card_profile2.png"),
    new Cv(2, "thirdOne", "no image", 8 , "AAAA" , "oooo" , ""),
    new Cv(3 , 'name' , 'firstname' , 15 , "1234" , 'job' , '')
  ]

  private CvSubject = new Subject<Cv>();
  selectCv$ = this.CvSubject.asObservable();
  passValue(data : Cv) {
    //passing the data as the next observable
    this.CvSubject.next(data);
  }
  
  getCvs(): Cv[] {
    return this.cvs;
  }

  getCv(id : number): Cv {
    let cv= this.cvs.find((e) => e.id == id);
    if (cv ) return cv;
    else return new Cv();
    
  }

  deleteCv(cv : Cv) {
    let i = this.cvs.indexOf(cv);
    if ( i >= 0)
      this.cvs.splice(i,1);
  }

  addCv(cv: Cv){
    if ( ! this.cvs.includes(cv)) {
      this.cvs.push(cv);
    }
  }
  constructor() { }
}
