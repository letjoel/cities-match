import { Injectable } from '@nestjs/common';

@Injectable()
export class CitiesService {
  findAll(): any {
    return 'findAll working';
  }
}
