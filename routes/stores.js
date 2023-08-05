const express = require("express");
const { validateSchema } = require("../middlewares/validator");
const { createStoreSchema } = require("../validation/stores");
const upload = require("../util/uploader");
const { createNewStore, getStores, getTotalStores, getStoresName } = require("../services/stores");
const { authRequire } = require("../middlewares/authrequire");
const router = express.Router();
const DEFAULT_LIMIT = 20;
router.get("/", async function(req, res) {
    const totalStores = await getTotalStores();
    const totalPages = Math.floor(totalStores.count / DEFAULT_LIMIT);
    var pageNumber = parseInt(req.query.page) || 1;
    pageNumber = Math.min(totalPages, pageNumber);
    const offset = (pageNumber - 1) * DEFAULT_LIMIT;
    const result = await getStores(offset, DEFAULT_LIMIT);
    return res.status(200).send({ data: { stores: result, page: pageNumber, totalPages: totalPages } })
})

router.get("/names", async function(req, res) {
    const result = await getStoresName();
    return res.status(201).send({ data: result })
});

router.post("/", authRequire, upload.single("logo"), validateSchema(createStoreSchema), async function(req, res) {
    const { name, description } = req.body;
    const logoName = req.file?.filename || null;
    const result = await createNewStore({ name: name, description: description, logo: logoName });
    return res.status(201).send({ data: result })
})
module.exports = router;
