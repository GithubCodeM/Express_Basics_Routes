import express from "express";
import data from "./routers/router.js";
const app = express();
app.use("/getData", data);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});

