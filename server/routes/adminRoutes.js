import express from "express";
import multer from "multer";
import {
  AdminLogin,
  addArt,
  addCategory,
  deleteArtWork,
  getAllArtWorks,
  getArtWorks,
  getCategories,
  getEditedArt,
} from "../Controllers/AdminControllers.js";
const router = express.Router();
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: fileStorage });
router.post("/login", AdminLogin);
router.post("/add-art", upload.single("image"), addArt);
router.post("/add-category", addCategory);
router.post("/deleteArtWork", deleteArtWork);
//get methods
router.get("/editArt",getEditedArt)
router.get("/getArtWorks", getArtWorks);
router.get("/categories", getCategories);
router.get("/allartworks", getAllArtWorks);

export default router;
