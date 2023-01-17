import { Controller, Get, Param } from '@nestjs/common';
import { Body, Delete, Post, Put, Query } from '@nestjs/common/decorators';
import { CitiesService } from './cities.service';

@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Get()
  findAll(@Query('sort') sort?: string) {
    const params = [];
    if (sort != undefined) {
      params.push(`${sort}`);
    }
    return this.citiesService.findAll(params);
  }

  @Get(':cityId')
  findOneCity(@Param('cityId') cityId: string) {
    return this.citiesService.findOneCity(cityId);
  }

  @Post()
  createCity(@Body() body) {
    const newCity: any = body;
    return this.citiesService.createCity(newCity);
  }

  @Put(':cityPos')
  updateCity(@Body() body, @Param('cityPos') cityPos){
    const newCityData: any = body;
    return this.citiesService.updateCity(cityPos, newCityData);
  }

  @Delete(':cityPos')
  deleteCity(@Param('cityPos') cityPos){
    return this.citiesService.deleteCity(cityPos);
  }
}
