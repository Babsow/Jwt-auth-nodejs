const mongoose = require("mongoose");


const roleSchema = mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required : true
  }
})

export default mongoose.model("RoleModel", roleSchema);