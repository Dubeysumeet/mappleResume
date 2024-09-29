import React, { useState, useEffect } from 'react';
import ResumeReviewForm from './emailForm';
const PricingPage = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Calculate time left until 31st Dec 2024
  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('2024-12-31T23:59:59');
      const currentDate = new Date();
      const difference = targetDate - currentDate;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    const intervalId = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Our Pricing Plans</h1>
        <p className="text-xl text-gray-500 mt-4">Currently, we are offering a <span className="text-green-600">Free Trial</span> for our resume review services. Take advantage of this limited-time offer!</p>
      </header>

      {/* Trials Banner with Countdown */}
      <section className="flex justify-center mt-6">
        <div className="bg-green-600 p-8 rounded-lg shadow-lg w-full mx-10">
          <h2 className="text-3xl font-bold text-white">Limited-Time Offer: Free Resume Review</h2>
          <p className="text-lg text-white mt-4">
            Don't miss out! Our team of experts is offering free resume reviews as part of our trial service. Improve your chances of landing an interview today!
          </p>

          {/* Countdown Timer */}
          <div className="flex justify-center mt-6 space-x-4 text-white text-lg font-bold">
            <div className="bg-green-700 px-4 py-2 rounded-lg">
              <span>{timeLeft.days}</span> <br /> Days
            </div>
            <div className="bg-green-700 px-4 py-2 rounded-lg">
              <span>{timeLeft.hours}</span> <br /> Hours
            </div>
            <div className="bg-green-700 px-4 py-2 rounded-lg">
              <span>{timeLeft.minutes}</span> <br /> Minutes
            </div>
            <div className="bg-green-700 px-4 py-2 rounded-lg">
              <span>{timeLeft.seconds}</span> <br /> Seconds
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Content */}
      <section className="max-w-7xl mx-auto px-6 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Pricing Information Card */}
          <div className="bg-white p-8 shadow-lg rounded-lg mx-auto w-full max-w-3xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Why Choose Us?</h2>
            <p className="text-gray-600 mb-4">
              As part of our trial program, we are offering professional resume review services <span className="font-bold text-green-600">completely free of charge</span>. During this trial, our experts will:
            </p>
            <ul className="list-disc pl-5 mb-6">
              <li className="text-gray-600 py-2">Provide feedback on the structure and content of your resume.</li>
              <li className="text-gray-600 py-2">Highlight areas for improvement to help you stand out to employers.</li>
              <li className="text-gray-600 py-2">Optimize your resume for Applicant Tracking Systems (ATS).</li>
              <li className="text-gray-600 py-2">Ensure your resume reflects your skills, achievements, and career goals.</li>
            </ul>
            <p className="text-gray-600">
              This free offer is for a limited time only. After the trial period, our services will be available at competitive rates to fit any budget. Lock in your free review today by filling out the form below!
            </p>
          </div>

          {/* Resume Review Form Card */}
          <div className="bg-white p-8 shadow-lg rounded-lg mx-auto w-full max-w-3xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Get Your Free Resume Review</h2>
            <p className="text-gray-600 mb-4">Fill out the form, and our team will review your resume and get back to you within 12 hours.</p>
            <ResumeReviewForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
