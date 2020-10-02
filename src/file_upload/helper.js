const multer = require("multer");
const path = require("path");
var fs = require('fs');

// store a uploaded file
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        try {
            // path where the uploaded file will be stored.
            const fileUploadPath = path.join(__basedir, "/temp/files/");

            // Create path if not exist
            if (!fs.existsSync(fileUploadPath)) {
                fs.mkdirSync(fileUploadPath, { recursive: true });
            }

            // callback to upload a file to given path.
            callback(null, fileUploadPath);
        } catch (error) {
            // send error if fails.
            callback(new Error("Something went wrong."), false);
        }
    },
    // This filename will be used for uploaded file.
    filename: (req, file, callback) => {
        // appending timestamp and replacing spaces with hyphens in original file name.
        callback(null, `${Date.now()}-${file.originalname.replace(/ /g, "-")}`);
    },
});

// To filter out the correct file
const fileFilter = (req, file, callback) => {
    if (
        file.mimetype.includes("excel") ||
        file.mimetype.includes("spreadsheetml")
    ) {
        callback(null, true);
    } else {
        callback(new Error("Please upload an excel file."), false);
    }
};

module.exports = multer({ storage, fileFilter });
