import User from "../models/userModels.js";
// Create
export const createHome = async (req, res) => {
  let createdUser = await User.create({
    name: "Umer",
    userName: "Umer Javaid",
    email: "umer215@gmail.com",
  });
  res.send(createdUser);
};
// Read
export const createPost = async (req, res) => {
  let CreatedPost = await User.find({ userName: "Umer Javaid" });
  res.send(CreatedPost);
};
// Update
export const createPut = async (req, res) => {
  // id ke through update (yahan apna actual _id lagana)
  let createdUpdate = await User.findByIdAndUpdate(
    "68b3239bd20ee848add722f7", // <- yahan apna _id pass karo
    { name: "Aqsa Javaid", userName: "Aqsaaa Khannnnnnn" },
    { new: true }
  );
  res.send(createdUpdate);
};

// Delete
export const createdelete = async (req, res) => {
  let createdDelete = await User.findOneAndDelete({
    name: "Amna",
  });
  res.send(createdDelete);
};
