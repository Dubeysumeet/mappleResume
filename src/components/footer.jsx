import MappleResumeLogo from "./mappleResume";
import { Button } from "./ui/button";
import { Smartphone } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";

const Footer = () => {
  const navigate = useNavigate();
  const handleFreeResumeReview = () => {
    navigate("/free-resume-review");
  };
  return (
    <>
      <div className="footer flex flex-col flex-wrap bg-blue-950 px-5">
        <div className="footer-section-1 flex flex-wrap justify-between pt-24 pb-12 border-b-slate-300 border-gray">
          <MappleResumeLogo />
          <div className="flex flex-row my-7 gap-3">
            <p className="text-lg text-gray-200">Questions?</p>
            <Smartphone className="text-green-600" size={24} />
            <p className="text-2xl text-white">call us</p>
            <a
              href="tel:+1-877-208-6117"
              className="text-white text-2xl hover:underline font-bold"
            >
              {" "}
              1-877-208-6117{" "}
            </a>
          </div>
          <Button
            className="mt-5 w-56 text-lg px-6 bg-green-600 hover:bg-green-700 text-white rounded-md"
            onClick={handleFreeResumeReview}
          >
            Free Resume Review
          </Button>
        </div>
        <hr />
        <div className="footer-section-2 flex flex-wrap justify-between pb-20">
          
            <div className="flex flex-col">
            <div className="text-green-600 text-2xl font-semibold pt-16 pb-10">
              Resume Writing Experts
            </div>
            <div className="flex flex-wrap gap-10">
              <div className="flex flex-col gap-5">
              <NavLink to="/" className="text-gray-400 text-lg leading-5 hover:underline">Home</NavLink>
              <NavLink to="/packages-and-prices" className="text-gray-400 text-lg leading-4 hover:underline">Packages and prices</NavLink>
              <NavLink to="/how-it-works" className="text-gray-400 text-lg leading-4 hover:underline" >How it works</NavLink>
              <NavLink to="/why-choose-us" className="text-gray-400 text-lg leading-4 hover:underline">Why choose us</NavLink>
              <NavLink to="/take-the-career-quiz" className="text-gray-400 text-lg leading-4 hover:underline" >Take the Career Quiz</NavLink>
              <NavLink to="/contact" className="text-gray-400 text-lg leading-4 hover:underline">Contact</NavLink>

              </div>

              <div className="flex flex-col gap-5">
              <NavLink to="/" className="text-gray-400 text-lg leading-4 hover:underline">Home</NavLink>
              <NavLink to="/packages-and-prices" className="text-gray-400 text-lg leading-4 hover:underline">Packages and prices</NavLink>
              <NavLink to="/how-it-works" className="text-gray-400 text-lg leading-4 hover:underline" >How it works</NavLink>
              <NavLink to="/why-choose-us" className="text-gray-400 text-lg leading-4 hover:underline">Why choose us</NavLink>
              <NavLink to="/take-the-career-quiz" className="text-gray-400 text-lg leading-4 hover:underline" >Take the Career Quiz</NavLink>
              <NavLink to="/contact" className="text-gray-400 text-lg leading-4 hover:underline">Contact</NavLink>

              </div>

              <div className="flex flex-col gap-5">
              <NavLink to="/" className="text-gray-400 text-lg leading-4 hover:underline">Home</NavLink>
              <NavLink to="/packages-and-prices" className="text-gray-400 text-lg leading-4 hover:underline">Packages and prices</NavLink>
              <NavLink to="/how-it-works" className="text-gray-400 text-lg leading-4 hover:underline" >How it works</NavLink>
              <NavLink to="/why-choose-us" className="text-gray-400 text-lg leading-4 hover:underline">Why choose us</NavLink>
              <NavLink to="/take-the-career-quiz" className="text-gray-400 text-lg leading-4 hover:underline" >Take the Career Quiz</NavLink>
              <NavLink to="/contact" className="text-gray-400 text-lg leading-4 hover:underline">Contact</NavLink>

              </div>
              <div className="flex flex-col gap-5">
              <NavLink to="/" className="text-gray-400 text-lg leading-4 hover:underline">Home</NavLink>
              <NavLink to="/packages-and-prices" className="text-gray-400 text-lg leading-4 hover:underline">Packages and prices</NavLink>
              <NavLink to="/how-it-works" className="text-gray-400 text-lg leading-4 hover:underline" >How it works</NavLink>
              <NavLink to="/why-choose-us" className="text-gray-400 text-lg leading-4 hover:underline">Why choose us</NavLink>
              <NavLink to="/take-the-career-quiz" className="text-gray-400 text-lg leading-4 hover:underline" >Take the Career Quiz</NavLink>
              <NavLink to="/contact" className="text-gray-400 text-lg leading-4 hover:underline">Contact</NavLink>

              </div>
              <div className="flex flex-col gap-5">
              <NavLink to="/" className="text-gray-400 text-lg leading-4 hover:underline">Home</NavLink>
              <NavLink to="/packages-and-prices" className="text-gray-400 text-lg leading-4 hover:underline">Packages and prices</NavLink>
              <NavLink to="/how-it-works" className="text-gray-400 text-lg leading-4 hover:underline" >How it works</NavLink>
              <NavLink to="/why-choose-us" className="text-gray-400 text-lg leading-4 hover:underline">Why choose us</NavLink>
              <NavLink to="/take-the-career-quiz" className="text-gray-400 text-lg leading-4 hover:underline" >Take the Career Quiz</NavLink>
              <NavLink to="/contact" className="text-gray-400 text-lg leading-4 hover:underline">Contact</NavLink>

              </div>

            </div>
            </div>
           
            <div className="social-icons flex flex-col">
              <div className="text-green-600 text-2xl font-semibold pt-16 pb-10">
                Follow us
              </div>
              <div className="flex flex-row gap-4">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon className="text-gray-400 text-lg leading-4 hover:text-green-700" />
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <YouTubeIcon className="text-gray-400 text-lg leading-4 hover:text-green-700" />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon className="text-gray-400 text-lg leading-4 hover:text-green-700" />
                </a>
                <a
                  href="https://www.X.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <XIcon className="text-gray-400 text-lg leading-4 hover:text-green-700" />
                </a>
              </div>
            </div>
          
        </div>
        <hr />
        <div className="font-bold text-white py-14 text-center">
          Powered by Resume Target Inc. © 2002-2024 Professional Resume Writing
          Services
        </div>
      </div>
    </>
  );
};

export default Footer;