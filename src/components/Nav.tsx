import React from "react";

type NavBarProps = {
  openModal: () => void;
};

export const NavBar: React.FC<NavBarProps> = ({ openModal }) => {
  const handleRequestInviteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    openModal();
  };
  return (
    <div className="border-b border-solid border-gray-300">
      <nav className="container mx-auto px-5 sm:px-0 h-20 flex items-center justify-between">
        <a href="/">
          <h1 className="text-3xl uppercase font-sansita text-green-900">
            Brocolli & co
          </h1>
        </a>
        <button onClick={handleRequestInviteClick} className="btn btn-small">
          Request Invite
        </button>
      </nav>
    </div>
  );
};
