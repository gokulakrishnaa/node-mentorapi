import express from "express";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";
import { mentorRouter } from "./mentor.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
app.use(express.json());

//MONGODB CONNECTION
const MONGO_URL = process.env.MONGO_URL;
async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("MongoDB Connected");
  return client;
}
export const client = await createConnection();

//GET REQUEST - APP
app.get("/", (req, res) => {
  res.send("Hello World !!");
});

app.use("/mentor", mentorRouter);

app.listen(PORT, () => console.log("App Started in Port", PORT));
