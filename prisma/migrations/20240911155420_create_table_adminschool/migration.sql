-- CreateTable
CREATE TABLE "employeds" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "fullname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "owner" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "students" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "fullname" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "presence" BOOLEAN NOT NULL DEFAULT false,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "classId" TEXT NOT NULL,
    CONSTRAINT "students_classId_fkey" FOREIGN KEY ("classId") REFERENCES "classrooms" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "teachers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "fullname" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "classId" TEXT NOT NULL,
    CONSTRAINT "teachers_classId_fkey" FOREIGN KEY ("classId") REFERENCES "classrooms" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "monitors" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "fullname" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "classId" TEXT NOT NULL,
    CONSTRAINT "monitors_classId_fkey" FOREIGN KEY ("classId") REFERENCES "classrooms" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "classrooms" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nameClass" TEXT NOT NULL,
    "classId" TEXT NOT NULL,
    "id_student" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "employeds_email_key" ON "employeds"("email");

-- CreateIndex
CREATE UNIQUE INDEX "students_cpf_key" ON "students"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "teachers_classId_key" ON "teachers"("classId");

-- CreateIndex
CREATE UNIQUE INDEX "monitors_classId_key" ON "monitors"("classId");

-- CreateIndex
CREATE UNIQUE INDEX "classrooms_classId_key" ON "classrooms"("classId");
