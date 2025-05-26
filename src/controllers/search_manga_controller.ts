import { search_manga_API } from "../services/search_manga_service";

export const search_manga_page = async (req, res) => {
  const search = req.query.q as string;
  const page = parseInt(req.query.p as string);

  try {
    const { mangas, total_pages } = await search_manga_API(search, page);

    console.log(JSON.stringify(mangas, null, 2));

    res.render("pages/search_manga_page", {
      results: mangas,
      query: search,
      current_page: page,
      total_pages: total_pages,
    });
  } catch (error) {
    console.error("Error search manga page:", error);
    res.status(500).send("Internal Server Error");
  }
};
