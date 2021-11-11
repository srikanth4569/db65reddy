
const mongoose = require("mongoose") 
const lineSchema = mongoose.Schema({ 
 line_type: String, 
 line_thickness: Number, 
 line_color: String 
}) 
 
module.exports = mongoose.model("Line", 
lineSchema)