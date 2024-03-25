const express = require("express");
const db = require("./src/config/db");
const user = require("./src/models/user-model");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("PORT is listening on ", PORT);
});

const testDb = async () => {
  try {
    await db.authenticate();
    console.log("Connection has been established successfully.");

    const model = user.build({ email: "admin@example.com" });
    console.log("User", model);
  } catch (error) {
    throw new Error("ERROR", error);
  }
};

testDb();
