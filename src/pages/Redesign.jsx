import React from 'react';
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import teamImage from '../assets/team.jpg';
import { useNavigate } from "react-router-dom";
import HomeCategory1 from "@/components/components-templates/HomeCategory1";
import Footer from "@/components/footer";
import ResumeReviewForm from "./emailForm";
import '../App.css'
const Redesign = () => {
  const navigate = useNavigate();

  const handleFreeResumeReview = () => {
    navigate("/our-pricing");
  };

  return (
    <div>
        <div  className="bg-custom-gradient ">
        <Header />
      <div
        className="w-full px-4 py-16 flex items-center justify-between mt-1"
      >
        {/* Left Side - Text Section */}
        <div className="flex flex-col">
        <h1 className="text-5xl font-bold text-black typing-animation mb-6">
        Get the resume that gets you hired
                </h1>
          <Button
            className="mt-5 w-56 text-lg px-6 bg-green-600 hover:bg-green-700 text-black rounded-md"
            onClick={handleFreeResumeReview}
          >
            Check Our Prices
          </Button>
        </div>

        {/* Right Side - Image Section */}
        <div className="relative w-1/2">
          <img
            src={teamImage}
            alt="Team"
            className="w-full h-full transition-transform transform hover:shadow-lg hover:shadow-black/50 duration-500 ease-in-out"
          />
        </div>
      </div>
        </div>
       {/* Zig-Zag Category Section */}
       <div className="py-16 bg-white">
        <div className="container mx-auto text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Choose Your Level</h2>
          <p className="text-gray-600">
            Whether you're a student just starting out or a seasoned professional,
            we have services tailored for your career stage.
          </p>
        </div>
        <HomeCategory1 />
      </div>
      
      <div className="my-10">
      <div className="px-5 py-28 bg-gray-50">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left side with the text content */}
          <div className="flex justify-center items-center min-h-screen bg-gradient-to-bl from-[#005f73] via-[#0a9396] to-[#94d2bd]">
            {/* Card Container */}
            <div className=" rounded-lg shadow-lg p-8 w-full max-w-4xl flex flex-col md:flex-row justify-between">
              {/* Left Side: Title, Description, Bullet Points, and Button */}
              <div className="flex flex-col w-full md:pr-10">
                {/* Typing animation for title */}
                <h2 className="text-5xl font-bold text-black typing-animation mb-6">
                  Our Triple Promise Guarantee
                </h2>
                
                {/* Description */}
                <p className="py-6 text-xl font-semibold text-gray-600">
                  We are offering a <span className="text-green-600 font-bold">Free Resume Review</span> to help you land your next dream job. All resume writing services are backed by our industry-first Triple Promise Guarantee:
                </p>

                {/* Bullet points with hover animations */}
                <ul className="list-disc pl-5 text-gray-600 text-lg space-y-2">
                  <li className="hover:text-[#051414] transition-all duration-300">
                    Professional resume writers with industry-specific expertise.
                  </li>
                  <li className="hover:text-[#051414] transition-all duration-300">
                    A personalized resume that highlights your strengths and achievements.
                  </li>
                  <li className="hover:text-[#051414] transition-all duration-300">
                    100% satisfaction guaranteed — we work with you until you’re happy.
                  </li>
                </ul>

                {/* Button with hover effect */}
                <button
                  className="mt-6 w-56 text-lg px-6 bg-green-600 hover:bg-green-700 text-white rounded-md transform transition-all hover:scale-105 duration-300 ease-in-out"
                  onClick={() => alert('Free Resume Review requested!')}
                >
                  Get Your Free Review
                </button>
              </div>
            </div>
          </div>

          {/* Right side with the form */}
          <div className="w-full md:w-1/2 mt-10 md:mt-0">
            <div className="transform transition-transform duration-300 ease-in-out hover:scale-105">
              <ResumeReviewForm />
            </div>
          </div>
        </div>
      </div>
    </div>
      <Footer/>
    </div>
  );
};

export default Redesign;
