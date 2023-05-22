import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeBook'
})
export class PipeIdBookPipe implements PipeTransform {


    transform(value: string): string {
      let result = 'Ref - ' + value;
      return result;
    }
}
