import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {

  constructor() {
    this.form = new FormGroup({
      pass: new FormControl(this.user.pass, [
        Validators.required,
        Validators.minLength(4),
      ]),
      mail: new FormControl(this.user.mail, [Validators.required , Validators.email])
    });
   }

  user = {mail :'' , pass:''} ;
  form : FormGroup ;
  ngOnInit(): void {
  }

  submitForm(){
    console.log(this.user);
  }

  

}
