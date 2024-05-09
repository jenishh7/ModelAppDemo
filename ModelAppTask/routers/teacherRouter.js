const express = require("express");
const router = express.Router();
const teacherController = require("../controller/teacherController");
router.get("/", (req, res) => {
  const data = teacherController.allTeacher();
  res.send(data);
});
router.get("/:name", (req, res) => {
  const data = teacherController.getTeacher(req.params.name);
  res.send(data);
});
module.exports = router;
