import { Test, TestingModule } from '@nestjs/testing';
import { CitiesService } from './cities.service';

describe('CitiesService', () => {
  let service: CitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CitiesService],
    }).compile();

    service = module.get<CitiesService>(CitiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('find all should return all cities', () => {
    expect(service.findAll()).toBe('findAll working');
  });
  it('find one city with query param sort=1 should return...', () => {
    expect(service.findAll(['1'])).toBe('findAll working with 1 parameters');
  });
  it('find one city should return one city', () => {
    expect(service.findOneCity('1')).toBe('city 1 found');
  });
});
