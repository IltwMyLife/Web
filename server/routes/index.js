const router = require("express").Router();
const authRoute = require("./auth");
const userRoute = require("./users");
const postRoute = require("./posts");
const uploadRoute = require("./upload");
const conversationRoute = require("./conversations");
const messageRoute = require("./messages");

router.use("/auth", authRoute);
router.use("/users", userRoute);
router.use("/posts", postRoute);
router.use("/upload", uploadRoute);
router.use("/conversations", conversationRoute);
router.use("/messages", messageRoute);

module.exports = router;
