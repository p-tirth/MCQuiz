import React from 'react';

const QuizSummaryTable = ({ questions, userAnswers }) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Quiz Summary</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-200">
              <th className="text-left py-2 px-4">Question Number</th>
              <th className="text-left py-2 px-4">Question</th>
              <th className="text-left py-2 px-4">User's Answer</th>
              <th className="text-left py-2 px-4">Correct Answer</th>
            </tr>
          </thead>
          <tbody>
            {questions.map((question, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2 px-4">{question.question}</td>
                <td className="py-2 px-4">{userAnswers[index]}</td>
                <td className="py-2 px-4">{question.answer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QuizSummaryTable;
