const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

//-----------------------------add routers paths-----------------------------//
const productsRouter = require("./src/routes/Products");
const orderRouter = require("./src/routes/Order");
const usersRouter = require("./src/routes/Users");
const materailRouter = require("./src/routes/Materail");
const customerRouter = require("./src/routes/Customer");
const employeeRouter = require("./src/routes/Employee");
const  supplierRouter= require("./src/routes/Supplier");

//-----------------------------Connect with mongodb-----------------------------//
mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("mongo connected"))
  .catch((err) => console.log(err));

//-----------------------------middleware-----------------------------//

app.use(morgan("dev"));
app.use("/uploads", express.static("uploads"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

//-----------------------------Routers---------------------------//

app.use("/products", productsRouter);
app.use("/orders", orderRouter);
app.use("/users", usersRouter);
app.use("/materails", materailRouter);
app.use("/employees", employeeRouter);
app.use("/customers", customerRouter);
app.use("/suppliers", supplierRouter);

//-----------------------------ADDP+BULID PATH----------------------//

// var etat = process.env.NODE_ENV;
// console.log(etat);
// if (etat === "production") {
//   app.use(express.static(path.join(__dirname, "../client/build")));
//   app.get("*", (req, res) => {
//     console.log("work");
//     return res.sendFile(path.join(__dirname, "client", "build", "index.html"));
    
//   });
// } else {
//   app.get("/", (req, res) => {
//     console.log("not work");
//     return res.send("api running...");
//   });
// }

//-----------------------------Handling errors---------------------//
app.use((req, res, next) => {
  const error = new Error(`error 404 page not found`);
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
