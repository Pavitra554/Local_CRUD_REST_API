const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
  task: {
    type: String,
    required: true,
    validate(value) {
      if (validator.isEmpty(value) || value.length < 1) {
        throw new Error("Something went wrong");
      }
    },
  },
  complete:{
    type:Boolean,
    required:true,
  }
});

const task = mongoose.model("tasks", userSchema);

module.exports = task;
