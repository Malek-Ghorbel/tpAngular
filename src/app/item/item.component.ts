import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CvService } from '../cv.service';
import { Cv } from '../cv/model/cv.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input()
  cv : Cv | null = null;
  constructor(private cvService : CvService) { }

  
  ngOnInit(): void {
  }
  chooseCv( ) {
    if(this.cv)
      this.cvService.passValue(this.cv);
  }
}
