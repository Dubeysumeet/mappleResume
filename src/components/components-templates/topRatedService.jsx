import React from 'react';
import StarIcon from '@mui/icons-material/Star';

const TopRatedResumeService = () => {
  return (
    <div className="hidden lg:block bg-white p-5 rounded-md shadow-lg">
      <div className="flex justify-center mb-4">
        <img src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg" alt="Google Logo" className="h-8" />
      </div>
      <h3 className="text-lg font-bold text-gray-600 text-center">Canada’s Top Rated Resume Writing Service</h3>
      <div className="flex justify-center items-center my-4">
        <StarIcon className="text-yellow-500 mx-1" />
        <StarIcon className="text-yellow-500 mx-1" />
        <StarIcon className="text-yellow-500 mx-1" />
        <StarIcon className="text-yellow-500 mx-1" />
        <StarIcon className="text-yellow-500 mx-1" />
      </div>
      <div className="text-center text-gray-700 mb-4"><span className='p-3 bg-yellow-300 rounded-md shadow-md'>451 Reviews</span></div>
      <p className="text-center text-sm text-gray-600 mb-4">
        All resume writing services are backed by our industry-first{' '}
        <a href="#" className="text-green-600 hover:underline">
          Triple Promise Guarantee
        </a>{' '}
        to ensure you find interview success.
      </p>
      <div className="flex justify-center">
        <img
          src="https://www.resumetarget.ca/images/top-rated-icons.jpg"
          alt="Top Rated Icons"
          className="img-fluid w-full max-w-xs"
        />
      </div>
    </div>
  );
};

export default TopRatedResumeService;
