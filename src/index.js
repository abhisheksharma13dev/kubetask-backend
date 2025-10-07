// import express from 'express';
// import dotenv from 'dotenv';
// import connectDB from './config/db.js';

// import taskRoutes from "./routes/taskRoutes.js";

// import cors from "cors";


// dotenv.config();
// connectDB();

// const app = express();
// app.use(cors());
// app.use(express.json());


// // Routes
// // app.use("/auth", authRoutes);
// // app.use("/tasks", taskRoutes);
// app.get("/", async (req, res) => {
//   // try {
//   //   const tasks = await Task.find();
//   //   res.json(tasks);
//   // } catch (err) {
//   //   res.status(500).json({ error: err.message });

//   res.send( "ok")
//   // }
// });


// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`server running on port ${PORT}`));






const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/health", (req, res) => {
  res.send("ok");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
