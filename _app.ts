const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src", "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

import home_router from "./src/routes/home_router";
app.use(home_router);

import search_manga_router from "./src/routes/search_manga_router";
app.use(search_manga_router);

import manga_detail_router from "./src/routes/manga_detail_router";
app.use(manga_detail_router);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
