import refs from "./refs";
const { modalEl } = refs;

export default function onCloseModalBtnClick() {
  modalEl.classList.remove("is-open");
}
