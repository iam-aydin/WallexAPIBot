import express from "express";
import fs from 'fs';
import axios from "axios";
import { type } from "os";

const app = express();
const port = 3000;
const API_URL = "https://api.wallex.ir";
const KEY = "X-API-Key"
const API_KEY_VALUE = fs.readFileSync('./api_key_value.txt', 'utf8').trim();


// با درخواست زیر می‌توانید لیستی از بازارها و وضعیت آنها دریافت کنید
app.get("/", async (req, res) => {
    const config = { 
        headers: {
            "X-API-Key": API_KEY_VALUE
        }
     }
  try {
    const response = await axios.get(`${API_URL}/v1/markets`, config);
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Error 401 Unauthorized" });
   }
});

app.listen(port, () => {
    console.log(`Server is running on port : ${port}`)
})
