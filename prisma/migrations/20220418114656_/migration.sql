/*
  Warnings:

  - You are about to alter the column `price` on the `Item` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `price` on the `Sale` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - Made the column `image` on table `Item` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Item" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL
);
INSERT INTO "new_Item" ("category", "description", "id", "image", "price", "title") SELECT "category", "description", "id", "image", "price", "title" FROM "Item";
DROP TABLE "Item";
ALTER TABLE "new_Item" RENAME TO "Item";
CREATE TABLE "new_Sale" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "contact_email" TEXT NOT NULL,
    "contact_name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "item_list" TEXT NOT NULL
);
INSERT INTO "new_Sale" ("contact_email", "contact_name", "id", "item_list", "price") SELECT "contact_email", "contact_name", "id", "item_list", "price" FROM "Sale";
DROP TABLE "Sale";
ALTER TABLE "new_Sale" RENAME TO "Sale";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
