const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => console.log("welcome to our express app"));

app.listen(3000, () => console.log("server is running on port 3000"));
