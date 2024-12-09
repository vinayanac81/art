import artModel from "../Model/ArtModel.js";
import categoryModel from "../Model/CategoryModel.js";
import mongoose from "mongoose";
const ObjectId = mongoose.Types.ObjectId;
export const getAllArtWoks = async (req, res) => {
  try {
    const data = await artModel.find({});
    res.json({ success: true, allArts: data });
  } catch (error) {
    console.log(error);
  }
};
export const getAllCategories = async (req, res) => {
  try {
    const categories = await categoryModel.find({});
    res.json({ success: true, categories });
  } catch (error) {
    console.log(error);
  }
};
export const getCategoryWiseData = async (req, res) => {
  try {
    let { category } = req.query;
    const data = await artModel.find({ category });
    res.json({ success: true, filteredData: data });
  } catch (error) {
    console.log(error);
  }
};
export const getArtData = async (req, res) => {
  try {
    let { id } = req.query;
    const data = await artModel.findOne({ _id: new ObjectId(id) });
    console.log(data);
    res.json({ success: true, artData: data });
  } catch (error) {
    console.log(error);
  }
};