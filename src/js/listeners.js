import refs from "./refs";
const { galeryListEl } = refs;
import onImageClick from "./on-image-click";

export default galeryListEl.addEventListener("click", onImageClick);
