const express = require("express");
const router = express.Router();
const taskController = require("../controller/Task");

//route for getting all the to do task
router.get("/", taskController.getAllTasks);

//route for posting the to do task in database
router.post("/", taskController.createTask);

//route for updating the to do task
router.put("/:id", taskController.updateTask);

//route for deleting the to do task
router.delete("/:id", taskController.deleteTask);

module.exports = router;
