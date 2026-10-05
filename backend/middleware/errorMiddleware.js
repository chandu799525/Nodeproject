const errorMiddleware = (err, req, res, next) => {
    console.error(err);

    if (err.name === "ValidationError") {
        const errors = Object.values(err.errors).map((error) => error.message);
        
        return res.status(400).json({
            message: "validation error",
            errors
        })
    }

    if (err.name === "CastError") {
        return res.status(400).json({
            message: "invalid id"
        });
    }

    res.status(500).json({
        message: "internal server error"
    });
}

module.exports = errorMiddleware;