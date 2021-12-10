import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  
  user: {
    type: mongoose.Types.ObjectId,
    ref: "Users",
  },
  orderDetails: [
    {
      food: { type: mongoose.Types.ObjectId, ref: "Foods" },
      quantity: { types: Number, required: true },
      paymode: { type: String, required: true },
      status: { type: String, default: "Placed" },
      paymentDetails: {
        itemTotal: { type: Number, required: true },
        promo: { type: Number, reuired: true },
        tax: { type: Number, reuired: true },
      }
    }]
},
{
    timestamps: true
    //storing the day and time when the order is post
}
 
);

export const OrderModel = mongoose.model("Orders", OrderSchema);
