import React from 'react';
import cat from "../assets/Cat 2.jpg"

const SadPage = () => {
  return (
    <div className="relative h-screen bg-gray-100 flex flex-col items-center justify-center">
      <img src={cat} alt="Sad cat" className="w-1/5 h-2/3" />
      <p className="text-3xl text-gray-700 mt-5 font-bold">Okay... 😿</p>
    </div>
  );
};

export default SadPage;
