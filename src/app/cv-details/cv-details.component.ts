import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CvService } from '../cv.service';
import { Cv } from '../cv/model/cv.model';

@Component({
  selector: 'app-cv-details',
  templateUrl: './cv-details.component.html',
  styleUrls: ['./cv-details.component.scss']
})
export class CvDetailsComponent implements OnInit {
  cv: Cv  = new Cv();
  constructor(private router : Router ,
    private cvService : CvService,
    private route: ActivatedRoute,
    ){

   }
   private sub: any;
  ngOnInit(): void {
    this.sub =this.route.params.subscribe(params => {
      this.cv = this.cvService.getCv(params['id']);
    });
  }

  deleteCv() {
    this.cvService.deleteCv(this.cv);
    this.router.navigateByUrl('/cv');
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
