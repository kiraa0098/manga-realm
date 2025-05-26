const { Router } = require("express");

const manga_detail_controller = require("../controllers/manga_detail_controller");

const manga_detail_router = Router();

manga_detail_router.get(
  "/manga/:manga_id",
  manga_detail_controller.manga_detail_page
);

export default manga_detail_router;
