import data from "./data";
import createMarkup from "./markup";
import refs from "./refs";

export default refs.galeryListEl.insertAdjacentHTML(
  "afterbegin",
  createMarkup(data)
);
