// SelectType.jsx

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import HeartAnimation from './HeartAnimation';
import axios from 'axios';
import catImg from "../assets/cat 6.jpg";

const types = ['Movie', 'Ice Cream', 'Temple', 'Beach', 'Museum', 'Park', 'Food', 'Mall'];

const SelectType = () => {
  const [type, setType] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { date, time } = location.state;


  const handleSubmit = async () => {
    if (!type) {
      alert('Please select a type of date.');
      return;
    }
  
    try {
      await axios.post('http://localhost:5000/api/date-type', { dateType: type });
      navigate('/final', { state: { date, time, type } });
    } catch (error) {
      console.error('Error submitting type of date:', error);
      alert('There was an error. Please try again.');
    }
  };
  

  return (
    <div className="relative h-screen bg-pink-light flex flex-col items-center justify-center">
      <img src={catImg} alt="image" className='w-1/5 h-2/5 rounded-3xl'/>
      <h2 className="text-3xl text-pink-dark mb-6">Choose the type of date</h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        {types.map((t) => (
          <button
            key={t}
            onClick={() => setType(t)}
            className={`py-3 px-6 rounded-lg ${type === t ? 'bg-pink-dark text-white' : 'bg-gray-300'} hover:bg-pink-dark`}
          >
            {t}
          </button>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        className="bg-pink-dark text-white py-3 px-6 rounded-lg hover:bg-pink"
      >
        Confirm 💖
      </button>
      <HeartAnimation />
    </div>
  );
};

export default SelectType;
