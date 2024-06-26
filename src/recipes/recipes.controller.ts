import { Controller, Get, Post, Body, Patch, Param, Delete,Query } from '@nestjs/common';
import { RecipesService } from './recipes.service';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}


  @Get()
  findAll(@Query() querydata:any) {
    return this.recipesService.findAll(querydata);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recipesService.findOne(+id);
  }

}
