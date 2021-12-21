import { client } from "./index.js";

export async function createStudent(data) {
  return await client.db("mentorapi").collection("students").insertOne(data);
}

export async function createMentor(data) {
  return await client.db("mentorapi").collection("mentors").insertOne(data);
}

export async function findStudentbyId(id) {
  return await client
    .db("mentorapi")
    .collection("students")
    .findOne({ studentId: id });
}

export async function findMentorbyId(id) {
  return await client
    .db("mentorapi")
    .collection("mentors")
    .findOne({ mentorId: id });
}

export async function findMentor(mid) {
  return await client
    .db("mentorapi")
    .collection("mentors")
    .findOne({ mentorId: mid });
}

export async function addStudent(mid, sname) {
  return await client
    .db("mentorapi")
    .collection("mentors")
    .updateOne({ mentorId: mid }, { $push: { students: sname } });
}

export async function addMentor(id, mname) {
  return await client
    .db("mentorapi")
    .collection("students")
    .updateOne({ studentId: id }, { $push: { mentor: mname } });
}

export async function updateMentor(id, mname) {
  return await client
    .db("mentorapi")
    .collection("students")
    .updateOne({ studentId: id }, { $set: { mentor: mname } });
}

export async function updateStudent(mid, sname) {
  return await client
    .db("mentorapi")
    .collection("mentors")
    .updateOne({ mentorId: mid }, { $push: { students: sname } });
}
