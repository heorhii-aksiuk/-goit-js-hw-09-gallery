import refs from "./refs";
const { modalEl } = refs;

export default function openModal() {
  modalEl.classList.add("is-open");
}
