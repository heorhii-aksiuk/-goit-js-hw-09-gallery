import closeModalWithEsc from "./close-modal-with-esc";
import refs from "./refs";
const { modalEl } = refs;

export default function openModal() {
  window.addEventListener("keydown", closeModalWithEsc);
  modalEl.classList.add("is-open");
}
