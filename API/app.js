const express = require("express");
const cors = require("cors");
const app = express();
const sequelize = require("./util/database");

app.use(cors());
app.use(express.json());

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const taskRoutes = require("./routes/Task");

app.use("/task", taskRoutes);

sequelize
  .sync()
  .then((result) => {
    app.listen(3001, () => {
      console.log("Server is running on port 3001");
    });
  })
  .catch((err) => {
    console.error("Sequelize Sync Error:", err);
  });
