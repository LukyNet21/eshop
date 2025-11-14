import { int, sqliteTable, text, type AnySQLiteColumn } from "drizzle-orm/sqlite-core";

export const categories_table = sqliteTable("product_categories", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull().unique(),
  slug: text().notNull().unique(),
  description: text(),
  parrentId: int("parrent_id").references((): AnySQLiteColumn => categories_table.id)
});

export const products_table = sqliteTable("products", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  description: text(),
  categoryId: int("category_id").references((): AnySQLiteColumn => categories_table.id)
})

export const images_table = sqliteTable("product_images", {
  id: int().primaryKey({ autoIncrement: true }),
  url: text(),
  productId: int("product_id").references((): AnySQLiteColumn => categories_table.id)
})
