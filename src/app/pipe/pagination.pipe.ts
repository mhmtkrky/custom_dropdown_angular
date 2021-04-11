import { Pipe, PipeTransform } from '@angular/core';

export type Collection<T> = T[] | ReadonlyArray<T>;

export interface PaginatePipeArgs {
  id?: string;
  rowCount?: number;
  pageCount?: number;
  selectedValue: any;
}

@Pipe({
  name: 'pagination'
})

export class PaginationPipe implements PipeTransform {

  public transform<T, U extends Collection<T>>(collection: U, args: PaginatePipeArgs): any {
    if (collection instanceof Array){
      if (args.rowCount && args.pageCount){
        let result = collection.slice((args.pageCount -1) * args.rowCount, args.pageCount * args.rowCount);
        return result;
      }
      return collection;
    }
  }
}