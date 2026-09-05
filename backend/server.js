const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());

app.use("/users", userRoutes);

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