const createError = require("http-errors");
const multer = require("multer");

function uploader(
    subfolder_path,
    allowed_file_types,
    max_file_size,
    error_message,
) {
    // File upload folder
    const UPLOADS_FOLDER = `${__dirname}/../public/uploads/${subfolder_path}`;


    // define the storage 
    const sotrage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, UPLOADS_FOLDER);
        },
        filename: (req, file, cb) => {
            const fileExt = path.extname(file.originalname);
            const fileName =
                file.originalname
                    .replace(fileExt, '')
                    .toLowerCase()
                    .split(" ")
                    .join("-") + "-" + Date.now();

            cb(null, fileName + fileExt);
        },
    });

    //prepare the final multer upload object
    const upload = multer({
        sotrage: sotrage,
        limits: {
            fileSize: max_file_size,
        },
        fileFilter: (req, file, cb) => {
            if (allowed_file_types.includes(file.mimetype)) {
                cb(null, true);
            } else {
                cb(createError(error_message));
            }
        },
    });

    return upload;

};

module.exports = uploader;