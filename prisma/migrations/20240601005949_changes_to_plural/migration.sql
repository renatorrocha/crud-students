/*
  Warnings:

  - You are about to drop the `School` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Student` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_SchoolId_fkey";

-- DropTable
DROP TABLE "School";

-- DropTable
DROP TABLE "Student";

-- CreateTable
CREATE TABLE "Students" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'ACTIVATED',
    "SchoolId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Students_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Schools" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'ACTIVATED',

    CONSTRAINT "Schools_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Students" ADD CONSTRAINT "Students_SchoolId_fkey" FOREIGN KEY ("SchoolId") REFERENCES "Schools"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
