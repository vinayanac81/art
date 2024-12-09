import express from "express";
import {
  getAllArtWoks,
  getAllCategories,
  getArtData,
  getCategoryWiseData,
} from "../Controllers/USerControllers.js";
const router = express.Router();
router.get("/getAllArtWorks", getAllArtWoks);
router.get("/getAllCategories", getAllCategories);
router.get("/getCategoryWiseData", getCategoryWiseData);
router.get("/getArtData", getArtData);
export default router;
