import { Component, Input, OnInit } from '@angular/core';
import { Cv } from '../cv/model/cv.model';

@Component({
  selector: 'app-detailt',
  templateUrl: './detailt.component.html',
  styleUrls: ['./detailt.component.scss']
})
export class DetailtComponent implements OnInit {

  @Input()
  cv : Cv = new Cv();
  constructor() { }

  ngOnInit(): void {
  }

}
