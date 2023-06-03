import LibraryUser from "../Models/User.js";

export const Register = async (req, res) => {
  const newUser = new LibraryUser(req.body);
  try {
    const SaveUser = await newUser.save();
    res.json(SaveUser);
  } catch (error) {
    res.json("error" + error);
  }
};
