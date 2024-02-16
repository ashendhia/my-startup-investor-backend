-- AlterTable
ALTER TABLE `startup` ADD COLUMN `email` VARCHAR(50) NULL,
    ADD COLUMN `hashedPassword` VARCHAR(255) NULL;

-- CreateTable
CREATE TABLE `investments` (
    `investorId` INTEGER NOT NULL,
    `startupId` INTEGER NOT NULL,
    `investmentDate` DATE NOT NULL,
    `amount` INTEGER NOT NULL,
    `status` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`investorId`, `startupId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `investments` ADD CONSTRAINT `investments_startupId_fkey` FOREIGN KEY (`startupId`) REFERENCES `startup`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `investments` ADD CONSTRAINT `investments_investorId_fkey` FOREIGN KEY (`investorId`) REFERENCES `investor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
