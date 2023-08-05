const db = require("../util/db");
async function getCategoriesForStore(storeId) {
    return await db().select().from("categories").where("store_id", storeId);
}
async function createCategoryForStore(data) {
    return await db().insert(data, ["id", "name", "description", "image", "store_id"]).into("categories");
}
async function getCategoriesNameForStore(storeId) {
    return await db().select(["id", "name"]).from("categories").where("store_id", storeId);
}
module.exports.getCategoriesForStore = getCategoriesForStore;
module.exports.createCategoryForStore = createCategoryForStore;
module.exports.getCategoriesNameForStore = getCategoriesNameForStore;
