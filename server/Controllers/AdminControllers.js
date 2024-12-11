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
    const admin = await adminModel.findOne({ email: mail });
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
    let { name, price, size, category } = req.query.artData;
    await artModel.create({
      name,
      cost: price,
      size,
      category,
      image: req.file.filename,
    });

    return res.json({ success: true, message: "Art added successfully" });
  } catch (error) {}
};
export const addCategory = async (req, res) => {
  try {
    let { category } = req.query;
    console.log(category);

    category = category.toLowerCase();
    const ifCategory = await categoryModel.findOne({ category: category });
    if (ifCategory) {
      return res.json({ success: false, msg: "Category already added" });
    } else {
      await categoryModel.create({
        category,
      });
      console.log("DONE");
      return res.json({
        success: true,
        msg: "Category added successfully",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
export const getCategories = async (req, res) => {
  try {
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
export const deleteArtWork = async (req, res) => {
  try {
    const { id } = req.query;
    await artModel.deleteOne({
      _id: new ObjectId(id),
    });
    res.json({ success: true, message: "ART DELETED SUCCESSFULLY" });
  } catch (error) {
    console.log(error);
  }
};

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
export const editArt = async (req, res) => {
  try {
    const { id, name, price, category, size } = req.query.editedArt;
    console.log(id);

    if (!req.file) {
      await artModel.updateOne(
        { _id: new ObjectId(id) },
        {
          $set: {
            name,
            cost: price,
            size,
            category,
          },
        }
      );
      return res.json({ success: true, message: "Successfully edited" });
    } else {
      await artModel.updateOne(
        { _id: new ObjectId(id) },
        {
          $set: {
            name,
            cost: price,
            size,
            category,
            image: req.file.filename,
          },
        }
      );
      return res.json({ success: true, message: "Successfully edited" });
    }
  } catch (error) {
    console.log(error);
  }
};
export const getCategory = async (req, res) => {
  try {
    const { _id } = req.query;
    const category = await categoryModel.findOne({ _id: new ObjectId(_id) });
    res.json({ success: true, category });
  } catch (error) {
    console.log(error);
  }
};
export const updateCategory = async (req, res) => {
  try {
    const { id, category } = req.query;
    console.log(id, category);

    await categoryModel.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          category,
        },
      }
    );
    return res.json({ success: true, msg: "Successfully edited" });
  } catch (error) {
    console.log(error);
  }
};
export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.query;
    await categoryModel.deleteOne({ _id: new ObjectId(id) });
    res.json({ success: true, msg: "Deleted Successfully" });
  } catch (error) {
    console.log(error);
  }
};
