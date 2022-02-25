const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  year: {
    type: String,
    required: true
  },
  courseName: {
    type: String,
    required: true
  },
  branch: {
    type: String,
    required: true
  },
  Name: {
    type: String,
    required: true
  },
  communa_lCategory: {
    type: String,
    required: true
  },
  community_Admitted: {
    type: String,
    required: true
  },
  branch: {
    type: String,
    required: true
  },
  branch: {
    type: String,
    required: true
  },
  branch: {
    type: String,
    required: true
  },
  branch: {
    type: String,
    required: true
  },
  branch: {
    type: String,
    required: true
  },
  branch: {
    type: String,
    required: true
  },
  branch: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

// export model user with UserSchema
module.exports = mongoose.model("user", UserSchema);
