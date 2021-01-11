const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
  console.log(__dirname.replace("/routes", ""));
  res.sendFile(__dirname.replace("/routes", "") + "/wut.html");
});

module.exports = router;