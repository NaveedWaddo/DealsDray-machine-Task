const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobile: { type: String, required: true },
  designation: {
    type: String,
    enum: ["HR", "Manager", "Sales"],
    required: true,
  },
  gender: { type: String, enum: ["M", "F"], required: true },
  courses: [{ type: String, enum: ["MCA", "BCA", "BSc"] }],
  image: { type: String },
  status: { type: Boolean, default: true },
});

module.exports = mongoose.model("Employee", employeeSchema);
