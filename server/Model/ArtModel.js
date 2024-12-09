import mongoose from "mongoose";

const artSchema = mongoose.Schema({
  name: {
    type: String,
  },
  cost: {
    type: String,
  },
  size: {
    type: String,
  },
  category: {
    type: String,
  },

  image: {
    type: String,
  },
  date: {
    type: Date,
  },
});

const artModel = mongoose.model("arts", artSchema);

export default artModel;
