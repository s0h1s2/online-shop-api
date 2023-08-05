const express=require("express");
const { createProductSchema } = require("../validation/products");
const upload=require("../util/uploader");
const { getProductsForCategory, createProduct } = require("../services/products");
const { validateSchema } = require("../middlewares/validator");
const { authRequire } = require("../middlewares/authrequire");
const router=express.Router();
router.get("/:id(\\d+)/",async function(req,res){
    const categoryId=req.params.id;
    const result=await getProductsForCategory(categoryId);
    return res.status(200).send({ data:result })
})
router.post("/:id(\\d+)/",authRequire,upload.single("image"),validateSchema(createProductSchema),async function(req,res){
    const categoryId=req.params.id;
    const {name,description}=req.body;
    const imageName=req.file?.filename||null;
    const result=await createProduct({ name:name,description:description,image: imageName,categories_id:categoryId});
    return res.status(201).send({ data:result })
})
module.exports=router;