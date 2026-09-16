const express = require("express");

const {
    addUser,
    getUser,
    getUsers,
    updateUser,
    patchUser,
    deleteUser,
    getTodos,
    getTodo,
    updateTodo
} = require("../controllers/userController");

const router = express.Router();

router.post("/", addUser);

router.get("/", getUsers);

router.get("/:id", getUser);

router.put("/:id", updateUser);

router.patch("/:id", patchUser);

router.delete("/:id", deleteUser);

router.get("/:id/todos", getTodos);

router.get("/:userId/todos/:todoId", getTodo);

router.put("/:userId/todos/:todoId", updateTodo);

module.exports = router;