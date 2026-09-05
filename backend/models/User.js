const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    todos: {
        type: [todoSchema],
        default: []
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;