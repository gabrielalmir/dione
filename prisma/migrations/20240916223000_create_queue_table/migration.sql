-- CreateTable
CREATE TABLE "queues" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "endpoint" TEXT NOT NULL,
    "method" TEXT NOT NULL DEFAULT 'GET',
    "data" TEXT,
    "headers" TEXT
);
