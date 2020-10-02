const multer = require("multer");
const path = require("path");
var fs = require('fs');

// store a uploaded file
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        // path where the uploaded file will be stored.
        const fileUploadPath = path.join(__basedir, "/temp/files/");
        
        // Create path if not exist
        if (!fs.existsSync(fileUploadPath)) {
            fs.mkdirSync(fileUploadPath, { recursive: true });
        }

        // callback to upload a file to given path.
        callback(null, fileUploadPath);
    },
    // This filename will be used for uploaded file.
    filename: (req, file, callback) => {
        // appending timestamp and replacing spaces with hyphens in original file name.
        callback(null, `${Date.now()}-${file.originalname.replace(/ /g, "-")}`);
    },
});

module.exports = multer({ storage });
