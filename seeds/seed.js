const { randBrand, randText, randAccessory, randProduct } = require("@ngneat/falso");
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
function randBetween(max) {
  return Math.floor(Math.random() * max)
}
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('products').del()
  await knex('categories').del()
  await knex('stores').del()
  await knex('users').insert([
    { id: 1, username: 'admin', password: "admin" },
  ]);
  for (var i = 1; i < 200; i++) {
    await knex('stores').insert([
      { id: i, name: randBrand(), description: randText(), logo: "some_image.jpeg" }
    ]);
  }
  for (var i = 1; i < 400; i++) {
    await knex('categories').insert([
      { id: i, name: randAccessory(), description: randText(), image: "some_image.jpeg", store_id: randBetween(200) }
    ]);
  }
  for (var i = 0; i < 600; i++) {
    await knex('products').insert([
      { name: randProduct().title, price: randBetween(10000), description: randText(), image: "some_image.jpeg", categories_id: randBetween(400) }
    ]);
  }
};
