import mongoose from "mongoose";
import { Schema } from "mongoose";
const LibrarySchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
});
export default mongoose.model("LibraryPost", LibrarySchema);
