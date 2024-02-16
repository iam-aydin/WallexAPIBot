const express = require("express");
require("dotenv").config();
const axios = require("axios");

const app = express();
const port = 3000;
const API_URL = process.env.API_URL;
const KEY = "X-API-Key";
const API_KEY_VALUE = process.env.API_KEY_VALUE;

app.use(express.static("public"));

// You can get a list of markets and their status with the following request
app.get("/markets", async (req, res) => {
  const config = {
    headers: {
      "X-API-Key": API_KEY_VALUE,
    },
  };
  try {
    const response = await axios.get(`${API_URL}/v1/markets`, config);
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Error 401 Unauthorized" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});
