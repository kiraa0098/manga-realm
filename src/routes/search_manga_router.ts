const { Router } = require("express");

const search_manga_controller = require("../controllers/search_manga_controller");

const search_manga_route = Router();

search_manga_route.get("/search", search_manga_controller.search_manga_page);

export default search_manga_route;
