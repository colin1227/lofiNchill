const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile("/Users/colin/Desktop/lofi/wut.html");
});

module.exports = router;