import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultimage'
})
export class DefaultimagePipe implements PipeTransform {

  transform(value: string | undefined): string | undefined {
    if (value?.trim() == "") 
      return "assets/images/tim_logo.png"
    else
      return value
  }

}
