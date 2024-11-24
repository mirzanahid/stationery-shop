"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
    },
    brand: {
        type: String,
        required: [true, 'Brand name is required'],
        trim: true,
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0, 'Price must be a positive number'],
    },
    category: {
        type: String,
        enum: {
            values: [
                'Writing',
                'Office Supplies',
                'Art Supplies',
                'Educational',
                'Technology',
            ],
            message: '{VALUE} is not a valid category',
        },
        required: [true, 'Category is required'],
        trim: true,
    },
    description: {
        type: String,
        required: [true, 'Descripiton is required'],
        trim: true,
    },
    quantity: {
        type: Number,
        required: [true, 'Quantity is required'],
        min: [0, 'Quantity must be a positive number'],
    },
    inStock: {
        type: Boolean,
        required: [true, 'inStook is required'],
    },
}, {
    timestamps: true,
});
const ProductModel = (0, mongoose_1.model)('Product', productSchema);
exports.default = ProductModel;