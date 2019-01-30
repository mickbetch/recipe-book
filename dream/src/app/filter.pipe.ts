import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, name: string): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    const resultArr = [];
    for (let item of value) {
      if (item[name].toLowerCase().indexOf(filterString) != -1) {
        resultArr.push(item);
      }
    }
    return resultArr;
  }

}
