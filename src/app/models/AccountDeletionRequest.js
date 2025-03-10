import mongoose from "mongoose";

const DeleteRequestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  description: { type: String, required: true },
  id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.DeleteRequest ||
  mongoose.model("DeleteRequest", DeleteRequestSchema);
