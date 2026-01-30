const db = require("../config/db");

// CREATE DONATION
exports.createDonation = async (req, res) => {
  const { amount, purpose } = req.body;
  const userId = req.user.id;

  if (!amount || amount <= 0) {
    return res.status(400).json({ message: "Invalid donation amount" });
  }

  try {
    const [result] = await db.query(
      "INSERT INTO donations (user_id, amount, purpose) VALUES (?, ?, ?)",
      [userId, amount, purpose || null]
    );

    res.status(201).json({
      message: "Donation created",
      donationId: result.insertId
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// GET USER DONATIONS
exports.getMyDonations = async (req, res) => {
  const userId = req.user.id;

  try {
    const [rows] = await db.query(
      "SELECT id, amount, purpose, status, created_at FROM donations WHERE user_id = ? ORDER BY created_at DESC",
      [userId]
    );

    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};


const razorpay = require("../config/razorpay");
const crypto = require("crypto");

// CREATE RAZORPAY ORDER
exports.createOrder = async (req, res) => {
  const { donationId } = req.body;

  try {
    const [rows] = await db.query(
      "SELECT amount FROM donations WHERE id = ? AND user_id = ?",
      [donationId, req.user.id]
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: "Donation not found" });
    }

    const amountInPaise = rows[0].amount * 100;

    const order = await razorpay.orders.create({
      amount: amountInPaise,
      currency: "INR",
      receipt: `donation_${donationId}`
    });

    res.json(order);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Payment order failed" });
  }
};

// VERIFY PAYMENT
exports.verifyPayment = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature, donationId } = req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(body)
    .digest("hex");

  if (expectedSignature !== razorpay_signature) {
    return res.status(400).json({ message: "Payment verification failed" });
  }

  await db.query(
    "UPDATE donations SET status = 'SUCCESS' WHERE id = ?",
    [donationId]
  );

  res.json({ message: "Payment verified successfully" });
};
