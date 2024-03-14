import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  addtodo(@Body() todos:any) {
    return this.appService.addtodo(todos);
  }

  @Get()
  gettodos() {
    return this.appService.gettodos();
  }

  @Get('/:id')
  gettodo(@Param('id', ParseIntPipe) id:number) {
    return this.appService.gettodo(id);
  }

  @Put('/:id')
  update(@Param('id', ParseIntPipe) id:number , @Body() todos:any) {
    return this.appService.update(id,todos);
  }

  @Delete('/:id')
  remove(@Param('id', ParseIntPipe) id:number) {
    return this.appService.remove(id);
  }

}
