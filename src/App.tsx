import React, { useCallback, useState } from "react";

import { Footer } from "./components/Footer";
import { Main } from "./components/Main";
import { NavBar } from "./components/Nav";
import { RequestInviteModal } from "./components/RequestInvite";

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
      {isModalOpen && (
        <RequestInviteModal {...{ isModalOpen, onRequestClose }} />
      )}
    </>
  );
}

export default App;
