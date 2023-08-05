/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("users",function(table){
    table.increments("id");
    table.string("username");
    table.string("password");
  }).createTable("stores",function(table){
    table.increments("id");
    table.string("name");
    table.string("logo");
    table.string("description");
  })
  .createTable("categories",function(table){
    table.increments("id");
    table.string("name");
    table.string("image");
    table.string("description");
    table.integer("store_id").unsigned()
    table.foreign("store_id").references("stores.id")
    
  })
  .createTable("products",function(table){
    table.increments("id");
    table.string("name");
    table.string("image");
    table.string("description");
    table.integer("categories_id").unsigned()
    table.double("price").unsigned()
    table.foreign("categories_id").references("categories.id")
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
  .dropTable("products")
  .dropTable("users")
  .dropTable("categories")
  .dropTable("stores")
};
