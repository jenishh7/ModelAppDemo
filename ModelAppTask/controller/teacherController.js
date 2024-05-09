const teachermodel = require("../models/teacherModel");
exports.allTeacher = (req, res) => {
  const teacher = teachermodel.allTeacher();
  return teacher;
};
exports.getTeacher = (name) => {
  const teacher = teachermodel.allTeacher();
  let objArray = teacher.filter((x) => x.name === name);
  console.log(teacher);
  console.log(objArray[0]);
  return objArray[0];
};
