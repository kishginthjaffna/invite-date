import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeartAnimation from './HeartAnimation';
import cat from "../assets/Cats.jpg";
import axios from 'axios';

const Home = () => {
  const navigate = useNavigate();

  const handleDecision = async (decision) => {
    try {
      // Submit the decision to the backend
      await axios.post('http://invite-date.vercel.app/api/decision', { decision });
      
      // Navigate based on the decision
      if (decision === 'yes') {
        navigate('/select-date');
      } else {
        navigate('/sad');
      }
    } catch (error) {
      console.error(error);
      alert('Error submitting decision. Please try again.');
    }
  }

  return (
    <div className="relative h-screen bg-pink-light flex flex-col items-center justify-center text-center">
      <img src={cat} alt="Cat" className='w-1/5 h-2/5 rounded-3xl '/>
      <h1 className="text-4xl text-pink-dark font-bold mb-10 mt-10">Will you go on a date with me?</h1>
      <div>
        <button
          className="bg-pink-dark text-white py-3 px-6 rounded-lg mx-2 hover:bg-pink"
          onClick={() => handleDecision('yes')} // Call handleDecision with 'yes'
        >
          Yes 💖
        </button>
        <button
          className="bg-gray-500 text-white py-3 px-6 rounded-lg mx-2 hover:bg-gray-700"
          onClick={() => handleDecision('no')} // Call handleDecision with 'no'
        >
          No 💔
        </button>
      </div>
      <HeartAnimation />
    </div>
  );
};

export default Home;
