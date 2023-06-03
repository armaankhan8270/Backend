import express from "express";
import { Register } from "../Controllers/User.js";
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json("Its User Router And Its Woking");
});
router.post("/register", Register);

export default router;
