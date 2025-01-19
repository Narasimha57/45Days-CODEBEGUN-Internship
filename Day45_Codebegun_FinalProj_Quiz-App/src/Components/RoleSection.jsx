import React, { useState } from 'react';
import { Link } from 'react-router';

const RoleSection = () => {
  // State to track selected role
  const [selectedRole, setSelectedRole] = useState('User');

  // Common button styles for reuse
  const buttonStyles = (role) => `
    w-full p-4 rounded-lg border-2 text-xl text-center font-semibold
    ${selectedRole === role 
      ? 'border-blue-500 bg-blue-50' 
      : 'border-gray-200 hover:bg-gray-50'
    }
  `;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
      
        <h2 className="text-2xl font-bold text-center mb-6">
          Select Your Role
        </h2>

    
        <div className="flex flex-col gap-6 mb-6">
          <Link 
            to={"/user"}
            className={buttonStyles('User')}
          >
            User
          </Link>

          <Link
          to={"/admin"}
            className={buttonStyles('Admin')}
          >
            Admin
          </Link>
        </div>

        
      </div>
    </div>
  );
};

export default RoleSection;