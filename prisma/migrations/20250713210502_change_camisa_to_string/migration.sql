/*
  Warnings:

  - You are about to drop the column `numero_camisa_jogador` on the `jogadores` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `jogadores` DROP COLUMN `numero_camisa_jogador`,
    ADD COLUMN `camisa_jogador` VARCHAR(191) NULL;
