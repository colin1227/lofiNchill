const express = require("express");
const cors = require("cors");
const routes = require("./routes/index");
const serverless = require("serverless-http");

const port = 3000;

const app = express();

app.use(cors({ origin: "*" }))
app.use("/", routes);

app.listen(port, () =>{
  console.log("Live.");
})

module.exports.handler = serverless(app);