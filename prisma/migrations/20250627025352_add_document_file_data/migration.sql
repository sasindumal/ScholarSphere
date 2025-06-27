/*
  Warnings:

  - You are about to drop the column `file_path` on the `Document` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Document` DROP COLUMN `file_path`,
    ADD COLUMN `file_data` MEDIUMBLOB NULL;
