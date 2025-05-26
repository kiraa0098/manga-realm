import { fetch_maganda_details_by_id_API } from "../services/fetch_manga_details_by_id_service";

export const manga_detail_page = async (req, res) => {
  const { manga_id } = req.params;

  try {
    const fetch_result = await fetch_maganda_details_by_id_API(manga_id);

    console.log(JSON.stringify(fetch_result, null, 2));

    res.render("pages/manga_detail_page");
  } catch (error) {
    console.error("Error manga detail page:", error);
    res.status(500).send("Internal Server Error");
  }
};
