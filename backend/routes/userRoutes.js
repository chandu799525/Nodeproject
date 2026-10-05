const express = require("express");
const asyncHandler = require("../middleware/asyncHandler");

const {
    addUser,
    getUser,
    getUsers,
    updateUser,
    patchUser,
    deleteUser,
    getTodos,
    getTodo,
    updateTodo,
    patchTodo,
    deleteTodo,
    addTodo
} = require("../controllers/userController");

const router = express.Router();

router.post("/", asyncHandler(addUser));

router.get("/", asyncHandler(getUsers));

router.get("/:id", asyncHandler(getUser));

router.put("/:id", asyncHandler(updateUser));

router.patch("/:id", asyncHandler(patchUser));

router.delete("/:id", asyncHandler(deleteUser));

router.get("/:id/todos", asyncHandler(getTodos));

router.get("/:userId/todos/:todoId", asyncHandler(getTodo));

router.put("/:userId/todos/:todoId", asyncHandler(updateTodo));

router.patch("/:userId/todos/:todoId", asyncHandler(patchTodo));

router.delete("/:userId/todos/:todoId", asyncHandler(deleteTodo));

router.post("/:userId/todos", asyncHandler(addTodo));

module.exports = router;