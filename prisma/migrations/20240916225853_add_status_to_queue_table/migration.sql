-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_queues" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "endpoint" TEXT NOT NULL,
    "method" TEXT NOT NULL DEFAULT 'GET',
    "data" TEXT,
    "headers" TEXT,
    "status" TEXT NOT NULL DEFAULT 'pending'
);
INSERT INTO "new_queues" ("data", "endpoint", "headers", "id", "method") SELECT "data", "endpoint", "headers", "id", "method" FROM "queues";
DROP TABLE "queues";
ALTER TABLE "new_queues" RENAME TO "queues";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
