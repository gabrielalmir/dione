import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/db/prisma";
import { CreateQueueDto } from "../dtos/create-queue.dto";

@Injectable()
export class QueueRepository {
    constructor(private readonly prisma: PrismaService) { }

    async createQueue(queueDto: CreateQueueDto) {
        const { endpoint, method, data, headers } = queueDto;

        const bodify = JSON.stringify(data);
        const headify = JSON.stringify(headers);

        return await this.prisma.queue.create({
            data: { endpoint, method, data: bodify, headers: headify }
        });
    }

    async getQueue(id: number) {
        return await this.prisma.queue.findFirst({
            select: { id: true, status: true },
            where: { id }
        });
    }
}
