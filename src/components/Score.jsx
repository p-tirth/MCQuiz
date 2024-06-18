import React from 'react';
import Sound from './Sound';
import bell from '../../public/bell.mp3';

const Score = ({ score, totalQuestions, userName }) => {
  Sound(bell);
  return (
    <div className="text-center">
      <div className="text-2xl mb-4">{userName}'s Score</div>
      <div className="text-4xl font-bold">
        {score} / {totalQuestions}
      </div>
    </div>
  );
};

export default Score;
