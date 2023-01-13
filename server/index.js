const express = require("express");
const server = express();
require("dotenv").config();
const PORT = process.env.PORT || 4001;
const dbRouter = require("./src/routes/dbRoute");
const cors = require("cors");

server.use(cors());
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use("/api", dbRouter);

server.get("/", (req, res) => {
  res.status(200).send("<h2>Home Route!</h2>");
});

server.listen(PORT, () => console.log(`Running on port ${PORT}`));
