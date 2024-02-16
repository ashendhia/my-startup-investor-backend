/*
  Warnings:

  - The primary key for the `investments` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropIndex
DROP INDEX `investments_startupId_fkey` ON `investments`;

-- AlterTable
ALTER TABLE `investments` DROP PRIMARY KEY,
    ADD PRIMARY KEY (`investorId`, `startupId`, `investmentDate`);

-- AddForeignKey
ALTER TABLE `investments` ADD CONSTRAINT `investments_startupId_fkey` FOREIGN KEY (`startupId`) REFERENCES `startup`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `investments` ADD CONSTRAINT `investments_investorId_fkey` FOREIGN KEY (`investorId`) REFERENCES `investor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
