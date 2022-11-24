import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CvService } from '../cv.service';
import { Cv } from '../cv/model/cv.model';

@Component({
  selector: 'app-carte-visite',
  templateUrl: './carte-visite.component.html',
  styleUrls: ['./carte-visite.component.scss']
})
export class CarteVisiteComponent implements OnInit {
  currentId = this.cvService.getCvs.length + 1 ;
  carte : Cv = {
    id : this.currentId,
    name : "",
    firstname :"",
    job :"",
    path: "",
    age: 0,
    cin:"",
  }
  constructor(private cvService : CvService, private router: Router) { }

  ngOnInit(): void {
  }

  submitCv(){
    console.log(this.carte);
    this.cvService.addCv(this.carte);
    this.router.navigateByUrl('/cv')
  }
}
