require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const multer = require('multer');
global.__basedir = __dirname;

require("./config/mongoose.config");

app.use(cookieParser());

const storageEngine = multer.diskStorage ({
    destination:'/uploads',
    filename: function (req, file, cb) {
        console.log(file);
        cb(null, file.fieldname);
    }
});

const upload = multer ({
    storage: storageEngine,
    fileFilter: (req, file, cb) => {
        if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
            cb(null, true);
        }
        else {
            cb(null, false);
            return cb(new Error('Please provide a valid image file'))
        }
    }
});

app.use(cors({credentials: true, origin: "http://localhost:3000"}));
app.use(express.json(), express.urlencoded({ extended: true }));

app.post('/api/upload', upload.any(), function (req, res, next) {
    res.json({ message: "File uploaded successfully"});
});

const moodRoutes = require("./routes/mood.routes");
const userRoutes = require("./routes/user.routes")

moodRoutes(app);
userRoutes(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));