import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carte-visite',
  templateUrl: './carte-visite.component.html',
  styleUrls: ['./carte-visite.component.scss']
})
export class CarteVisiteComponent implements OnInit {

  carte = {
    name : "",
    firstName :"",
    job :"",
    image: "rotating_card_profile.png",
    citation: "",
    description:"",
    motcles: "",
  }
  constructor() { }

  ngOnInit(): void {
  }

  submitCard(){
    console.log(this.carte)
  }
}
