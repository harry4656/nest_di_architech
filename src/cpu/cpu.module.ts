import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';
import { PowerModule } from '../power/power.module';

@Module({
  imports: [PowerModule], //Importing and using power module in cpu module.
  providers: [CpuService],
  exports: [CpuService],
})
export class CpuModule {}
