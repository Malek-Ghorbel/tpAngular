import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cv } from '../cv/model/cv.model';

@Component({
  selector: 'app-lis',
  templateUrl: './lis.component.html',
  styleUrls: ['./lis.component.scss']
})
export class LisComponent implements OnInit {

  @Input()
  cvs = new Array<Cv>();
  constructor() { }
  cv = new Cv()

  @Output()
  cvEventEmitter = new EventEmitter<Cv>();
  ngOnInit(): void {
  }

  addCv(cv : Cv){
    this.cv = cv;
    this.cvEventEmitter.emit(cv);
  }
}
