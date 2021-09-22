import refs from "./refs";
import closeModalWithEsc from "./close-modal-with-esc";

const { modalEl, modalImageEl } = refs;

export default function closeModal() {
  window.removeEventListener("keydown", closeModalWithEsc);
  modalEl.classList.remove("is-open");
  modalImageEl.src = "";
}
