// LoginSuccess.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const LoginSuccess = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-6 text-green-500">Login Successful</h2>
        <Link
          to="/"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default LoginSuccess;
