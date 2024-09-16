import { Injectable } from "@nestjs/common";
import { Interval } from "@nestjs/schedule";
import { QueueWorkerService } from "../services/queue-worker.service";

@Injectable()
export class QueueWorker {
    constructor(private readonly workerService: QueueWorkerService) { }

    @Interval(10_000)
    async processPendingQueues() {
        await this.workerService.processPendingQueues();
    }
}
