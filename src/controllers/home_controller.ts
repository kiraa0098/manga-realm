export const index_page = (req, res) => {
  try {
    res.render("pages/_index_page");
  } catch (error) {
    console.error("Error rendering index page:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const homepage = (req, res) => {
  try {
    res.render("pages/homepage");
  } catch (error) {
    console.error("Error rendering homepage:", error);
    res.status(500).send("Internal Server Error");
  }
};
