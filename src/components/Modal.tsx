import { useState } from "react";
import "./Modal.css";
interface ModalProps {
  isOpen: boolean;
  close?: () => void;
  dialogUI?: () => JSX.Element;
}
function Modal(props: ModalProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);

  // Use external isOpen if provided, otherwise use internal state
  const isOpen = props.isOpen !== undefined ? props.isOpen : internalIsOpen;

  const close = () => {
    // Call external close if provided, otherwise update internal state
    if (props.close) {
      props.close();
    } else {
      setInternalIsOpen(false);
    }
  };

  return (
    <dialog className="modal" open={isOpen} onClose={close}>
      {props.dialogUI?.()}
    </dialog>
  );
}

export default Modal;
