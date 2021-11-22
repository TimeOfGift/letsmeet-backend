import { model, Schema } from "mongoose";

const InterestSchema = new Schema({
   name: {
    type: String,
    unique: true,
   },
   isSelected: Boolean
},

  { timestamps: true }
);

export default model('Interest', InterestSchema);

