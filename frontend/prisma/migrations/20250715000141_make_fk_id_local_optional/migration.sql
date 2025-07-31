-- DropForeignKey
ALTER TABLE `partidas` DROP FOREIGN KEY `Partidas_fk_id_local_fkey`;

-- DropIndex
DROP INDEX `Partidas_fk_id_local_fkey` ON `partidas`;

-- AlterTable
ALTER TABLE `partidas` MODIFY `fk_id_local` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Partidas` ADD CONSTRAINT `Partidas_fk_id_local_fkey` FOREIGN KEY (`fk_id_local`) REFERENCES `Locais`(`id_local`) ON DELETE SET NULL ON UPDATE CASCADE;
