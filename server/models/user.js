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
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: [6, 'password should be atleast 6 character'],
  }
},

  { timestamps: true }
);
// to change mongodb _id to id
UserSchema.method("toJSON",  () => {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  console.log(object)
  return object;
});

export default model('User', UserSchema);

