
exports.up = function(knex) {
  return knex.schema
  .createTable("category", function (table) {
    table.increments("id").notNullable().primary();
    table.varchar("name", 30).notNullable();
  })
  .createTable("users", function (table) {
    table.increments("id").notNullable().primary();
    table.varchar("name", 100).notNullable();
    table.varchar("email", 100).unique().notNullable();
    table.string("password").notNullable();
  })
  .createTable("restaurants", function (table) {
    table.increments("id").notNullable().primary();
    table.integer("user_id").notNullable().references('id').inTable('users');
    table.varchar("name", 50).notNullable();
    table.varchar("description", 100);
    table.integer("category_id").notNullable().references('id').inTable('category');
    table.integer("delivery_fee").notNullable().defaultTo(0);
    table.integer("delivery_min").notNullable().defaultTo(30);
    table.integer("min_order_value").notNullable().defaultTo(0);
  })
  .createTable("products", function (table) {
    table.increments("id").notNullable().primary();
    table.integer("user_id").notNullable().references('id').inTable('restaurants');
    table.varchar("name", 50).notNullable();
    table.varchar("description", 100);
    table.integer("price").notNullable();
    table.boolean("active").notNullable().defaultTo(true);
    table.boolean("allows_observation").notNullable().defaultTo(false);
  })
};


exports.down = function(knex) {
  return knex.schema.dropTable("category").dropTable("users").dropTable("restaurants");
};
