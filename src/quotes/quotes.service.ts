import { Injectable } from '@nestjs/common';
import * as quotes from '../../database/quotes.json';

@Injectable()
export class QuotesService {

  findAll(query: any) {
    const skip =
      query.skip && query.skip >= 0 && query.skip < query.length
        ? +query.skip
        : 0;
    const limit = query.limit ? +query.limit : 10;

    const actual_data = [];
    const count = limit + skip < quotes.length ? limit + skip : quotes.length;
    for (let i = skip - 1; i < count; i++) {
      actual_data.push(quotes[i]);
    }

    return {
      limit,
      skip,
      count: quotes.length,
      quotes: actual_data,
    };
  }

  findOne(id: number) {
    return quotes[id];
  }

  random() {
    const count = quotes.length;
    const randomvalue = Math.floor(Math.random() * (count - 1));
    return quotes[randomvalue];
  }
}
