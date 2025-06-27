/*
  Warnings:

  - Made the column `student_id` on table `Document` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Document` DROP FOREIGN KEY `Document_student_id_fkey`;

-- DropIndex
DROP INDEX `Document_student_id_fkey` ON `Document`;

-- AlterTable
ALTER TABLE `Document` MODIFY `student_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Document` ADD CONSTRAINT `Document_student_id_fkey` FOREIGN KEY (`student_id`) REFERENCES `Student`(`student_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
