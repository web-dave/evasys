import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from './book.interface';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: IBook[] | null = [], searchStr: string = ''): IBook[] {
    return (
      value?.filter((val) =>
        val.title.toLowerCase().includes(searchStr.toLowerCase())
      ) || []
    );
  }
}
