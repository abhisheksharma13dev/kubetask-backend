// // // import express from 'express';
// // // import bcrypt from 'bcryptjs';
// // // import jwt from 'jsonwebtoken';
// // // import User from '../models/User.js';

// // // const router = express.Router();


// // // // signup
// // // router.post ("/signup", async (req , res) => {
// // //     try {
// // //         const { username, password } = req.body;
        
// // //         let user = await User.findOne({ username });
// // //         if (user) return res.status(400).json({message: "User already exists"})

// // //             const salt = await bcrypt.genSalt(10);
// // //             const hashedPassword = await bcrypt.hash(password,salt)

// // //             user = new User({ username, password: hashedPassword});
// // //             await user.save();

// // //             res.json({message: "User created successfully"});
// // //          } catch (err) {
// // //             res.status(500).json({error: err.message})
// // //          }

// // // });


// // // //Login

// // // router.post ("/login", async (req, res) => {
// // //     try {
// // //         const { username, password } = req.body;

// // //         const user = await User.findOne({ username});
// // //         if (!user) return res.status(400).json({message: "Invalid credentials"})

// // //             const isMatch = await bcrypt.compare(password, user.password);
// // //             if (!isMatch) return res.status(400).json({message: "Invalid credentials"})

// // //                 const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h"});
// // //                 res.json({ token});
// // //     } catch (err) {
// // //         res.status(500).json({error: err.mesage});
// // //     }
// // // })

// // // export default router;







// import express from 'express';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import User from '../models/User.js';

// const router = express.Router();

// // Signup
// router.post("/signup", async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     let user = await User.findOne({ username });
//     if (user) return res.status(400).json({ message: "User already exists" });

//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     user = new User({ username, password: hashedPassword });
//     await user.save();

//     // Token generate at signup
//     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

//     res.json({ token });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // Login
// router.post("/login", async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     const user = await User.findOne({ username });
//     if (!user) return res.status(400).json({ message: "Invalid credentials" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

//     // Fix spelling mistake: expiresIn
//     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
//     res.json({ token });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// export default router;
