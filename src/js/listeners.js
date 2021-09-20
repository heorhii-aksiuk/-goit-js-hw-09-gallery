import refs from "./refs";
const { galeryListEl, closeModalBtn } = refs;
import onImageClick from "./on-image-click";
import onCloseModalBtnClick from "./on-close-modal-btn-click";

export const galeryListListener = galeryListEl.addEventListener(
  "click",
  onImageClick
);

export const closeModalBtnListener = closeModalBtn.addEventListener(
  "click",
  onCloseModalBtnClick
);
