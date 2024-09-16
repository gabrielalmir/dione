import { Injectable } from '@nestjs/common';
import { CreateQueueDto } from '../dtos/create-queue.dto';
import { QueueRepository } from '../repositories/queue.repository';

@Injectable()
export class QueueService {
    constructor(private readonly queueRepository: QueueRepository) { }

    async createQueue(queueDto: CreateQueueDto) {
        return await this.queueRepository.createQueue(queueDto);
    }

    async getQueue(id: number) {
        return await this.queueRepository.getQueue(id);
    }
}
