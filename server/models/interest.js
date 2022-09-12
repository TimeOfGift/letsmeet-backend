import { model, Schema } from "mongoose";

const InterestSchema = new Schema({
  user_id: String,
   name: {
    type: String,
    unique: true,
   },
   is_selected: Boolean
},

  { timestamps: true }
);

export default model('Interest', InterestSchema);

