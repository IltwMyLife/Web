const router = require("express").Router();
const postController = require("../controllers/postController");

router.post("/", postController.create);
router.put("/:id", postController.update);
router.delete("/:id", postController.delete);
router.put("/:id/like", postController.like);
router.get("/:id", postController.get);
router.get("/timeline/:userId", postController.getAll);
router.get("/profile/:username", postController.getAllSelf);

module.exports = router;
