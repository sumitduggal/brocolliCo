import React from "react";

type NavBarProps = {
  openModal: () => void;
};

export const NavBar: React.FC<NavBarProps> = ({ openModal }) => (
  <div className="sticky top-0 border-b border-solid border-gray-300 bg-white">
    <nav className="container mx-auto sticky top-0 px-5 sm:px-0 h-20 flex items-center justify-between">
      <a href="/">
        <h1 className="text-3xl uppercase font-sansita text-green-900">
          Brocolli & co
        </h1>
      </a>
      <button onClick={openModal} className="btn btn-small">
        Request Invite
      </button>
    </nav>
  </div>
);
