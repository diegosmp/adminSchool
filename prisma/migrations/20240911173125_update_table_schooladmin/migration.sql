/*
  Warnings:

  - You are about to drop the column `classId` on the `classrooms` table. All the data in the column will be lost.
  - You are about to drop the column `id_student` on the `classrooms` table. All the data in the column will be lost.
  - Added the required column `classTitle` to the `classrooms` table without a default value. This is not possible if the table is not empty.
  - Added the required column `courseName` to the `classrooms` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_classrooms" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nameClass" TEXT NOT NULL,
    "classTitle" TEXT NOT NULL,
    "courseName" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true
);
INSERT INTO "new_classrooms" ("id", "nameClass") SELECT "id", "nameClass" FROM "classrooms";
DROP TABLE "classrooms";
ALTER TABLE "new_classrooms" RENAME TO "classrooms";
CREATE UNIQUE INDEX "classrooms_classTitle_key" ON "classrooms"("classTitle");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
