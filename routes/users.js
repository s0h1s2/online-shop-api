var express = require('express');
const { authSchema } = require('../validation/users');
const { validateSchema } = require('../middlewares/validator');
const { getUserByUsername } = require('../services/users');
const { signUser } = require('../util/jwt');
var router = express.Router();

/* GET users listing. */
router.post('/auth', validateSchema(authSchema),async function (req, res) {
  const {username,password}=req.body;
  const user=await getUserByUsername(username);
  if(user==null || user.password!=password){
    return res.status(401).send({error:"Couldn't find user or password is wrong."})
  }
  const token=signUser({ username:user.username });
  return res.status(200).send({token:token});
});

module.exports = router;
