import { Injectable } from '@nestjs/common';

@Injectable()
export class CitiesService {
  findAll(params?: Array<string>): any {
    if (params != undefined) {
      if (params.length > 0) {
        return `findAll working with ${params} parameters`;
      } else {
        return 'findAll working';
      }
    } else {
      return 'findAll working';
    }
  }

  findOneCity(cityId: string) {
    return `city ${cityId} found`;
  }

  createCity(newCity: any) {
    return newCity;
  }

	updateCity(cityPos: string, newCityData: any) {
    return `city in position ${cityPos} has been replaced with: ${newCityData}`;
	}

  deleteCity(cityPos: string) {
    return `city in position ${cityPos} has been deleted`;
  }

}
