const db = require("../util/db");

async function getUserByUsername(username){
    return await db().select().from("users").where("username",username).first();
}
module.exports.getUserByUsername=getUserByUsername;