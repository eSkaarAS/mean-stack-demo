import mongoose, { Schema } from "mongoose";
import paginate from "mongoose-paginate-v2";

const rawSchema = {
  email: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  metadata: Schema.Types.Mixed,
  city: {
    coordinates: {
      type: [Number]
    }
  }
}

const UserSchema = new Schema(rawSchema);
UserSchema.plugin(paginate);

export const User = mongoose.model("User", UserSchema);