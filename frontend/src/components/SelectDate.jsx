// SelectDate.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeartAnimation from './HeartAnimation';
import axios from 'axios';

const SelectDate = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      // Send both date and time separately
      await axios.post('http://invite-date.vercel.app/api/date-time', { 
        dateTime: `${date} ${time}`, 
        date, // Send the date separately
        time // Send the time separately
      });
      navigate('/select-type', { state: { date, time } });
    } catch (error) {
      console.error('Error submitting date and time:', error);
      alert('There was an error. Please try again.');
    }
  };  

  return (
    <div className="relative h-screen bg-pink-light flex flex-col items-center justify-center">
      <h2 className="text-3xl text-pink-dark mb-6">Select a date and time for our date</h2>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="mb-4 p-2 border border-pink-dark rounded-lg"
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="mb-4 p-2 border border-pink-dark rounded-lg"
      />
      <button
        onClick={handleSubmit}
        className="bg-pink-dark text-white py-3 px-6 rounded-lg hover:bg-pink"
      >
        Next 💕
      </button>
      <HeartAnimation />
    </div>
  );
};

export default SelectDate;
