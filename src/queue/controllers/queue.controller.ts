import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateQueueDto } from '../dtos/create-queue.dto';
import { QueueService } from '../services/queue.service';

@Controller('queue')
export class QueueController {
    private readonly queueService: QueueService;

    constructor(queueService: QueueService) {
        this.queueService = queueService;
    }

    @Post()
    async createQueue(@Body() queueDto: CreateQueueDto) {
        return this.queueService.createQueue(queueDto);
    }

    @Get('/:id')
    async getQueue(@Param('id') id: number) {
        return this.queueService.getQueue(id);
    }
}
