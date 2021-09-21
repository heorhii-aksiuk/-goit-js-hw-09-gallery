import refs from "./refs";
const { galeryListEl, closeModalBtn, overlayEl } = refs;
import onImageClick from "./on-image-click";
import closeModal from "./close-modal";

export const galeryListListener = galeryListEl.addEventListener(
  "click",
  onImageClick
);

export const closeModalBtnListener = closeModalBtn.addEventListener(
  "click",
  closeModal
);

export const overlayListener = overlayEl.addEventListener("click", closeModal);
