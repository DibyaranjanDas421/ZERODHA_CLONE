// // // require('dotenv').config();
// // // const express=require("express");
// // // const mongoose = require('mongoose');
// // // const bodyParser = require('body-parser')
// // // const app=express();
// // // const cors = require('cors')
// // // const HoldingsModel = require('./Model/HoldingsModel');
// // // const PositionsModel=require('./Model/PositionsModel');
// // // const OrdersModel=require('./Schemas/OrdersSchema');
// // // const userModel=require('./Schemas/UsersSchema');
// // // const { createSecretToken }=require('./SecretToken');
// // // const cookieParser = require("cookie-parser");
// // // const jwt = require("jsonwebtoken");

// // // const bcrypt = require('bcryptjs');




// // // const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174'];

// // // app.use(cors({
// // //   origin: function (origin, callback) {
// // //     if (!origin || allowedOrigins.indexOf(origin) !== -1) {
// // //       callback(null, true);
// // //     } else {
// // //       callback(new Error('Not allowed by CORS'));
// // //     }
// // //   },
// // //   credentials: true  // Allow credentials (cookies, HTTP authentication)
// // // }));
// // // app.use(bodyParser.json())
// // // app.use(cookieParser())
// // // const PORT=process.env.PORT || 3004;
// // // const URl=  process.env.MONGO_URL;

// // // main().then(()=>{
// // //     console.log("connected to DB");
// // // })
// // // .catch(err => console.log(err));

// // // async function main() {
// // //   await mongoose.connect(URl);
// // // }
// // // // app.get('/holdings', async(req,res)=>{
// // // //   const positions = [
// // // //     {
// // // //       product: "CNC",
// // // //       name: "EVEREADY",
// // // //       qty: 2,
// // // //       avg: 316.27,
// // // //       price: 312.35,
// // // //       net: "+0.58%",
// // // //       day: "-1.24%",
// // // //       isLoss: true,
// // // //     },
// // // //     {
// // // //       product: "CNC",
// // // //       name: "JUBLFOOD",
// // // //       qty: 1,
// // // //       avg: 3124.75,
// // // //       price: 3082.65,
// // // //       net: "+10.04%",
// // // //       day: "-1.35%",
// // // //       isLoss: true,
// // // //     },
// // // //   ];
       
// // // //       positions.forEach((item)=>{
// // // //         let newPOsition= new PositionsModel({
// // // //           product: item.product,
// // // //           name: item.name,
// // // //           qty: item.qty,
// // // //           avg: item.avg,
// // // //           price: item.price,
// // // //           net: item.net,
// // // //           day: item.day,
// // // //           isLoss:item.isLoss
// // // //         });
// // // //         newPOsition.save();
// // // //       })

// // // //       res.send('!Done');
      
      
// // // // })
// // // app.get('/auth', (req, res) => {
// // //   const token = req.cookies.token;
// // //   if (!token) {
// // //     return res.status(401).json({ isAuthenticated: false });
// // //   }

// // //   jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
// // //     if (err) {
// // //       return res.status(401).json({ isAuthenticated: false });
// // //     } else {
// // //       const user = await userModel.findById(data.id);
// // //       if (user) {
// // //         return res.json({ isAuthenticated: true, user: user.username });
// // //       } else {
// // //         return res.status(401).json({ isAuthenticated: false });
// // //       }
// // //     }
// // //   });
// // // });


// // // app.get("/allHoldings", async(req,res)=>{
// // //   let allHoldings=await HoldingsModel.find({});
// // //   res.json(allHoldings);
// // // })

// // // app.post('/newOrder', async (req, res) => {
// // //   const token = req.cookies.token;
// // //   if (!token) {
// // //     return res.status(401).json({ message: 'Unauthorized' });
// // //   }

// // //   jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
// // //     if (err) {
// // //       return res.status(401).json({ message: 'Unauthorized' });
// // //     }

// // //     const userId = data.id; // Extract userId from token

// // //     let newOrder = new OrdersModel({
// // //       name: req.body.name,
// // //       qty: req.body.qty,
// // //       price: req.body.price,
// // //       mode: req.body.mode,
// // //       userId: userId, // Add userId to the order
// // //     });

// // //     try {
// // //       await newOrder.save();
// // //       console.log("Order saved!");
// // //       res.send("Order saved!");
// // //     } catch (error) {
// // //       console.error(error);
// // //       res.status(500).json({ message: 'Error saving order' });
// // //     }
// // //   });
// // // });


// // // app.post('/newSell', async (req, res) => {
// // //   const token = req.cookies.token;
// // //   if (!token) {
// // //     return res.status(401).json({ message: 'Unauthorized' });
// // //   }

// // //   jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
// // //     if (err) {
// // //       console.error('JWT verification error:', err.message);
// // //       return res.status(401).json({ message: 'Unauthorized' });
// // //     }

// // //     const userId = data.id;

// // //     try {
// // //       let sell = await OrdersModel.find({ name: req.body.name, mode: "BUY", userId: userId });

// // //       if (sell.length > 0) {
// // //         let id = sell[0]._id;

// // //         let newSell = new OrdersModel({
// // //           name: req.body.name,
// // //           qty: req.body.qty,
// // //           price: req.body.price,
// // //           mode: req.body.mode,
// // //           userId: userId,
// // //         });

// // //         await newSell.save();
// // //         await OrdersModel.findByIdAndDelete(id);

// // //         res.json({ message: "Sell order processed and previous order deleted." });
// // //       } else {
// // //         res.status(404).json({ message: "No matching order found to delete." });
// // //       }
// // //     } catch (error) {
// // //       console.error('Error processing sell order:', error.message);
// // //       res.status(500).json({ message: "An error occurred.", error: error.message });
// // //     }
// // //   });
// // // });


// // // app.get("/allPositions",async(req,res)=>{
// // //   let allPOsitions=await PositionsModel.find({});
// // //   res.json(allPOsitions);
// // // })

// // // app.get('/allOrder', async (req, res) => {
// // //   const token = req.cookies.token;

// // //   if (!token) {
// // //     return res.status(401).json({ message: 'Unauthorized' });
// // //   }

// // //   jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
// // //     if (err) {
// // //       return res.status(401).json({ message: 'Unauthorized' });
// // //     }

// // //     const userId = data.id; // Extract userId from token

// // //     try {
// // //       // Fetch orders that belong to the authenticated user
// // //       let allOrders = await OrdersModel.find({ userId: userId });

// // //       res.json(allOrders);
// // //     } catch (error) {
// // //       console.error(error);
// // //       res.status(500).json({ message: 'An error occurred while fetching orders.' });
// // //     }
// // //   });
// // // });

// // // app.post('/newOrder', async (req, res) => {
// // //   const token = req.cookies.token;
// // //   if (!token) {
// // //     return res.status(401).json({ message: 'Unauthorized' });
// // //   }

// // //   jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
// // //     if (err) {
// // //       return res.status(401).json({ message: 'Unauthorized' });
// // //     }

// // //     const userId = data.id; // Extract userId from token

// // //     let newOrder = new OrdersModel({
// // //       name: req.body.name,
// // //       qty: req.body.qty,
// // //       price: req.body.price,
// // //       mode: req.body.mode,
// // //       userId: userId, // Add userId to the order
// // //     });

// // //     try {
// // //       await newOrder.save();
// // //       console.log("Order saved!");
// // //       res.send("Order saved!");
// // //     } catch (error) {
// // //       console.error(error);
// // //       res.status(500).json({ message: 'Error saving order' });
// // //     }
// // //   });
// // // });

// // // app.post('/newSell', async (req, res) => {
// // //   // Extract the token from cookies
// // //   const token = req.cookies.token;
// // //   if (!token) {
// // //     return res.status(401).json({ message: 'Unauthorized' });
// // //   }

// // //   // Verify the token
// // //   jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
// // //     if (err) {
// // //       return res.status(401).json({ message: 'Unauthorized' });
// // //     }

// // //     const userId = data.id; // Extract userId from token

// // //     try {
// // //       // Find the document(s) matching the given name, mode "BUY", and userId
// // //       let sell = await OrdersModel.find({ name: req.body.name, mode: "BUY", userId: userId });
// // //       console.log(sell);

// // //       // Check if any documents were found
// // //       if (sell.length > 0) {
// // //         let id = sell[0]._id;

// // //         // Create a new sell order
// // //         let newSell = new OrdersModel({
// // //           name: req.body.name,
// // //           qty: req.body.qty,
// // //           price: req.body.price,
// // //           mode: req.body.mode,
// // //           userId: userId, // Add userId to the sell order
// // //         });

// // //         // Save the new sell order to the database
// // //         await newSell.save();

// // //         // Delete the old order by its _id
// // //         await OrdersModel.findByIdAndDelete(id);

// // //         res.json({ message: "Sell order processed and previous order deleted." });
// // //       } else {
// // //         res.status(404).json({ message: "No matching order found to delete." });
// // //       }
// // //     } catch (error) {
// // //       console.error('Error processing sell order:', error.message);
// // //       res.status(500).json({ message: "An error occurred.", error: error.message });
// // //     }
// // //   });
// // // });





// // // app.post('/signup', async (req, res) => {
// // //   try {
// // //     const { email, password, username, createdAt } = req.body;
    
// // //     // Log received data
// // //     console.log("Received data:", req.body);

// // //     if (!email || !password || !username) {
// // //       return res.status(400).json({ message: "All fields are required" });
// // //     }

// // //     const existingUser = await userModel.findOne({ email });
// // //     if (existingUser) {
// // //       return res.json({ message: "User already exists" });
// // //     }

// // //     // Log before creating user
// // //     console.log("Creating user with data:", { email, password, username, createdAt });

// // //     const user = await userModel.create({ email, password, username, createdAt });

// // //     // Log after user creation
// // //     console.log("User created:", user);

// // //     const token = createSecretToken(user._id);
// // //     res.cookie("token", token, {
// // //       withCredentials: true,
// // //       httpOnly: false,
// // //     });

// // //     res.status(201).json({ message: "User signed up successfully", success: true, user });
// // //   } catch (error) {
// // //     console.error('Error during signup:', error);
// // //     res.status(500).json({ message: "Internal server error", error });
// // //   }
// // // });


// // // app.post('/login',async(req,res)=>{
// // //   try {
// // //     const { email, password } = req.body;
// // //     console.log(email);
// // //     console.log(password);
// // //     if(!email || !password ){
// // //       return res.json({message:'All fields are required'})
// // //     }
// // //     const user = await userModel.findOne({ email });
// // //     console.log(user);
// // //     if(!user){
// // //       return res.json({message:'Incorrect password or email' }) 
// // //     }
// // //     const auth = await bcrypt.compare(password,user.password)
// // //     if (!auth) {
// // //       console.log(email);
// // //       return res.json({message:'Incorrect password or email' }) 
// // //     }
// // //      const token = createSecretToken(user._id);
// // //      res.cookie("token", token, {
// // //        withCredentials: true,
// // //        httpOnly: false,
// // //      });
// // //      res.status(201).json({ message: "User logged in successfully", success: true });
    
// // //   } catch (error) {
// // //     console.error(error);
// // //   }
// // // })






// // // app.listen(PORT,()=>{
// // //     console.log(`server is runing on port ${PORT}`);
// // // })


// // require('dotenv').config();
// // const express = require("express");
// // const mongoose = require('mongoose');
// // const bodyParser = require('body-parser');
// // const cors = require('cors');
// // const cookieParser = require("cookie-parser");
// // const jwt = require("jsonwebtoken");
// // const bcrypt = require('bcryptjs');

// // const HoldingsModel = require('./Model/HoldingsModel');
// // const PositionsModel = require('./Model/PositionsModel');
// // const OrdersModel = require('./Schemas/OrdersSchema');
// // const userModel = require('./Schemas/UsersSchema');
// // const { createSecretToken } = require('./SecretToken');

// // const app = express();
// // const PORT = process.env.PORT || 3004;
// // const URl = process.env.MONGO_URL;

// // const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174'];

// // app.use(cors({
// //   origin: function (origin, callback) {
// //     if (!origin || allowedOrigins.includes(origin)) {
// //       callback(null, true);
// //     } else {
// //       callback(new Error('Not allowed by CORS'));
// //     }
// //   },
// //   credentials: true // Allow cookies to be sent and received
// // }));

// // app.use(bodyParser.json());
// // app.use(cookieParser());

// // mongoose.connect(URl)
// //   .then(() => console.log("Connected to DB"))
// //   .catch(err => console.log(err));

// // app.get('/auth', (req, res) => {
// //   const token = req.cookies.token;
// //   if (!token) {
// //     return res.status(401).json({ isAuthenticated: false });
// //   }

// //   jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
// //     if (err) {
// //       return res.status(401).json({ isAuthenticated: false });
// //     }

// //     const user = await userModel.findById(data.id);
// //     if (user) {
// //       return res.json({ isAuthenticated: true, user: user.username });
// //     } else {
// //       return res.status(401).json({ isAuthenticated: false });
// //     }
// //   });
// // });

// // app.get("/allHoldings", async (req, res) => {
// //   let allHoldings = await HoldingsModel.find({});
// //   res.json(allHoldings);
// // });

// // app.post('/newOrder', async (req, res) => {
// //   const token = req.cookies.token;
// //   if (!token) {
// //     return res.status(401).json({ message: 'Unauthorized' });
// //   }

// //   jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
// //     if (err) {
// //       return res.status(401).json({ message: 'Unauthorized' });
// //     }

// //     const userId = data.id;
// //     let newOrder = new OrdersModel({
// //       name: req.body.name,
// //       qty: req.body.qty,
// //       price: req.body.price,
// //       mode: req.body.mode,
// //       userId: userId,
// //     });

// //     try {
// //       await newOrder.save();
// //       console.log("Order saved!");
// //       res.send("Order saved!");
// //     } catch (error) {
// //       console.error(error);
// //       res.status(500).json({ message: 'Error saving order' });
// //     }
// //   });
// // });

// // app.post('/newSell', async (req, res) => {
// //   const token = req.cookies.token;
// //   if (!token) {
// //     return res.status(401).json({ message: 'Unauthorized' });
// //   }

// //   jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
// //     if (err) {
// //       console.error('JWT verification error:', err.message);
// //       return res.status(401).json({ message: 'Unauthorized' });
// //     }

// //     const userId = data.id;

// //     try {
// //       let sell = await OrdersModel.find({ name: req.body.name, mode: "BUY", userId: userId });
// //       if (sell.length > 0) {
// //         let id = sell[0]._id;

// //         let newSell = new OrdersModel({
// //           name: req.body.name,
// //           qty: req.body.qty,
// //           price: req.body.price,
// //           mode: req.body.mode,
// //           userId: userId,
// //         });

// //         await newSell.save();
// //         await OrdersModel.findByIdAndDelete(id);

// //         res.json({ message: "Sell order processed and previous order deleted." });
// //       } else {
// //         res.status(404).json({ message: "No matching order found to delete." });
// //       }
// //     } catch (error) {
// //       console.error('Error processing sell order:', error.message);
// //       res.status(500).json({ message: "An error occurred.", error: error.message });
// //     }
// //   });
// // });

// // app.get("/allPositions", async (req, res) => {
// //   let allPositions = await PositionsModel.find({});
// //   res.json(allPositions);
// // });

// // app.get('/allOrder', async (req, res) => {
// //   const token = req.cookies.token;

// //   if (!token) {
// //     return res.status(401).json({ message: 'Unauthorized' });
// //   }

// //   jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
// //     if (err) {
// //       return res.status(401).json({ message: 'Unauthorized' });
// //     }

// //     const userId = data.id;

// //     try {
// //       let allOrders = await OrdersModel.find({ userId: userId });
// //       res.json(allOrders);
// //     } catch (error) {
// //       console.error(error);
// //       res.status(500).json({ message: 'An error occurred while fetching orders.' });
// //     }
// //   });
// // });

// // app.post('/signup', async (req, res) => {
// //   try {
// //     const { email, password, username, createdAt } = req.body;

// //     if (!email || !password || !username) {
// //       return res.status(400).json({ message: "All fields are required" });
// //     }

// //     const existingUser = await userModel.findOne({ email });
// //     if (existingUser) {
// //       return res.json({ message: "User already exists" });
// //     }

// //     const user = await userModel.create({ email, password, username, createdAt });
// //     const token = createSecretToken(user._id);

// //     res.cookie("token", token, {
// //       httpOnly: true,
// //       secure: process.env.NODE_ENV === 'production',
// //       sameSite: 'None'
// //     });

// //     res.status(201).json({ message: "User signed up successfully", success: true, user });
// //   } catch (error) {
// //     console.error('Error during signup:', error);
// //     res.status(500).json({ message: "Internal server error", error });
// //   }
// // });

// // app.post('/login', async (req, res) => {
// //   try {
// //     const { email, password } = req.body;
// //     if (!email || !password) {
// //       return res.json({ message: 'All fields are required' });
// //     }

// //     const user = await userModel.findOne({ email });
// //     if (!user) {
// //       return res.json({ message: 'Incorrect password or email' });
// //     }

// //     const auth = await bcrypt.compare(password, user.password);
// //     if (!auth) {
// //       return res.json({ message: 'Incorrect password or email' });
// //     }

// //     const token = createSecretToken(user._id);
// //     res.cookie("token", token, {
// //       httpOnly: true,
// //       secure: process.env.NODE_ENV === 'production',
// //       sameSite: 'None'
// //     });

// //     res.status(201).json({ message: "User logged in successfully", success: true });
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ message: 'Internal server error' });
// //   }
// // });

// // app.listen(PORT, () => {
// //   console.log(`Server is running on port ${PORT}`);
// // });
// require('dotenv').config();
// const express = require("express");
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const cookieParser = require("cookie-parser");
// const jwt = require("jsonwebtoken");
// const bcrypt = require('bcryptjs');

// const HoldingsModel = require('./Model/HoldingsModel');
// const PositionsModel = require('./Model/PositionsModel');
// const OrdersModel = require('./Schemas/OrdersSchema');
// const userModel = require('./Schemas/UsersSchema');
// const { createSecretToken } = require('./SecretToken');

// const app = express();
// const PORT = process.env.PORT || 3004;
// const URl = process.env.MONGO_URL;

// const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174'];

// app.use(cors({
//   origin: function (origin, callback) {
//     if (!origin || allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
//   credentials: true
// }));

// app.use(bodyParser.json());
// app.use(cookieParser());

// mongoose.connect(URl)
//   .then(() => console.log("Connected to DB"))
//   .catch(err => console.log(err));

// app.get('/auth', async (req, res) => {
//   const token = req.cookies.token;
//   if (!token) {
//     return res.status(401).json({ isAuthenticated: false });
//   }

//   jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
//     if (err) {
//       return res.status(401).json({ isAuthenticated: false });
//     }

//     const user = await userModel.findById(data.id);
//     if (user) {
//       return res.json({ isAuthenticated: true, user: user.username });
//     } else {
//       return res.status(401).json({ isAuthenticated: false });
//     }
//   });
// });

// app.get("/allHoldings", async (req, res) => {
//   try {
//     let allHoldings = await HoldingsModel.find({});
//     res.json(allHoldings);
//   } catch (error) {
//     console.error('Error fetching holdings:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// app.post('/newOrder', async (req, res) => {
//   const token = req.cookies.token;
//   if (!token) {
//     return res.status(401).json({ message: 'Unauthorized' });
//   }

//   jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
//     if (err) {
//       return res.status(401).json({ message: 'Unauthorized' });
//     }

//     const userId = data.id;
//     let newOrder = new OrdersModel({
//       name: req.body.name,
//       qty: req.body.qty,
//       price: req.body.price,
//       mode: req.body.mode,
//       userId: userId,
//     });

//     try {
//       await newOrder.save();
//       res.send("Order saved!");
//     } catch (error) {
//       console.error('Error saving order:', error);
//       res.status(500).json({ message: 'Error saving order' });
//     }
//   });
// });

// app.post('/newSell', async (req, res) => {
//   const token = req.cookies.token;
//   if (!token) {
//     return res.status(401).json({ message: 'Unauthorized' });
//   }

//   jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
//     if (err) {
//       console.error('JWT verification error:', err.message);
//       return res.status(401).json({ message: 'Unauthorized' });
//     }

//     const userId = data.id;

//     try {
//       let sell = await OrdersModel.find({ name: req.body.name, mode: "BUY", userId: userId });
//       if (sell.length > 0) {
//         let id = sell[0]._id;

//         let newSell = new OrdersModel({
//           name: req.body.name,
//           qty: req.body.qty,
//           price: req.body.price,
//           mode: req.body.mode,
//           userId: userId,
//         });

//         await newSell.save();
//         await OrdersModel.findByIdAndDelete(id);

//         res.json({ message: "Sell order processed and previous order deleted." });
//       } else {
//         res.status(404).json({ message: "No matching order found to delete." });
//       }
//     } catch (error) {
//       console.error('Error processing sell order:', error.message);
//       res.status(500).json({ message: "An error occurred.", error: error.message });
//     }
//   });
// });

// app.get("/allPositions", async (req, res) => {
//   try {
//     let allPositions = await PositionsModel.find({});
//     res.json(allPositions);
//   } catch (error) {
//     console.error('Error fetching positions:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// app.get('/allOrder', async (req, res) => {
//   const token = req.cookies.token;

//   if (!token) {
//     return res.status(401).json({ message: 'Unauthorized' });
//   }

//   jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
//     if (err) {
//       return res.status(401).json({ message: 'Unauthorized' });
//     }

//     const userId = data.id;

//     try {
//       let allOrders = await OrdersModel.find({ userId: userId });
//       res.json(allOrders);
//     } catch (error) {
//       console.error('Error fetching orders:', error);
//       res.status(500).json({ message: 'An error occurred while fetching orders.' });
//     }
//   });
// });

// app.post('/signup', async (req, res) => {
//   try {
//     const { email, password, username, createdAt } = req.body;

//     if (!email || !password || !username) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     const existingUser = await userModel.findOne({ email });
//     if (existingUser) {
//       return res.json({ message: "User already exists" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 12);
//     const user = await userModel.create({ email, password: hashedPassword, username, createdAt });
//     const token = createSecretToken(user._id);

//     res.cookie("token", token, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === 'production',
//       sameSite: 'None'
//     });

//     res.status(201).json({ message: "User signed up successfully", success: true, user });
//   } catch (error) {
//     console.error('Error during signup:', error);
//     res.status(500).json({ message: "Internal server error", error });
//   }
// });

// app.post('/login', async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     if (!email || !password) {
//       return res.status(400).json({ message: 'All fields are required' });
//     }

//     const user = await userModel.findOne({ email });
//     if (!user) {
//       return res.status(401).json({ message: 'Incorrect password or email' });
//     }

//     const auth = await bcrypt.compare(password, user.password);
//     if (!auth) {
//       return res.status(401).json({ message: 'Incorrect password or email' });
//     }

//     const token = createSecretToken(user._id);
//     res.cookie("token", token, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === 'production',
//       sameSite: 'None'
//     });

//     res.status(200).json({ message: "User logged in successfully", success: true });
//   } catch (error) {
//     console.error('Error during login:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// // app.post('/api/logout', (req, res) => {
// //   res.cookie("token", "", {
// //     httpOnly: true,
// //     secure: false, // Set to false for development
// //     sameSite: 'None',
// //     expires: new Date(0) // Expire the cookie
// //   });
// //   
// // });

// app.get("/logout", (req, res) => {
//   res.cookie("token", "", {
//     httpOnly: true,
//     secure: false,
//     sameSite: 'None',
//     expires: new Date(0),
//     path: '/' // Ensure path matches the original cookie path
//   });
//   res.status(200).json({ message: 'User logged out successfully' });
// });




// app.get('/users', async (req, res) => {
//   const token = req.cookies.token;
//   console.log('Token received:', token);

//   if (!token) {
//     return res.status(401).json({ message: 'Unauthorized' });
//   }

//   jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
//     if (err) {
//       console.error('JWT verification error:', err);
//       return res.status(401).json({ message: 'Unauthorized' });
//     }

//     try {
//       const user = await userModel.findById(data.id);
//       if (user) {
//         console.log('User found:', user);
//         return res.json({ username: user.username, email: user.email });
//       } else {
//         console.warn('User not found for ID:', data.id);
//         return res.status(404).json({ message: 'User not found' });
//       }
//     } catch (error) {
//       console.error('Error fetching user info:', error);
//       return res.status(500).json({ message: 'Internal server error' });
//     }
//   });
// });



// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');

const HoldingsModel = require('./Model/HoldingsModel');
const PositionsModel = require('./Model/PositionsModel');
const OrdersModel = require('./Schemas/OrdersSchema');
const userModel = require('./Schemas/UsersSchema');
const { createSecretToken } = require('./SecretToken');

const app = express();
const PORT = process.env.PORT || 3004;
const URl = process.env.MONGO_URL;

// Update the allowed origins to include your frontend ports
const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true // Allow cookies and credentials across different origins
}));

app.use(bodyParser.json());
app.use(cookieParser()); // Parse cookies sent in HTTP requests

// Connect to MongoDB
mongoose.connect(URl)
  .then(() => console.log("Connected to DB"))
  .catch(err => console.log(err));

// Authentication route
app.get('/auth', async (req, res) => {
  const token = req.cookies.token; // Retrieve the token from cookies
  if (!token) {
    return res.status(401).json({ isAuthenticated: false });
  }

  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.status(401).json({ isAuthenticated: false });
    }

    const user = await userModel.findById(data.id);
    if (user) {
      return res.json({ isAuthenticated: true, user: user.username });
    } else {
      return res.status(401).json({ isAuthenticated: false });
    }
  });
});

// Fetch all holdings
app.get("/allHoldings", async (req, res) => {
  try {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (error) {
    console.error('Error fetching holdings:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Place a new order
app.post('/newOrder', async (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const userId = data.id;
    const newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
      userId: userId,
    });

    try {
      await newOrder.save();
      res.send("Order saved!");
    } catch (error) {
      console.error('Error saving order:', error);
      res.status(500).json({ message: 'Error saving order' });
    }
  });
});

// Sell order
app.post('/newSell', async (req, res) => {
  const token = req.cookies.token;
  console.log(token)
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      console.error('JWT verification error:', err.message);
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const userId = data.id;

    try {
      let sell = await OrdersModel.find({ name: req.body.name, mode: "BUY", userId: userId });
      if (sell.length > 0) {
        let id = sell[0]._id;

        const newSell = new OrdersModel({
          name: req.body.name,
          qty: req.body.qty,
          price: req.body.price,
          mode: req.body.mode,
          userId: userId,
        });

        await newSell.save();
        await OrdersModel.findByIdAndDelete(id);

        res.json({ message: "Sell order processed and previous order deleted." });
      } else {
        res.status(404).json({ message: "No matching order found to delete." });
      }
    } catch (error) {
      console.error('Error processing sell order:', error.message);
      res.status(500).json({ message: "An error occurred.", error: error.message });
    }
  });
});

// Fetch all positions
app.get("/allPositions", async (req, res) => {
  try {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (error) {
    console.error('Error fetching positions:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Fetch all orders for a user
app.get('/allOrder', async (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const userId = data.id;

    try {
      let allOrders = await OrdersModel.find({ userId: userId });
      res.json(allOrders);
    } catch (error) {
      console.error('Error fetching orders:', error);
      res.status(500).json({ message: 'An error occurred while fetching orders.' });
    }
  });
});

// Signup route
app.post('/signup', async (req, res) => {
  try {
    const { email, password, username, createdAt } = req.body;

    if (!email || !password || !username) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await userModel.create({ email, password: hashedPassword, username, createdAt });
    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'development',
      sameSite: 'None' // Ensure cookies work cross-site
    });

    res.status(201).json({ message: "User signed up successfully", success: true, user });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ message: "Internal server error", error });
  }
});

// Login route
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Incorrect password or email' });
    }

    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.status(401).json({ message: 'Incorrect password or email' });
    }

    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'development',
      sameSite: 'None'
    });

    res.status(200).json({ message: "User logged in successfully", success: true });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Logout route
// Logout route
// app.get("/logout", (req, res) => {
//   res.cookie("token", "", {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === 'development', // Use 'true' in production and 'false' in development
//     sameSite: 'None', // 'None' for cross-site cookies, adjust if needed
//     expires: new Date(0), // Expire the cookie immediately
//     path: '/', // Ensure the cookie path matches the original path
//   });
  
//   res.status(200).json({ message: 'User logged out successfully' });
 
// });
app.get("/logout", (req, res) => {
  console.log("Logout request received");
  res.cookie("token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'development', // Adjust for production
    sameSite: 'None',
    expires: new Date(0),
    path: '/', // Ensure path matches the original path
  });

  // Log response headers to debug cookie attributes
  console.log("Cookie attributes set:", res.getHeaders()['set-cookie']);

  res.status(200).json({ message: 'User logged out successfully' });
});

// Fetch user details
app.get('/users', async (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
      const user = await userModel.findById(data.id);
      if (user) {
        return res.json({ username: user.username, email: user.email });
      } else {
        return res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  });
});
app.get('/test-cookies', (req, res) => {
  console.log("Cookies:", req.cookies);
  res.json({ cookies: req.cookies });
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
