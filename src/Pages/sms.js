const express = require("express");
const Twilio = require("twilio");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = 5000;

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = new Twilio(accountSid, authToken);

app.use(cors());
app.use(express.json());

app.post("/send-sms", (req, res) => {
  const { message } = req.body;

  client.messages
    .create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: process.env.TO_PHONE_NUMBER,
    })
    .then((message) => {
      res.status(200).json({ success: true, message: "SMS yuborildi" });
    })
    .catch((error) => {
      res.status(500).json({ success: false, message: "Xato yuz berdi: " + error.message });
    });
});

app.listen(port, () => {
  console.log(`Server http://localhost:${port} da ishga tushdi`);
});
