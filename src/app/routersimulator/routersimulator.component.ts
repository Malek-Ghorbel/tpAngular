import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routersimulator',
  templateUrl: './routersimulator.component.html',
  styleUrls: ['./routersimulator.component.scss']
})
export class RoutersimulatorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  changeRoute(route : string) {
    this.router.navigateByUrl('/'+route);
  }
  


}
