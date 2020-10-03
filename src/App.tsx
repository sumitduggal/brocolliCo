import React, { useCallback, useState } from "react";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";
import Modal from "./components/Modal";
import { NavBar } from "./components/Nav";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const onRequestClose = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <>
      <div className="flex flex-col h-screen w-screen justify-between">
        <NavBar openModal={openModal} />
        <Main openModal={openModal} />
        <Footer />
      </div>
      <Modal {...{ isModalOpen, onRequestClose }}>
        <div className="bg-white w-full flex-auto">Modal Children</div>
      </Modal>
    </>
  );
}

export default App;
