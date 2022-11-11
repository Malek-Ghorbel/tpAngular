import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-composant1',
  templateUrl: './composant1.component.html',
  styleUrls: ['./composant1.component.scss']
})
export class Composant1Component implements OnInit {

  color: string;
  constructor() { 
    this.color="white";
  }

  resetColor(){
    this.color="white"
  }

  changeToFavoriteColor(color : string) {
    this.color = color
  }
  ngOnInit(): void {
  }

}
