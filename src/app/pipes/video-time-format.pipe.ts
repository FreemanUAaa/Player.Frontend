import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'videoTimeFormat'
})
export class VideoTimeFormatPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
