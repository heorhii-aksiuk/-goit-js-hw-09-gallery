// import data from "./data";
// const { original } = data;
import openModal from "./open-modal";

export default function onImageClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") return;
  event.target.dataset.source;
  openModal();
}
