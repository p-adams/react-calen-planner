import { useState } from "react";
import Modal from "../../components/Modal";

function ModalExample() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <button>open</button>
      <Modal isOpen={isOpen} close={() => setIsOpen(false)}></Modal>
    </>
  );
}

export default ModalExample;
