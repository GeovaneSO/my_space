import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';

@Controller('/clients')
export class ClientController {
  @Post()
  public create(): any {
    return { data: 'Create' };
  }

  @Get(':id')
  public getOne(): any {
    return { data: 'get' };
  }

  @Get()
  public getAll(): any {
    return { data: 'gey' };
  }

  @Patch(':id')
  public update(): any {
    return { data: 'r' };
  }

  @Delete(':id')
  public delete(): any {
    return { data: 'del' };
  }
}
