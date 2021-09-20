import closeModal from "./close-modal";
import refs from "./refs";
const { modalImageEl } = refs;

export default function onCloseModalBtnClick() {
  closeModal();
  modalImageEl.src = "";
}
