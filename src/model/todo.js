const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

mongoose.model = {};
module.exports = mongoose.model("Todos", todoSchema);
