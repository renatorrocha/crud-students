/*
  Warnings:

  - You are about to drop the column `institutionId` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the `Institution` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `SchoolId` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_institutionId_fkey";

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "institutionId",
ADD COLUMN     "SchoolId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Institution";

-- CreateTable
CREATE TABLE "School" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'ACTIVATED',

    CONSTRAINT "School_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_SchoolId_fkey" FOREIGN KEY ("SchoolId") REFERENCES "School"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
