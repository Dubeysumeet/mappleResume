import MappleResumeLogo from "./mappleResume";
import { Button } from "./ui/button";
import { Smartphone } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import logo from '../assets/logo.png';

const Footer = () => {
  const navigate = useNavigate();
  const handleFreeResumeReview = () => {
    navigate("/free-resume-review");
  };

  return (
    <div className="footer flex flex-col px-5"> {/* Updated gradient background */}
      <div className="footer-section-2 flex flex-wrap justify-between py-10 border-b border-gray-700">
        <div className="flex flex-col">
          <h2 className="text-green-800 text-2xl font-semibold pb-6">Resume Writing Experts</h2>
          <nav className="flex flex-col gap-5">
            <NavLink to="/" className="text-white text-base leading-5 hover:underline">Home</NavLink>
            <NavLink to="/our-pricing" className="text-white text-base leading-4 hover:underline">Our Pricing</NavLink>
            <NavLink to="/about-us" className="text-white text-base leading-4 hover:underline">Why Choose Us</NavLink>
            <NavLink to="/contact-us" className="text-white text-base leading-4 hover:underline">Contact</NavLink>
            <NavLink to="/entry-level" className="text-white text-base leading-4 hover:underline">Choose a Career Level</NavLink>
          </nav>
        </div>
        <div className="footer-section-1 flex flex-col">
          <a href="/">
            <img className=" mt-4 w-52" src={logo} alt="Mapple Resume logo" />
          </a>
        </div>
        <div className="social-icons flex flex-col">
          <h2 className="text-green-800 text-2xl font-semibold pb-6">Follow Us</h2>
          <div className="flex gap-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FacebookIcon className="text-gray-400 text-lg hover:text-green-700" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <YouTubeIcon className="text-gray-400 text-lg hover:text-green-700" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon className="text-gray-400 text-lg hover:text-green-700" />
            </a>
            <a href="https://www.X.com" target="_blank" rel="noopener noreferrer">
              <XIcon className="text-gray-400 text-lg hover:text-green-700" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center font-bold text-white text-sm py-4 border-t border-gray-700">
        Powered by Resume Target Inc. © 2002-2024 Professional Resume Writing Services
      </div>
    </div>
  );
};

export default Footer;
