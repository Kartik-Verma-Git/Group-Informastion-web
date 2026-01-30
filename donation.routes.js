const express = require("express");
const router = express.Router();
const donationController = require("../controllers/donation.controller");
const authMiddleware = require("../middleware/auth.middleware");

// 🔐 Protected routes
router.post("/", authMiddleware, donationController.createDonation);
router.get("/me", authMiddleware, donationController.getMyDonations);




// router.post("/", authMiddleware, donationController.createDonation);
// router.get("/me", authMiddleware, donationController.getMyDonations);

// 💳 Payment routes
router.post("/create-order", authMiddleware, donationController.createOrder);
router.post("/verify-payment", authMiddleware, donationController.verifyPayment);


module.exports = router;