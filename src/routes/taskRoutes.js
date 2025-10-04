import Task from "../models/Task.js";
import express from "express";

const router = express.Router();

//get all task

router.get("/", async (req, res) => {
  // try {
  //   const tasks = await Task.find();
  //   res.json(tasks);
  // } catch (err) {
  //   res.status(500).json({ error: err.message });

  return "ok"
  // }
});

//create task

router.post("/", async (req, res) => {
  try {
    const { title, description } = req.body;
    const task = new Task({ title, description });
    await task.save();
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// update task

router.put("/:id", async (req, res) => {
  try {
    const { status } = req.body;
    const task = await Task.findOneAndUpdate(
      {_id: req.params.id},
      { status },
      { new: true }
    );
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// delete task

router.delete("/:id", async (req, res) => {
  try {
    await Task.findOneAndDelete({_id: req.params.id});
    res.json({ message: "Task deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
