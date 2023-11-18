const { addMessage, getAllMessage } = require("../controllers/masagesController");

const router = require("express").Router();

router.post("/addmsg", addMessage);
router.post("/getmsg", getAllMessage);


module.exports = router;