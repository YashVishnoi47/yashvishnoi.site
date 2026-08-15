import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    
    message: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.User || mongoose.model("Message", MessageSchema);
