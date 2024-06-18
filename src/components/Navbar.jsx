import React from 'react';

const Navbar = ({ userName }) => {
  return (
    <nav className="bg-[#1a2434] p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">MCQ Game</div>
        {userName && (
          <div className="text-white">
            Welcome, <span className="font-semibold">{userName}</span>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
