const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const errorMiddleware = require("./middleware/errorMiddleware");

const app = express();

app.use(express.json());
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use(errorMiddleware);

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("mongodb connected");

        app.listen(process.env.PORT || 3000, () => {
            console.log("server running");
        });
    })
    .catch((error) => {
        console.log("mongodb connection failed:", error.message);
    });