import React from "react";

type MainProps = {
  openModal: () => void;
};

export const Main: React.FC<MainProps> = ({ openModal }) => {
  const handleRequestInviteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    openModal();
  };
  return (
    <main className="flex flex-col flex-1 justify-center items-center">
      <h2 className="font-bold text-5xl leading-tight max-w-md text-center text-gray-700">
        A better way <br /> to enjoy every day.
      </h2>
      <p className="text-gray-600 my-4 text-md">
        Be the first to know when we launch.
      </p>
      <button onClick={handleRequestInviteClick} className="btn btn-small">
        Request an Invite
      </button>
    </main>
  );
};
