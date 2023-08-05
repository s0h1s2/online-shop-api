var express = require('express');
var router = express.Router();
const fs=require("fs");
fs.readdirSync(__dirname).forEach((file)=>{
  if(file=="index.js")return;
  const routeName=file.substring(0,file.indexOf("."));
  router.use(`/${routeName}`,require(`./${file}`))

})

module.exports = router;
