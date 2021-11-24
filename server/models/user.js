import { model, Schema } from "mongoose";

const UserSchema = new Schema({
  first_name: String,

  last_name: String,

  email: {
    type: String,
    unique: true,
    required: true
  },

  username: {
    type: String,
  },
  password: {
    type: String,
    required: true,
    min: [6, 'password should be atleast 6 character'],
  }
},

  { timestamps: true }
);

export default model('User', UserSchema);

