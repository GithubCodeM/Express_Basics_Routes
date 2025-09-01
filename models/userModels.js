import mongoose from "mongoose";

// Database se connect
mongoose.connect("mongodb://127.0.0.1:27017/mongopractice");

// Schema define
// Moongose.schema ak method ha jo k accept krta ha ak object
// Schema hota ha k hrr user k pass kia kia details ho gi
const userSchema = new mongoose.Schema({
  name: String,
  userName: String,
  email: String,
});

// Model create
// Ab ak model create krna ha model ki basis pr he ap CRUD perform kr skty ho
const User = mongoose.model("User", userSchema);

// Export model
export default User;
