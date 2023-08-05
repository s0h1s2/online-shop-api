const express = require("express");
const upload = require("../util/uploader");
const { getCategoriesForStore, createCategoryForStore, getCategoriesNameForStore } = require("../services/categories");
const { validateSchema } = require("../middlewares/validator");
const { createCategorySchema } = require("../validation/categories");
const { authRequire } = require("../middlewares/authrequire");
const router = express.Router();

router.get("/:id(\\d+)/", async function(req, res) {
    const storeId = req.params.id;
    const result = await getCategoriesForStore(storeId);
    return res.status(200).send({ data: result })
})

router.get("/:id(\\d+)/names", async function(req, res) {
    const result = await getCategoriesNameForStore(req.params.id);
    return res.status(201).send({ data: result })
});

router.post("/:id(\\d+)/", authRequire, upload.single("image"), validateSchema(createCategorySchema), async function(req, res) {
    const storeId = req.params.id;
    const { name, description } = req.body;
    const imageName = req.file?.filename || null;
    const result = await createCategoryForStore({ name: name, description: description, image: imageName, store_id: storeId });
    return res.status(201).send({ data: result })
})

module.exports = router;
