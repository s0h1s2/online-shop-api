const db = require("../util/db");
async function createNewStore(data) {
    return await db().insert(data, ["id", "name", "logo", "description"]).into("stores");
}
async function getStores(offset, limit) {
    return await db().select().from("stores").offset(offset).limit(limit).orderBy("id", "desc");
}
async function getTotalStores() {
    return await db().count('id as count').from("stores").first();
}
async function getStoresName() {
    return await db().select(["id", "name"]).from("stores").orderBy("id", "desc");
}
module.exports.createNewStore = createNewStore;
module.exports.getStores = getStores;
module.exports.getTotalStores = getTotalStores;
module.exports.getStoresName = getStoresName;
