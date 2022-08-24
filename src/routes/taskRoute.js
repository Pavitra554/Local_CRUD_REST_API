const express = require("express");
const router = express.Router();
const task = require("../models/task");

//Getting all tasks
router.get("/api/v1/task", async (req, res) => {
  try {
    const tasks = await task.find({});
    res.status(200).send(tasks);
  } catch (e) {
    res.status(500).send();
  }
});

//Getting task by id
router.get("/api/v1/task/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const tasks = await task.findById(_id);
    if (!tasks) {
      return res.status(404).send();
    }
    res.status(200).send(tasks);
  } catch (e) {
    res.status(500).send();
  }
});

//Creating Task
router.post("/api/v1/task", async (req, res) => {
  try {
    const oneTask = new task(req.body);
    await oneTask.save();
    res.status(201).send({
      message:'Task Created.'
    });
  } catch (e) {
    res.status(500).send();
  }
});

//updating task
router.patch("/api/v1/task/:id", async (req, res) => {
  try {
    const keys = ["complete", "task"];
    const ObjectKeys = Object.keys(req.body);

    if (!ObjectKeys.every((e) => keys.includes(e))) {
      return res.status(500).send("invalid parameters");
    }
    const _id = req.params.id;
    const onetask = await task.findByIdAndUpdate(_id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!onetask) {
      return res.status(404).send("No task found :(");
    }
    res.send({
      message:'Task Updated.'
    });
  } catch (e) {
    res.status(500).send();
  }
});


//deleting task
router.delete("/api/v1/task/:id",async (req,res)=>{
  try{
    const _id = req.params.id;
    const onetask = await task.findByIdAndDelete(_id);
    if(!onetask){
      return res.status(404).send('no task found :(')
    }
    res.send({
      message:'Task Deleted'
    });
  }catch(e){
    res.status(500).send();
  }
})

module.exports = router;
