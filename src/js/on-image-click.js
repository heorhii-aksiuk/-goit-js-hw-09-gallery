// import data from "./data";
// const { original } = data;
import openModal from "./open-modal";
import refs from "./refs";
const { modalImageEl } = refs;

export default function onImageClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") return;
  modalImageEl.src = event.target.dataset.source;
  openModal();
}
