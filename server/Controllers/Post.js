import post from "../Models/post.js";

export const Post = async (req, res, next) => {
  const newUser = new post(req.body);
  try {
    const SaveUser = await newUser.save();
    res.json(SaveUser);
  } catch (error) {
    next("error" + error);
  }
};
