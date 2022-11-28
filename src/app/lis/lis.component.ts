import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CvService } from '../cv.service';
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

  ngOnInit(): void {
  }


}
