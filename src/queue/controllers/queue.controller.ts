import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateQueueDto } from '../dtos/create-queue.dto';
import { QueueService } from '../services/queue.service';

@ApiTags('queue')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('queue')
export class QueueController {
    private readonly queueService: QueueService;

    constructor(queueService: QueueService) {
        this.queueService = queueService;
    }

    @Post()
    @ApiOperation({ summary: 'Creates a new queue' })
    @ApiResponse({ status: 201, description: 'Queue created successfully' })
    @ApiResponse({ status: 401, description: 'Unauthorized' })
    async createQueue(@Body() queueDto: CreateQueueDto) {
        return this.queueService.createQueue(queueDto);
    }

    @Get('/:id')
    @ApiOperation({ summary: 'Get details of queue' })
    @ApiParam({ name: 'id', type: Number, description: 'ID of the queue' })
    @ApiResponse({ status: 200, description: 'Details of the queue retorned successfully' })
    @ApiResponse({ status: 401, description: 'Unauthorized' })
    @ApiResponse({ status: 404, description: 'Queue not found' })
    async getQueue(@Param('id') id: number) {
        return this.queueService.getQueue(id);
    }
}
