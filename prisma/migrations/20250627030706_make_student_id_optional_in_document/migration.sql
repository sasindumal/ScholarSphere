-- AlterTable
ALTER TABLE `Document` ADD COLUMN `student_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Document` ADD CONSTRAINT `Document_student_id_fkey` FOREIGN KEY (`student_id`) REFERENCES `Student`(`student_id`) ON DELETE SET NULL ON UPDATE CASCADE;
