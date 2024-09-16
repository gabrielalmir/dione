import { HttpService } from "@nestjs/axios";
import { Injectable, Logger } from "@nestjs/common";
import { AxiosRequestConfig } from "axios";
import { firstValueFrom } from "rxjs";
import { PrismaService } from "src/db/prisma";

@Injectable()
export class QueueWorkerService {
    private readonly logger = new Logger(QueueWorkerService.name);

    constructor(
        private readonly prisma: PrismaService,
        private readonly httpService: HttpService
    ) { }

    async processPendingQueues() {
        const pendingQueues = await this.prisma.queue.findMany({
            where: { status: 'pending' },
        });

        for (const queue of pendingQueues) {
            this.logger.log(`processing ${pendingQueues.length} queues ...`);

            const options: AxiosRequestConfig = {
                headers: JSON.parse(queue.headers),
                method: queue.method,
                url: queue.endpoint,
            };

            if (options.method?.toUpperCase() !== 'GET') {
                options.data = queue.data;
            }

            setImmediate(async () => {
                try {
                    const response = await firstValueFrom(this.httpService.request(options));

                    if (response.status === 500) {
                        throw new Error(`request to ${queue.method} ${queue.endpoint} failed`);
                    }

                    await this.updateStatusQueue(queue.id, 'completed');
                    this.logger.log(`queue #${queue.id} processed sucessfully`);
                } catch (error) {
                    await this.updateStatusQueue(queue.id, 'failed');
                    this.logger.log(`queue #${queue.id} failed: ${error}`);
                }
            });

            await this.updateStatusQueue(queue.id, 'queued');
        }
    }

    async updateStatusQueue(id: number, status: string) {
        await this.prisma.queue.update({ where: { id }, data: { status } });
    }
}
