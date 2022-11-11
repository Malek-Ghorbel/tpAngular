import { Component, OnInit } from '@angular/core';
import { Cv } from './model/cv.model';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  cvs = [
    new Cv(1, "firstOne", "aaaa", 3 , "AAAA" , "oooo" , "assets/images/rotating_card_profile3.png"),
    new Cv(2, "secondOne", "aaaa", 5 , "AAAA" , "oooo" , "assets/images/rotating_card_profile3.png"),
  ]

  cv = new Cv();
  constructor() { }

  getCv(cv : Cv){
    this.cv=cv;
  }
  ngOnInit(): void {
  }

}
