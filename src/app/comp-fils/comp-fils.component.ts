import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comp-fils',
  templateUrl: './comp-fils.component.html',
  styleUrls: ['./comp-fils.component.scss']
})
export class CompFilsComponent implements OnInit {

  @Input()
  color : string = "";

  myFavoriteColor = "pink";
  constructor() { }

  @Output()
  colorEvent = new EventEmitter<string>();

  changeColor(color : string){
    this.colorEvent.emit(color);
  }
  ngOnInit(): void {
  }

}
