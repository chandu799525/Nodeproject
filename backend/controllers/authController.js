const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const login = async (req, res) => {
    const { name, password } = req.body;

    const user = await User.findOne({ name });

    if (!user) {
        return res.status(401).json({
            message: "Invalid name or password"
        });
    }
    
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
        return res.status(401).json({
            message: "Invalid name or password"
        });
    }

    const token = jwt.sign(
        {
            userId: user._id
        },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXPIRES_IN || "1h"
        }
    );

    res.status(200).json({
        message: "Login successful",
        token
    });
};

const getMe = async (req, res) => {
    const user = await User.findById(req.user.userId).select("-password");

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    res.status(200).json({
        message: "User retrieved successfully",
        user
    });
};

module.exports = {
    login,
    getMe
};