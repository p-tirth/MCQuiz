import React, { useState } from 'react';
import Sound from './Sound';
import click from "../../public/click.mp3";

const EnterName = ({ onNameSubmit }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onNameSubmit(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Enter your name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-[#1a2434] text-white rounded-md hover:bg-[#475f86]"
        onClick={()=>{Sound(click)}}
      >
        Start Quiz
      </button>
    </form>
  );
};

export default EnterName;
