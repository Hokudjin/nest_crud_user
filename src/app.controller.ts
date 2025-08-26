import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
// import * as dotenv from 'dotenv';
// dotenv.config({ path: process.cwd() + `/.env.${process.env.NODE_ENV}` });

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  // @Get()
  // getHello(): string {
  //   console.log(process.env.APP_PORT);
  //   return this.appService.getHello();
  // }
}
