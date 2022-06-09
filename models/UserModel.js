const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: {
      type: String,
      required: true
    },
    email:{
      type: String,
      required: true
    },
    password: {
      type : String,
      required: true
    },
    role:[]
})

export default mongoose.model("UserModel" ,UserSchema);