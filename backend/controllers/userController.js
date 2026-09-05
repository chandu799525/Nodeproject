const User = require("../models/User");

const addUser = async (req, res) => {
    try {
        const { name, password } = req.body;

        const user = await User.create({
            name,
            password,
            todos: []
        });

        res.status(201).json({
            message: "user added",
            user
        })
    } catch (error) {
        res.status(500).json({
            message: error.mesage
        });
    }   
};

const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({
                message: "user not found"
            })
        }

        res.status(200).json(user);
    
    } catch (error) {
        res.status(400).json({
            message: "invalid user ID"
        });
    }
};

const updateUser = async (req, res) => {
    try {
        const { name, password } = req.body;

        const user = await User.findByIdAndUpdate(
            req.params.id,
            {
                name,
                password
            },
            {
                new: true,
                runValidators: true
            }
        );

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json({
            message: "User updated",
            user
        })
    } catch (error) {
        res.status(404).json({
            message: "Invalid user ID"
        });
    }
};

const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json({
            message: "User deleted",
            user
        })
    } catch (error) {
        res.status(404).json({
            message: "Invalid user ID"
        });
    }
};

const getUsers = async (req, res) => {
    try {
        const users = await User.find();

        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const patchUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json({
            message: "User updated",
            user
        });
    } catch (error) {
        res.status(400).json({
            message: "Invalid user ID"
        });
    }
};

const getTodos = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json(user.todos);

    } catch (error) {
        res.status(400).json({
            message: "Invalid user ID"
        });
    }
};

const getTodo = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        const todo = user.todos.id(req.params.todoId);

        if (!todo) {
            return res.status(404).json({
                message: "Todo not found"
            });
        }

        res.status(200).json(todo); 
    }
    catch (error) {
        res.status(400).json({
            message: "Invalid user ID"
        });
    }
}

module.exports = {
    addUser,
    getUser,
    getUsers,
    updateUser,
    patchUser,
    deleteUser,
    getTodos
};