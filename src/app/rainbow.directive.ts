import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {
  colors = ["red" , "green" , "blue" , "yellow" , "purple" , "black" , "orange"]

  getRandomInt(max : number) {
    return Math.floor(Math.random() * max);
  }

  @HostBinding('style.color') 
  color:string="red" ;
  
  @HostListener('keyup') 
  onKeyup(){
    this.color =this.colors[this.getRandomInt(this.colors.length)];
  }
  constructor() { }

}
