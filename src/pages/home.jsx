import HomeTestimonialCarousel from "@/components/components-templates/hometestimonial";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import teamImage from '../assets/team.jpg';
import HomeSection1 from "@/components/components-templates/homesection1";
import TopRatedResumeService from "@/components/components-templates/topRatedService";
import HomeCategory from "@/components/components-templates/HomeCategory";
import ResumeReviewForm from "./emailForm";

const Home = () => {

  const navigate = useNavigate();
  const handleFreeResumeReview = () => {
    navigate("/our-pricing");
  };

    return (
      <div className="">

<div className="w-full banner md:px-2 md:items-center py-16 flex flex-col-reverse lg:flex-row items-start justify-between space-y-10 lg:space-y-0">
  {/* Left Side - Text Section */}
  <div className="flex flex-col text-center lg:text-left mb-8 lg:mb-0 w-full lg:w-1/2">
    <h1 className="text-xl sm:text-3xl md:text-5xl font-bold text-black typing-animation mb-3">Get the resume that gets you hired.</h1>
    <Button
      className="mt-5 primary-btn text-lg px-6 py-3 transition duration-300 ease-in-out transform hover:scale-105"
      onClick={handleFreeResumeReview}
    >
      Check Our Prices
    </Button>
  </div>

  {/* Right Side - Image Section */}
  <div className="relative w-full lg:w-1/2">
    <img
      src={teamImage}
      alt="A professional team representing career success"
      className="w-full h-auto rounded-lg transition-transform transform hover:shadow-lg hover:shadow-black/50 duration-500 ease-in-out"
    />
  </div>
</div>

         {/* Zig-Zag Category Section */}
       <div className="py-12 secondary-bg">
        <div className="container mx-auto text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Choose Your Level</h2>
          <p className="text-gray-800">
            Whether you're a student just starting out or a seasoned professional,
            we have services tailored for your career stage.
          </p>
        </div>
        <HomeCategory />
      </div>

<div className="my-10">
<div className="px-5 py-12">
<div className="flex flex-col md:flex-row justify-between">
  {/* Left side with the text content */}
  <div className="flex flex-col w-full md:w-1/2 md:pr-10">
    <h1 className="text-3xl md:text-5xl text-black font-bold">Our Triple Promise Guarantee</h1>
    <p className="py-6 text-md md:text-xl font-bold text-gray-700">
      We are offering a <span className="text-green-700">Free Resume Review</span> to help you land your next dream job. All resume writing services are backed by our industry-first Triple Promise Guarantee:
    </p>
    <ul className="list-disc pl-5 text-gray-600 text-md md:text-lg">
      <li className="py-1">Professional resume writers with industry-specific expertise.</li>
      <li className="py-1">A personalized resume that highlights your strengths and achievements.</li>
      <li className="py-1">100% satisfaction guaranteed — we work with you until you’re happy.</li>
    </ul>
    <Button
      className="mt-5 text-lg primary-btn"
      onClick={handleFreeResumeReview}
    >
       Get Your Free Review
    </Button>
  </div>

  {/* Right side with the form */}
  <div className="w-full md:w-1/2 mt-10 md:mt-0">
    <ResumeReviewForm />
  </div>
</div>

        </div>
</div>
        <div className="my-10">
          <HomeSection1/>
        </div>

        <div className="flex my-10 flex-col-reverse md:flex-row">
        <div className="flex flex-col w-full md:w-1/3 px-5 mt-5 md:mt-0 gap-8">
    <h2 className="text-3xl md:text-4xl font-bold">
      Proven professional <span className="text-green-700">resume writing</span> backed by a caring team and fanatical support
    </h2>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, quae?
    </p>
    <a href="/about-us">
      <Button className="primary-btn">Learn More about us</Button>
    </a>
  </div>
  <div className="w-full md:w-2/3 px-5">
    <img src={teamImage} alt="" />
  </div>
</div>


<div className="bg-custom-gradient my-12 py-12">
  <h2 className="text-center text-3xl md:text-4xl font-bold">Our Review</h2>
  <HomeTestimonialCarousel/>
</div>


        
      </div>
    );
  };
  
  export default Home;
  