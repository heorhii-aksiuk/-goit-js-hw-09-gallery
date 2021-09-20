import refs from "./refs";
const { modalEl } = refs;

export default function closeModal() {
  modalEl.classList.remove("is-open");
}
