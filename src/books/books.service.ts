import { Injectable } from '@nestjs/common';
import * as books from '../../database/books.json';

@Injectable()
export class BooksService {
  findAll(query: any) {
    const skip =
      query.skip && query.skip >= 0 && query.skip < query.length
        ? +query.skip
        : 0;
    const limit = query.limit ? +query.limit : 10;

    const actual_data = [];
    const count = limit + skip < books.length ? limit + skip : books.length;
    for (let i = skip - 1; i < count; i++) {
      actual_data.push(books[i]);
    }

    return {
      limit,
      skip,
      count: books.length,
      books: actual_data,
    };
  }

  findOne(id: number) {
    return books[id];
  }


}
