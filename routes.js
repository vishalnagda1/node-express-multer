const router = require("express").Router();
const fileUpload = require("./src/file_upload/routes");

/** GET / or GET /health-check - Check server health */
router.get(["/", "/health-check"], (request, response) => {
  response.send("OK");
});

// mount file_upload routes at /files
router.use("/upload", fileUpload);

module.exports = router;
