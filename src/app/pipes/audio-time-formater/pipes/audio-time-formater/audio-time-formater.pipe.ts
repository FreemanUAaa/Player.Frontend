import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'audioTimeFormater'
})
export class AudioTimeFormaterPipe implements PipeTransform {

  transform(value: number): string {
    const minutes = (value / 60).toFixed(0);
    const seconds = (value % 60).toFixed(0);
    return `${this.toFormat(+minutes)}:${this.toFormat(+seconds)}`
  }

  toFormat(value: number): string {
    if (value >= 10) {
      return value.toString();
    }

    return "0" + value.toString();
  }
}
