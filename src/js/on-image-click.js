// import data from "./data";
// const { original } = data;

export default function onImageClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") return;
  return event.target.dataset.source;
}
