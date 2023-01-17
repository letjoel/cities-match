import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CitiesService } from './cities/cities.service';
import { CitiesController } from './cities/cities.controller';

@Module({
  imports: [],
  controllers: [AppController, CitiesController],
  providers: [AppService, CitiesService],
})
export class AppModule {}
