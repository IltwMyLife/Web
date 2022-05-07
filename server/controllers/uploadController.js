const Post = require("../models/Post");

class UploadController {
  async upload(req, res) {
    try {
      return res.status(200).json("file upload successfully!");
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = new UploadController();
