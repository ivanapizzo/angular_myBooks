import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeUpper'
})
export class PipeUpperLetterPipe implements PipeTransform {

  transform(value: string): string {
    let result = value.toUpperCase()
    return result;
  }

}
