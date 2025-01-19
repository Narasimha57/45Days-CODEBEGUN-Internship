import React from 'react';
import { Link } from 'react-router';

const NavigationButtons = () => {
  return (

    <div className="flex  gap-10 p-6 align-middle justify-center min-h-screen items-center flex-col">
      <Link to={"/createuser"}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 shadow-md"
        onClick={() => console.log('Create User clicked')}
      >
        Create User
      </Link>
      
      <Link to={"/showdropdown"}
        className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300 shadow-md"
        onClick={() => console.log('Create Quiz clicked')}
      >
        Create Quiz
      </Link>
      
      <Link to={"/navoptions"}
        className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors duration-300 shadow-md"
        onClick={() => console.log('Show Users clicked')}
      >
        Show Users
      </Link>
    </div>
  );
};

export default NavigationButtons;