// src/pages/NotFound.js

import React from 'react';
import { Link } from 'react-router-dom';
import { FaBookOpen, FaExclamationTriangle } from 'react-icons/fa'; // Educational icons

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-5">
      <div className="text-6xl text-red-500 mb-4">
        <FaExclamationTriangle />
      </div>
      <h1 className="text-4xl font-bold mb-2">Oops! Page Not Found.</h1>
      <p className="text-lg text-gray-700 mb-6">
        Looks like you’ve stumbled upon a page that doesn’t exist. 
        It’s a bit like looking for a book that’s never been written!
      </p>
      <div className="text-6xl mb-4">
        <FaBookOpen />
      </div>
      <Link to="/" className="bg-green-500 text-white px-5 py-3 rounded-lg hover:bg-green-600">
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
