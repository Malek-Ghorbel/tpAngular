import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-image-sequence',
  templateUrl: './image-sequence.component.html',
  styleUrls: ['./image-sequence.component.scss']
})
export class ImageSequenceComponent implements OnInit {
  src = "/assets/images/a.png"
  constructor() { }
  sources = ["/assets/images/a.png" , "/assets/images/rotating_card_profile2.png" , "/assets/images/rotating_card_profile3.png" , "/assets/images/tim_logo.png"]
   observable = new Observable(
    (observer) => {
      let i = 
      4;
      setInterval(() => {
      if (!i) {
        i = 4;
      }
      this.src = this.sources[i-1] ;
      observer.next(i--);
      }, 1000);
    });
    
    
  ngOnInit(): void {
    this.observable.subscribe({
      next(x) {},
    }
    );
  }

}
