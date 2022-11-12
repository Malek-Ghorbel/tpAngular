import { Component, OnInit } from '@angular/core';
import { CvService } from '../cv.service';
import { Cv } from './model/cv.model';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  cvs;

  cv = new Cv();
  constructor(private cvService : CvService) {
    this.cvs = cvService.getCvs();
  }

  getCv(cv : Cv){
    this.cv=cv;
  }
  ngOnInit(): void {
  }

}
