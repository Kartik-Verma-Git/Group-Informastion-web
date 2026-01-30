const express = require("express");
require("./config/db");



const cors = require("cors");
const helmet = require("helmet");

const healthRoutes = require("./routes/health.route");
const authRoutes = require("./routes/auth.routes");
const donationRoutes = require("./routes/donation.routes");



const app = express();

app.use(helmet());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(express.json());

app.use("/api/health", healthRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/donations", donationRoutes);



module.exports = app;
