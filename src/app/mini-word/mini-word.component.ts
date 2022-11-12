import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  styleUrls: ['./mini-word.component.scss']
})
export class MiniWordComponent implements OnInit {

  color: string ;
  size : string;
  font :string ;
  constructor() {
    this.color = "black";
    this.size = "16px";
    this.font = "Arial"
   }

  ngOnInit(): void {
  }

}
