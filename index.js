const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

/* Middleware */
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

/* Connection to MongoDB */
const DB_HOST = "mongodb+srv://djkenneth:kenpineda1998@cluster0-databases.krw7u.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(DB_HOST, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

/* Routes */
const posts = require("./routes/Posts");
app.use("/api/post", posts);

/* Handle production */
if (process.env.NODE_ENV === "production") {
  // static folder
  app.use(express.static(__dirname + "/public/"));

  // Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started om port ${PORT}`));
