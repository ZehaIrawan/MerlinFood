import React from 'react';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h1>Your favourite food delivered hot & fresh</h1>
        <p>
          Satisfy your cravings by getting the food you love from your favourite
          restaurants delivered to you fast. MIFOOD is now available in selected
          areas of London. We are expanding quickly, so stay tuned for more
          areas soon!
        </p>
        <button>Explore All</button>
      </div>
      <div className="hero-right">
        <img
          className="noodle"
          src="https://images.unsplash.com/photo-1552611052-33e04de081de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
