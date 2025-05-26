const { Router } = require("express");

const home_controller = require("../controllers/home_controller");

const home_router = Router();

home_router.get("/", home_controller.index_page);

home_router.get("/home", home_controller.homepage);

export default home_router;
