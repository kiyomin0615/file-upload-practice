const paht = require("path");
const express = require("express");

const database = require("./data/database");
const userRoutes = require("./routes/users");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({extended: false}));
app.use(express.static("public"))

app.use(userRoutes);

database.connectToDatabase().then(function() {
  app.listen(3000);
});