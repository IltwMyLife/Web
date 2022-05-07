const router = require("express").Router();
const conversationController = require("../controllers/conversationController");

router.post("/", conversationController.create);
router.get("/:userId", conversationController.get);
router.get("/find/:firstUserId/:secondUserId", conversationController.getTwo);

module.exports = router;
