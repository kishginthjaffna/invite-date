// FinalPage.jsx

import React from 'react';
import { useLocation } from 'react-router-dom';
import HeartAnimation from './HeartAnimation';
import kid from "../assets/kid.jpg";

const FinalPage = () => {
  const location = useLocation();
  const { date, time, type } = location.state;

  return (
    <div className="relative h-screen bg-pink-light flex flex-col items-center justify-center">
      <h1 className="text-4xl text-pink-dark font-bold">Be ready!</h1>
      <img src={kid} alt="image" className='w-1/5 h-2/5 rounded-3xl mt-10'/>
      <p className="text-2xl mt-5">We're going for a {type} on {date} at {time}. 💕</p>
      <HeartAnimation />
    </div>
  );
};

export default FinalPage;
