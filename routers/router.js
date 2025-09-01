import express from "express";
const router = express.Router();
import {
  createHome,
  createPost,
  createPut,
  createdelete,
} from "../controllers/routesController.js";
router.get("/get", createHome);
router.post("/post", createPost);
router.put("/put", createPut);
router.delete("/delete", createdelete);
export default router;