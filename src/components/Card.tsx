import React from "react";

function Card({ image, username, projects, prototypes }) {
  return (
    <div className="max-w-sm rounded-lg h-64 overflow-hidden flex items-center flex-col justify-between py-2 px-4 shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      <div className="space-y-2">
        <img
          src={image}
          alt="profile"
          className="w-20 h-20 mt-4 rounded-full"
        />
        <p className="text-lg font-bold">{username}</p>
      </div>
      <div className="flex items-center justify-between w-full px-4 gap-2">
        <div className="flex flex-col gap-2">
          <p className="text-lg font-bold space-y-2">Projets</p>
          <p className="text-lg text-center">{projects}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-bold space-y-2">Prototypes</p>
          <p className="text-lg text-center">{prototypes}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
