const Sequelize = require("sequelize");
const sequelize = require("../util/database");

// this is the model to save the to do task in database
const Task = sequelize.define("Task", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  completed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Task;
