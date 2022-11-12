import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cv } from './cv/model/cv.model';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  cvs = new Array<Cv>()  ;

  getCvs() {
    return this.cvs;
  }

  addCv(cv: Cv){
    if ( ! this.cvs.find(element => element.id == cv.id)){
      this.cvs.push(cv);
      this.toastr.success('Cv embauché', 'Success');
    }
    else 
      this.toastr.error('Cv deja embauché', 'fail');
  } 

  deleteCv(cv : Cv) {
    let i = this.cvs.indexOf(cv);
    if ( i >= 0)
      this.cvs.splice(i,1);
  }
  constructor(private toastr: ToastrService) { }
}
