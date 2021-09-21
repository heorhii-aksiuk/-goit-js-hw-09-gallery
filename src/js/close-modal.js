import refs from "./refs";
const { modalEl, modalImageEl } = refs;

export default function closeModal() {
  modalEl.classList.remove("is-open");
  modalImageEl.src = "";
}
