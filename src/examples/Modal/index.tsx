import { useState } from "react";
import Modal from "../../components/Modal";

function ModalExample() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>open</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <form>
          <label>
            name
            <input />
          </label>
        </form>
      </Modal>
    </>
  );
}

export default ModalExample;
