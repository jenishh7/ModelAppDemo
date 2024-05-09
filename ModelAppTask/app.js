const express = require("express");
const app = express();
const studentRouter = require("./routers/studentRouter");
const teacherRouter = require("./routers/teacherRouter");
app.use("/student", studentRouter);
app.use("/teacher", teacherRouter);
app.get("/", (req, res) => {
  res.send("use /student for students data <br> and /teacher for teacher data");
});
app.listen(3000, () => console.log("Server running..."));
