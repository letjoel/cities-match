import { Test, TestingModule } from '@nestjs/testing';
import { CitiesController } from './cities.controller';
import { CitiesService } from './cities.service';

describe('CitiesController', () => {
  let controller: CitiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CitiesController],
      providers: [CitiesService],
    }).compile();

    controller = module.get<CitiesController>(CitiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return findAll working', () => {
    expect(controller.findAll()).toBe('findAll working');
  });
  it('should return findOne working', () => {
    expect(controller.findOneCity('1')).toBe('city 1 found');
  });
});
