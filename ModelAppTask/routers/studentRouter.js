const express = require("express");
const router = express.Router();
const userController = require("../controller/studentController");
router.get("/", (req, res) => {
  const data = userController.allStudent();
  res.send(data);
});
router.get("/:name", (req, res) => {
  const data = userController.getStudent(req.params.name);
  res.send(data);
});
module.exports = router;
