const router = require("express").Router();
const upload = require("./helper");
const controller = require("./controller");

// Route for excel upload
router.post("/excel",
    // middleware function to handle file upload errors
    (request, response, next) => upload.single("file")(request, response, error => {
        if (error) {
            return response.status(400).json({ message: error.message })
        }
        next();
    }),
    controller.uploadExcel);

module.exports = router;
