import express from "express";
import { Post } from "../Controllers/Post.js";
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json("Its Pst Router And Its Woking");
});
router.post("/", Post);

export default router;
