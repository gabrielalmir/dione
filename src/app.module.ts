import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { QueueModule } from './queue/queue.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    QueueModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
