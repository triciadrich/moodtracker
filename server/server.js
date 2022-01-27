require("dotenv").config();

// process.env.secretKey

const express = require("express");
const app = express();
const cors = require("cors");
// const cookieParser = require("cookie-parser");

require("./config/mongoose.config");

// app.use(cookieParser());
app.use(cors({credentials: true, origin: "http://localhost:3000"}));
app.use(express.json(), express.urlencoded({ extended: true }));

const moodRoutes = require("./routes/mood.routes");
// const userRoutes = require("./routes/user.routes")

moodRoutes(app);
// userRoutes(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));