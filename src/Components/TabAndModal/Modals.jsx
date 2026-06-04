import { useState } from "react";

const Modals = () => {
  const [open, setOpen] = useState(false);
  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <>
      <h2>Modal Section</h2>
      <div className="modalButton" onClick={() => handleOpenModal()}>
        Open Modal
      </div>
      {open ? (
        <div className="modal">
          Modal is open.
          <button onClick={() => handleCloseModal()}>Close Modal</button>
        </div>
      ) : null}
    </>
  );
};
export default Modals;
