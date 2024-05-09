const studentmodel = require("../models/studentModel");
exports.allStudent = (req, res) => {
  const student = studentmodel.allStudent();
  return student;
};
exports.getStudent = (name) => {
  const user = studentmodel.allStudent();
  let objArray = user.filter((x) => x.name === name);
  console.log(objArray);
  console.log("hi");
  return objArray[0];
};
exports.getStudentbyAge = (age) => {
  const customers = studentmodel.allStudent();
  const filter = customers.filter((user) => user.age > parseInt(age));
  return filter;
};
