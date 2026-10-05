const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Todo title is required"],
        trim: true,
        minlength: [3, "Todo title must be at least 3 characters"]
    },
    completed: {
        type: Boolean,
        default: false
    }
});

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        minlength: [3, "Name must be at least 3 characters"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [6, "Password must be at least 6 characters"]
    },
    todos: {
        type: [todoSchema],
        default: []
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;