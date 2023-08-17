const express = require("express");
require("dotenv").config();
const path = require("path");
const urlRouter = require("./routers/urlRouter");
const { dbConfig } = require("./configs/dbConfig");
const renderRouter = require("./routers/renderRouter");
const analyticRouter = require("./routers/analyticRouter");
const staticRouter = require("./routers/staticRouter");
const userRouter = require("./routers/userRouter");
const cookieParser = require("cookie-parser");
const {
  restrictToLoggedInUserOnly,
  checkAuth,
} = require("./middlewares/authMiddle");
const app = express();
const PORT = process.env.PORT || 5000;

// database
const databaseUrl = process.env.DATABASE_URL;
dbConfig(databaseUrl)
  .then(() => console.log("MongoDB is Connected..."))
  .catch((err) => console.log(err));

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// views
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// routes
app.use("/", checkAuth, staticRouter);
app.use("/url", restrictToLoggedInUserOnly, urlRouter);
app.use("/render", renderRouter);
app.use("/analytic", analyticRouter);
app.use("/user", userRouter);

app.listen(PORT, () =>
  console.log(`Server Running Successfully on Port: ${PORT}`)
);
