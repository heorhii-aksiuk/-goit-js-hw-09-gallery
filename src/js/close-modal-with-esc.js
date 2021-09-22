import closeModal from "./close-modal";

export default function closeModalWithEsc(event) {
  if (event.code === "Escape") closeModal();
}
