const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const mongoose = require("mongoose");

const mealRouter = require("./routes/meal");
const login = require("./routes/login");
const signup = require("./routes/signup");
const mealPlan = require("./routes/mealplan");
const upload = require("./middlewares/upload");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(mealRouter(upload));
app.use(login);
app.use(signup);
app.use(mealPlan);

var server = app.listen(process.env.API_PORT, (error) => {
  if (error) {
    console.error("Error Occurred while connecting to server: ", error);
  } else {
    console.log("App is listining on port " + process.env.API_PORT);

    console.log("Trying to connect to database server...");

    mongoose
      .connect(process.env.DB_CONNECTION_STRING)
      .then(() => {
        console.log("Connected to Database Successfully!");
      })
      .catch((dbError) => {
        console.error("Error Occurred while connecting to database: ", dbError);
      });
  }
});
