import express from "express";
import {
  createStudent,
  createMentor,
  findMentor,
  addStudent,
  addMentor,
  findStudentbyId,
  findMentorbyId,
  updateMentor,
  updateStudent,
} from "./helper.js";

const router = express.Router();

//API for creating Students
router.route("/students").post(async (req, res) => {
  const data = req.body;
  const result = await createStudent(data);
  res.send(result);
});

//API for creating Mentors
router.route("/mentors").post(async (req, res) => {
  const data = req.body;
  const result = await createMentor(data);
  res.send(result);
});

//API for assigning Students to Mentor & Mentor for Students
router.route("/addstudent/:id/:mid").put(async (req, res) => {
  const { id, mid } = req.params;
  const findStud = await findStudentbyId(id);
  console.log(findStud);
  const sname = findStud.name;
  const mentor = await findMentor(mid);
  const mname = mentor.name;
  const studentAdd = await addStudent(mid, sname);
  const mentorAdd = await addMentor(id, mname);
  res.send(studentAdd);
});

//API to show the Students of a Mentor
router.route("/studentdata/:id").get(async (req, res) => {
  const { id } = req.params;
  const mentor = await findMentorbyId(id);
  const studentNames = mentor.students;
  res.send(studentNames);
});

//API to change Mentor
router.route("/changementor/:id/:mid").put(async (req, res) => {
  const { id, mid } = req.params;
  const mentor = await findMentorbyId(mid);
  const mname = mentor.name;
  console.log(mname);
  const updateMinS = await updateMentor(id, mname);
  const studData = await findStudentbyId(id);
  const sname = studData.name;
  console.log(sname);
  const updateSinM = await updateStudent(mid, sname);
  res.send({ message: "Successfully Updated" });
});

export const mentorRouter = router;
