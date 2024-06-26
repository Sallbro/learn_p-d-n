import { Injectable } from '@nestjs/common';
import * as recipes from '../../database/recipes.json';

@Injectable()
export class RecipesService {
  findAll(query: any) {
    const skip =
      query.skip && query.skip >= 0 && query.skip < query.length
        ? +query.skip
        : 0;
    const limit = query.limit ? +query.limit : 10;

    const actual_data = [];
    const count = limit + skip < recipes.length ? limit + skip : recipes.length;
    for (let i = skip - 1; i < count; i++) {
      actual_data.push(recipes[i]);
    }

    return {
      limit,
      skip,
      count: recipes.length,
      recipes: actual_data,
    };
  }

  findOne(id: number) {
    return recipes[id];
  }

}
