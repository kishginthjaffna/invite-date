import React from 'react';

const HeartAnimation = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      {[...Array(10)].map((_, index) => (
        <div
          key={index}
          className="animate-float absolute text-pink-dark text-4xl"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 5 + 3}s`,
          }}
        >
          💗
        </div>
      ))}
    </div>
  );
};

export default HeartAnimation;
