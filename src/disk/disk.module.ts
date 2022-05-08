import { Module } from '@nestjs/common';
import { DiskService } from './disk.service';
import { PowerModule } from '../power/power.module';

@Module({
  imports: [PowerModule], //Importing and using power module in cpu module.
  providers: [DiskService],
  exports: [DiskService],
})
export class DiskModule {}
