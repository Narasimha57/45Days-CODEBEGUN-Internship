import React, { useState } from 'react';

const Dropdown = () => {
  const [selectedQuestionType, setSelectedQuestionType] = useState('');

  const questionTypes = [
    { label: 'MCQs', value: 'mcqs' },
    { label: 'Fill in the Blanks', value: 'fillInTheBlanks' },
    { label: 'Essay Questions', value: 'essay' },
  ];

  const handleSelectChange = (event) => {
    setSelectedQuestionType(event.target.value);
  };

  const renderQuestions = () => {
    const formClass = "space-y-6 text-sm text-gray-700";
    const questionClass = "font-medium text-gray-900 mb-2";
    const labelClass = "flex items-center gap-2";

    switch (selectedQuestionType) {
      case 'mcqs':
        return (
          <form className={formClass}>
            {/* <div className="mt-4  gap-4 w-full max-w-3xl justify-end">
              <button
                className="w-full sm:w-auto px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 shadow-md"
                onClick={() => console.log('Submit clicked')}
              >
                Logout
              </button>
            </div> */}
            {Array(10).fill(0).map((_, index) => (
              <div key={index}>
                <p className={questionClass}>Which of the following is a correct syntax to display “Hello World” in an alert box using JavaScript?</p>
                <div className="space-y-2">
                  <label className={labelClass}><input type="radio" name={`q${index}`} value="A" /> alertBox('Hello World');</label>
                  <label className={labelClass}><input type="radio" name={`q${index}`} value="B" /> alert('Hello World');</label>
                  <label className={labelClass}><input type="radio" name={`q${index}`} value="C" /> msgAlert('Hello World');</label>
                  <label className={labelClass}><input type="radio" name={`q${index}`} value="D" /> displayAlert('Hello World');</label>
                </div>
              </div>
            ))}
          </form>
        );

      case 'essay':
        return (
          <form className={formClass}>
            {[{
              question: "1. Explain the Component-Based Architecture of ReactJS",
            }, {
              question: "2. Explain the State Management in React",
            }].map((item, index) => (
              <div key={index}>
                <p className={questionClass}>{item.question}</p>
                <textarea
                  placeholder="Write your answer here..."
                  rows={4}
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            ))}
          </form>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6 overflow-y-auto max-h-screen">
        <label htmlFor="question-type" className="block mb-4 text-lg font-semibold text-center">
          Select Question Type:
        </label>
        <select
          id="question-type"
          onChange={handleSelectChange}
          className="w-full px-4 py-2 mb-4 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
        >
          <option value="">--Select an option--</option>
          {questionTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
        <div className="mt-4">{renderQuestions()}</div>
      </div>

      {/* Buttons Section in Row-Wise Layout */}
      <div className="mt-4 mb-5 flex gap-4 w-full max-w-3xl justify-center">
        <button
          className="w-full sm:w-auto px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 shadow-md"
          onClick={() => console.log('Submit clicked')}
        >
          Preview
        </button>
        <button
          className="w-full sm:w-auto px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300 shadow-md"
          onClick={() => console.log('Save clicked')}
        >
          Save
        </button>
        <button
          className="w-full sm:w-auto px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors duration-300 shadow-md"
          onClick={() => console.log('Publish clicked')}
        >
          Publish
        </button>
      </div>
    </div>
  );
};

export default Dropdown;
