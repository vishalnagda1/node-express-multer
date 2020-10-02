const path = require("path");

// Excel file upload API
async function uploadExcel(request, response) {
  try {
    if (request.file == undefined) {
      return response.status(400).json({ message: "Please upload an excel file." });
    }

    const filePath = path.join(__basedir, "/temp/files/", request.file.filename);

    return response.json({ message: "Excel uploaded successfully", tmpPath: filePath });

  } catch (error) {
    console.log(error.message);
    return response.status(500).json({
      message: `Failed to upload ${request.file.originalname}`
    });
  }
}

module.exports = { uploadExcel };
