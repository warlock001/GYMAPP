const mongoose = require("mongoose");

const MealSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    quantity: {
        type: String,
        required: true,
    },
    calories: {
        type: Number,
        required: true,
    },
    protein: {
        type: Number,
        required: true,
    },
    fat: {
        type: Number,
        required: true,
    },
    carbs: {
        type: Number,
        required: true,
    },
    sodium:{
        type: Number,
        required: true,
    },
    vitamin_c:{
        type:Number,
        required:true
    },
    pottasium:{
        type: Number,
        required: true,
    },
    magnesium:{
        type: Number,
        required: true,
    },
    cholestrol:{
        type: Number,
        required: true,
    },
    file: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "File",
        required: false,
    }
},
    { timestamps: true });

module.exports = mongoose.model("Meal", MealSchema);
