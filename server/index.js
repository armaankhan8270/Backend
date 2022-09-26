import express, { json } from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.use(json());

app.listen(3001, (req, res) => {
  console.log("server is runnning on 3001");
});
