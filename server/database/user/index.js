import  mongoose  from "mongoose";

const UserSchema =new mongoose.Schema({
  fullname: {type: String, required: true},
  //it means that the data type of the fullname is String and it is required 
  //its like mandatory filled if true
  //if we give it false it will be optional
  email:{type: String, required: true},
  password: {type: String, required: true},
  address: [{detail: {type:String}, for: {type: String}}],
  phoneNumber: [{type:Number}]
// address and phoneNumberare array that's why we use []

})

export const UserModel = mongoose.model("Users", UserSchema);
