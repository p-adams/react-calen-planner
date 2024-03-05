import { useEffect, useState } from "react";
import "./Modal.css";
interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  children?: JSX.Element;
}
function Modal(props: ModalProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(props.isOpen);

  const handleClose = () => {
    setIsDialogOpen(false);
    props.onClose?.();
  };

  // Update dialog state if `isOpen` prop changes
  useEffect(() => {
    setIsDialogOpen(props.isOpen);
  }, [props.isOpen]);

  return (
    <>
      {isDialogOpen && (
        <dialog open={isDialogOpen} onClose={handleClose}>
          <div className="dialog-actions">
            <button className="close-button" onClick={handleClose}>
              &times;
            </button>
          </div>
          <div className="dialog-content">{props.children}</div>
        </dialog>
      )}
    </>
  );
}

export default Modal;
