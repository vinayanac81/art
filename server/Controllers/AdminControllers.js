import bcrypt from "bcrypt";
import mongoose from "mongoose";
import adminModel from "../Model/AdminModel.js";
import artModel from "../Model/ArtModel.js";
import categoryModel from "../Model/CategoryModel.js";
const ObjectId = mongoose.Types.ObjectId;
export const AdminLogin = async (req, res) => {
  try {
    let { mail, password } = req.query;
    mail = mail.toLowerCase();
    const admin = await adminModel.findOne({ email:mail });
    console.log(admin);
    if (admin) {
      let correct = await bcrypt.compare(password, admin.password);
      if (correct) {
        res.json({ success: true, message: "Login Successfull." });
      } else {
        res.json({ success: false, message: "Password Incorrrect" });
      }
    } else {
      res.json({ success: false, message: "Email Incorrrect" });
    }
    // password = await bcrypt.hash(password, 12);
    // console.log(password);

    // await adminModel.create({
    //   email:mail,
    //   password
    // });
  } catch (error) {
    console.log(error);
  }
};
export const addArt = async (req, res) => {
  try {
    let { name, cost, size, category } = req.query;
    await artModel.create({
      name,
      cost,
      size,
      category,
      image: req.file.filename,
    });

    return res.json({ success: true, message: "Product added successfully" });
  } catch (error) {}
};
export const addCategory = async (req, res) => {
  try {
    let { category } = req.query;
    category = category.toLowerCase();
    const ifCategory = await categoryModel.findOne({ category: category });
    if (ifCategory) {
      return res.json({ success: false, message: "Category already added" });
    } else {
      await categoryModel.create({
        category,
      });
      console.log("DONE");
      return res.json({
        success: true,
        message: "Category added successfully",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
export const getCategories = async (req, res) => {
  try {
    console.log("HI");
    const categories = await categoryModel.find({});
    res.json({ success: true, categories });
  } catch (error) {
    console.log(error);
  }
};
export const getAllArtWorks = async (req, res) => {
  try {
    const allArtWorks = await artModel.find({});
    res.json({ success: true, allArtWorks });
  } catch (error) {
    console.log(error);
  }
};
export const deleteArtWork=async(req,res)=>{
  try {
    const {id}=req.query
    await artModel.deleteOne({
      _id: new ObjectId(id),
    });
    res.json({success:true,message:"ART DELETED SUCCESSFULLY"})
  } catch (error) {
    console.log(error);
    
  }
}

export const getArtWorks = async (req, res) => {
  try {
    const products = await artModel.find({}).skip(0).limit(4);
    res.json({ success: true, artWorks: products });
  } catch (error) {
    console.log(error);
  }
};

export const getEditedArt = async (req, res) => {
  try {
    const { id } = req.query;
    const art = await artModel.findOne({ _id: new ObjectId(id) });
    res.json({ success: true, art });
  } catch (error) {
    console.log(error);
  }
};
