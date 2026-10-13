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
    addTodo,
    getMyTodos,
    addMyTodo
} = require("../controllers/userController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", asyncHandler(addUser));

router.get("/", authMiddleware, asyncHandler(getUsers));

router.get("/me/todos", authMiddleware, getMyTodos);

router.post("/me/todos", authMiddleware, addMyTodo);

router.get("/:id", authMiddleware, asyncHandler(getUser));

router.put("/:id", authMiddleware, asyncHandler(updateUser));

router.patch("/:id", authMiddleware, asyncHandler(patchUser));

router.delete("/:id", authMiddleware, asyncHandler(deleteUser));

router.get("/:id/todos", authMiddleware, asyncHandler(getTodos));

router.get("/:userId/todos/:todoId", authMiddleware, asyncHandler(getTodo));

router.put("/:userId/todos/:todoId", authMiddleware, asyncHandler(updateTodo));

router.patch("/:userId/todos/:todoId", authMiddleware, asyncHandler(patchTodo));

router.delete("/:userId/todos/:todoId", authMiddleware, asyncHandler(deleteTodo));

router.post("/:userId/todos", authMiddleware, asyncHandler(addTodo));

module.exports = router;