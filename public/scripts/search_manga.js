document.addEventListener("DOMContentLoaded", () => {
  const search_input = document.getElementById("search-manga-input");

  search_input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      const query = search_input.value.trim();
      if (query) {
        const formatted_search_query = format_search_query(query);

        window.location.href = `/search?q=${formatted_search_query}&p=1`;
      }
    }
  });
});
