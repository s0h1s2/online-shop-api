const db=require("../util/db");
async function createProduct(data){
    return await db().insert(data,["id","name","image","description","price"]).into("products");
}
async function getProductsForCategory(categoryId){
    return await db().select().from("products").where("categories_id",categoryId);
}
module.exports.createProduct=createProduct;
module.exports.getProductsForCategory=getProductsForCategory;
