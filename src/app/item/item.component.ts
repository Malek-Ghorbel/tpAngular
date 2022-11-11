import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Cv } from '../cv/model/cv.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input()
  cv : Cv | null = null;
  constructor() { }

  @Output()
  cvEmitter = new EventEmitter<Cv >();
  ngOnInit(): void {
  }
  chooseCv( ) {
    if(this.cv)
      this.cvEmitter.emit(this.cv);
  }
}
