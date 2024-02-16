-- CreateTable
CREATE TABLE `startup` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `sector` VARCHAR(50) NOT NULL,
    `marketCap` INTEGER NOT NULL,
    `activeYears` INTEGER NOT NULL,
    `region` VARCHAR(20) NOT NULL,
    `numberOfInvestors` INTEGER NOT NULL,
    `longitude` DECIMAL(10, 8) NOT NULL,
    `latitude` DECIMAL(10, 8) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `investor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(50) NOT NULL,
    `lastName` VARCHAR(50) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `hashedPassword` VARCHAR(255) NOT NULL,
    `phoneNumber` VARCHAR(50) NOT NULL,
    `city` VARCHAR(50) NOT NULL,
    `zipCode` VARCHAR(50) NOT NULL,
    `adresse` VARCHAR(100) NOT NULL,
    `description` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
