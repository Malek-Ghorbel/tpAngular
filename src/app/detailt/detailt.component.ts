import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../cv.service';
import { Cv } from '../cv/model/cv.model';
import { EmbaucheService } from '../embauche.service';


@Component({
  selector: 'app-detailt',
  templateUrl: './detailt.component.html',
  styleUrls: ['./detailt.component.scss']
})
export class DetailtComponent implements OnInit {

  
  cv : Cv = new Cv();
  @Input()
  embaucheContext : boolean = false;
  constructor(private embaucheService : EmbaucheService,
               private cvService : CvService,
               private toastr: ToastrService,
               private router:Router) { }

 

  embaucher() {
    this.embaucheService.addCv(this.cv);
    
    this.cv = new Cv() ;
  }

  ngOnInit(): void {
    this.cvService.selectCv$.subscribe(
      data =>{
        this.cv= data ;
      }
    )
  }

  remove() {
    this.embaucheService.deleteCv(this.cv);
    this.cvService.addCv(this.cv);
    this.toastr.success('Cv removed', 'Success');
    this.cv = new Cv() ;
  }

}
