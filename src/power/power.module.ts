import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({
  providers: [PowerService],
  exports: [PowerService], // It means that we now explicitly want to make this class available to other modules within our project.
})
export class PowerModule {}
