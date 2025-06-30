/*
  Warnings:

  - You are about to alter the column `relationship` on the `FamilyMember` table. The data in that column could be lost. The data in that column will be cast from `VarChar(50)` to `Enum(EnumId(4))`.

*/
-- AlterTable
ALTER TABLE `FamilyMember` MODIFY `relationship` ENUM('Father', 'Mother', 'Sibling') NOT NULL;
