import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma';
import { QueueController } from './controllers/queue.controller';
import { QueueRepository } from './repositories/queue.repository';
import { QueueWorkerService } from './services/queue-worker.service';
import { QueueService } from './services/queue.service';
import { QueueWorker } from './workers/queue.worker';

@Module({
  imports: [HttpModule],
  controllers: [QueueController],
  providers: [PrismaService, QueueService, QueueRepository, QueueWorker, QueueWorkerService]
})
export class QueueModule { }
