import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InfoIcon from '@mui/icons-material/Info';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

const PricingSection = ({ packages }) => {
 
  return (
    <div className="bg-custom-gradient py-10" id="packages">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`card w-full md:w-auto p-5 m-4 bg-white shadow-lg rounded-lg border relative ${
                pkg.mostPopular ? 'border-green-600 transform scale-105 transition-transform duration-300' : ''
              }`}
            >
              <div className="card-body py-14">
                {pkg.mostPopular && (
                  <span className="block text-center bg-green-600 text-white text-sm font-semibold px-2 py-1 mb-2 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    Most popular
                  </span>
                )}
                <h3 className="card-title text-5xl font-bold text-center mb-2">
                  {pkg.title}
                  <small className="block text-xl mt-3 text-green-600 whitespace-pre-line">
                    {pkg.subtitle}
                  </small>
                </h3>
                <h4 className="card-price text-center text-5xl text-orange-500 font-semibold mt-11 mb-5">
                  {pkg.price}
                </h4>
                <div className="text-center text-sm mt-2">
                  or 4 interest-free payments of {pkg.paymentPlan} with{' '}
                  <img
                    src="https://media.sezzle.com/branding/2.0/Sezzle_Logo_FullColor.svg"
                    alt="Sezzle"
                    className="inline-block h-5 ml-1"
                  />
                </div>
                <a
                  href={pkg.link}
                  className="block text-green-600 border mx-auto border-green-600 text-center text-lg font-semibold mt-4 w-1/2 py-2 rounded hover:bg-green-600 hover:text-white"
                >
                  Order now
                </a>
                <ul className="list-unstyled mt-10 space-y-2">
                  {pkg.details.map((detail, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <CheckCircleIcon className="text-green-500 mr-2" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-footer mt-4">
                <div className="details-label space-y-2 mb-10">
                  <div className="flex justify-center ">
                    <span className='border-0 px-2 py-1 bg-mint-cream'>
                    <InfoIcon className="text-green-600 mr-1" />
                    <a href="https://www.resumetarget.ca/how-it-works.php" className="text-green-600 text-sm font-semibold">
                      How It Works
                    </a>
                    </span>
                   
                  </div>
                  <div className="flex justify-center">
                    <span className='border-0 px-2 py-1 bg-mint-cream'>
                    <InfoIcon className="text-green-600 mr-1" />
                    <a
                      href="https://www.resumetarget.ca/rush-resume-service.php"
                      className="text-green-600 text-sm font-semibold"
                    >
                      24 & 48 Hour Rush Services Available
                    </a>
                    </span>
                   
                  </div>
                </div>
                <div className="call-us mt-4">
                  <div className="flex justify-center items-center text-center">
                    <PhoneIphoneIcon className="text-green-600 mr-1" />
                    <a href="book-appointment.php" className="text-black text-2xl font-bold hover:underline">
                      Schedule a Call Back
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
       
      </div>
    </div>
  );
};

export default PricingSection;
