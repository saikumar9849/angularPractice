import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversepipe'
})
export class ReversepipePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    var data="";
    for(let i=0;i<value.length;i++){
      data=value[i]+data;
    }
    return data;
  }

}
