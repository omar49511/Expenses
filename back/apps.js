const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

require("dotenv").config();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(cors());

app.use(express.json());
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const usersRouter = require("./routes/users");
const exercisesRouter = require("./routes/exercises");

app.use("/users", usersRouter);
app.use("/exercises", exercisesRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
