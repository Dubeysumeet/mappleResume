import { useState } from "react";
import { Menu, Phone, X} from "lucide-react";
import {  Smartphone} from "lucide-react"
import { NavLink, useNavigate } from "react-router-dom";
import TopHeader from "./topHeader";
import MappleResumeLogo from "./mappleResume";
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import { Button } from "./ui/button";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const navigate = useNavigate();
  const handleFreeResumeReview = () => {
    navigate("/free-resume-review");
  };

  return (
    <>
      <TopHeader />
      <div className="relative">
        {/* Header Container */}
        <div className="flex justify-between items-center h-12 px-5">
          {/* Logo */}
          <div className="text-black font-bold flex items-center">
         <MappleResumeLogo/>

          {/* <span className="ml-2">MappleResume</span> */}
          </div>
          {/* Menu Icon and Mobile Icon */}
          <div className="flex items-center">
            <div className="bg-green-600 p-2 rounded">
              <a href="tel:+1-877-208-6117">
                <Phone className="text-white" size={24} />
              </a>
            </div>
            <div className="bg-blue-950 p-2 ml-2 rounded">
              <Menu className="text-white cursor-pointer" size={24} onClick={toggleMenu} />
            </div>
          </div>
        </div>

        {/* Full-width Menu */}
        {menuOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-blue-950 flex flex-col z-50 p-10 overflow-y-auto">
            {/* Close Button */}
            <X className="text-white cursor-pointer absolute top-5 right-5" size={24} onClick={toggleMenu} />
            {/* Menu Links */}

            <nav className="flex flex-col items-start space-y-4">
              <NavLink to="/" className="text-white text-xl hover:underline" onClick={toggleMenu}>Home</NavLink>
              <NavLink to="/packages-and-prices" className="text-white text-xl  hover:underline" onClick={toggleMenu}>Packages and prices</NavLink>
              <NavLink to="/how-it-works" className="text-white text-xl hover:underline" onClick={toggleMenu}>How it works</NavLink>
              <NavLink to="/why-choose-us" className="text-white text-xl hover:underline" onClick={toggleMenu}>Why choose us</NavLink>
              <NavLink to="/take-the-career-quiz" className="text-white text-xl hover:underline" onClick={toggleMenu}>Take the Career Quiz</NavLink>
              <NavLink to="/contact" className="text-white text-xl hover:underline" onClick={toggleMenu}>Contact</NavLink>
              <br />
              <NavLink to="/" className="text-gray-400 text-lg leading-4 hover:underline" onClick={toggleMenu}>Home</NavLink>
              <NavLink to="/packages-and-prices" className="text-gray-400 text-lg leading-4 hover:underline" onClick={toggleMenu}>Packages and prices</NavLink>
              <NavLink to="/how-it-works" className="text-gray-400 text-lg leading-4 hover:underline" onClick={toggleMenu}>How it works</NavLink>
              <NavLink to="/why-choose-us" className="text-gray-400 text-lg leading-4 hover:underline" onClick={toggleMenu}>Why choose us</NavLink>
              <NavLink to="/take-the-career-quiz" className="text-gray-400 text-lg leading-4 hover:underline" onClick={toggleMenu}>Take the Career Quiz</NavLink>
              <NavLink to="/contact" className="text-gray-400 text-lg leading-4 hover:underline" onClick={toggleMenu}>Contact</NavLink>


            </nav>
            <Button className="mt-5 w-56 text-lg px-6 bg-green-600 hover:bg-green-700 text-white rounded-md" onClick={handleFreeResumeReview}>
              Free Resume Review
            </Button>
            <div className="flex flex-row my-7 gap-3">
              <p className="text-lg text-white">Questions?</p>
              <Smartphone className="text-green-600" size={24} />
              <a href="tel:+1-877-208-6117" className="text-white text-lg hover:underline font-bold"> 1-877-208-6117 </a>
            </div>

             <div className="flex flex-row gap-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FacebookIcon className="text-gray-400 text-lg leading-4 hover:text-green-700" />
            
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <YouTubeIcon className="text-gray-400 text-lg leading-4 hover:text-green-700" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon className="text-gray-400 text-lg leading-4 hover:text-green-700" />
              </a>
              <a href="https://www.X.com" target="_blank" rel="noopener noreferrer">
                <XIcon className="text-gray-400 text-lg leading-4 hover:text-green-700" />
              </a>
            </div>

            
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
