import express from "express";
import multer from "multer";
import {
  AdminLogin,
  addArt,
  addCategory,
  deleteArtWork,
  deleteCategory,
  editArt,
  getAllArtWorks,
  getArtWorks,
  getCategories,
  getCategory,
  getEditedArt,
  updateCategory,
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
router.post("/edit-art", upload.single("edited-image"), editArt);
router.post("/update-category", updateCategory);
router.post("/delete-category",deleteCategory)

//get methods
router.get("/editArt", getEditedArt);
router.get("/category", getCategory);
router.get("/getArtWorks", getArtWorks);
router.get("/categories", getCategories);
router.get("/allartworks", getAllArtWorks);

export default router;
