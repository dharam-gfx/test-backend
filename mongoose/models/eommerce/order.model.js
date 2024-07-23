import mongoose from "mongoose";

const orderItemScheme = new mongoose.Schema( {
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    },
    quantity: {
        type: Number,
        required: true
    }
})

const orderSchema = new mongoose.Schema( {
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    orderItems: {
        type: [orderItemScheme],
        required: true
    },
    address: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
        default: 'pending',
        required: true
    }
}, { timestamps: true } );


export const Order = mongoose.model( 'Order', orderSchema )