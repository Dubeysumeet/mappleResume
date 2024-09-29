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
  <div
  className="w-full px-4 pt-96 bg-cover bg-center mt-1"
  style={{ backgroundImage: `url(${teamImage})` }}
>
  <div className="flex flex-col bg-white bg-opacity-75 p-6 rounded-md ">
    <h1 className="text-4xl font-bold">Get the resume that gets you hired</h1>
    <Button
      className="mt-5 w-56 text-lg px-6 bg-green-600 hover:bg-green-700 text-white rounded-md"
      onClick={handleFreeResumeReview}
    >
      Check Our Prices
    </Button>
  </div>
  
</div>



        <div className="my-10 bg-blue-950 pt-14 pb-9">
          <h1 className="text-5xl font-bold text-center text-white">Choose your career level to get started:
          </h1>
          <HomeCategory/>

          <h1 className="text-5xl font-bold pb-6 mt-14 px-6 text-white">Professional Resume Writing Services

          </h1>
          <p className="text-md px-6 text-gray-400">Resume Target is the top-rated professional resume writing service in North America, empowering job search and career transition for all industries and career levels for over 15 years. Our professional resume writers are experts at their craft. On completing our resume service, you'll apply with confidence using a professional resume you are truly proud of to open more career opportunities than you thought possible.</p>
        </div>

<div className="my-10">
<div className="px-5 py-28 bg-gray-50">
<div className="flex flex-col md:flex-row justify-between">
  {/* Left side with the text content */}
  <div className="flex flex-col w-full md:w-1/2 md:pr-10">
    <h1 className="text-5xl text-black font-bold">Our Triple Promise Guarantee</h1>
    <p className="py-9 text-xl font-bold text-gray-400">
      We are offering a <span className="text-green-600">Free Resume Review</span> to help you land your next dream job. All resume writing services are backed by our industry-first Triple Promise Guarantee:
    </p>
    <ul className="list-disc pl-5 text-gray-400 text-lg">
      <li className="py-2">Professional resume writers with industry-specific expertise.</li>
      <li className="py-2">A personalized resume that highlights your strengths and achievements.</li>
      <li className="py-2">100% satisfaction guaranteed — we work with you until you’re happy.</li>
    </ul>
    <Button
      className="mt-5 w-56 text-lg px-6 bg-green-600 hover:bg-green-700 text-white rounded-md"
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


        <div className="flex my-10">
          <div className="flex  flex-col w-1/3 px-4 gap-8">
          <h2 className="text-4xl font-bold ">Proven professional <span className="text-green-700">resume writing</span> backed by a
caring team and
fanatical support</h2>
          <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, quae?</p>
          <a href="/about-us">
          <Button>Learn More about us</Button></a>
          </div>
          <div className="w-2/3">
          <img src={teamImage} alt="" />
          </div>
        </div>

<div className="bg-white my-10">
  <h2 className="text-center text-3xl font-bold">Our Review</h2>
  <HomeTestimonialCarousel/>
</div>


        
      </div>
    );
  };
  
  export default Home;
  