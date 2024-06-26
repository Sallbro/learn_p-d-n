import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return {
      title: 'json dummy data',
      routes: ['books', 'quotes', 'recipes'],
    };
  }
}
