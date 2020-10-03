import React from "react";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/Nav";

function App() {
  return (
    <div className="flex flex-col h-screen w-screen justify-between">
      <NavBar />
      <Footer />
    </div>
  );
}

export default App;
