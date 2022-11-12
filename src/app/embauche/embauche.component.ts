import { Component, OnInit } from '@angular/core';
import { Cv } from '../cv/model/cv.model';
import { EmbaucheService } from '../embauche.service';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.scss']
})
export class EmbaucheComponent implements OnInit {
  cvs ;

  cv = new Cv();
  constructor(private embaucheService : EmbaucheService) {
    this.cvs = embaucheService.getCvs();
  }

  getCv(cv : Cv){
    this.cv=cv;
  }
  ngOnInit(): void {
  }

}
