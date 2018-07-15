import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bnksuffixpipe'
})
export class BnksuffixpipePipe implements PipeTransform {

  transform(value: string, args?: any): string {
    // return null;
    return  value.toUpperCase() + '  /BNK48';
  }

}
