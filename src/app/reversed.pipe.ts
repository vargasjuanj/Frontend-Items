import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversed'
})
export class ReversedPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {

    let newStr: string = ""
    for (let i = value.length -1; i >= 0; i--){
      newStr +=value.charAt(i)
    }
    return newStr;
  }

}
