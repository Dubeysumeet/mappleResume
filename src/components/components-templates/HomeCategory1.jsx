import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { User, Briefcase, UserCheck, Users, Award } from "lucide-react"; // Importing Lucide icons
import teamImage from '../../assets/student1.jpeg';

const categories = [
  {
    id: "entry-level",
    title: "Student/Entry Service",
    subtitle: "0-2 Years Experience",
    icon: <User />, // Icon for Entry Level
  },
  {
    id: "mid-level",
    title: "Mid-Career Service",
    subtitle: "Seeking Up to $70K",
    icon: <Briefcase />, // Icon for Mid Career
  },
  {
    id: "professional-level",
    title: "Professional Service",
    subtitle: "Earning/Seeking $85K+",
    icon: <UserCheck />, // Icon for Professional Service
  },
  {
    id: "senior-level",
    title: "Senior Pro Service",
    subtitle: "Earning/Seeking $115K+",
    icon: <Users />, // Icon for Senior Pro Service
  },
  {
    id: "executive-level",
    title: "Executive Service",
    subtitle: "Director to C-Level Roles",
    icon: <Award />, // Icon for Executive Service
  },
];

const HomeCategory1 = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine the initial category based on the current path
  const getCategoryFromPath = (path) => {
    const category = categories.find((cat) => `/${cat.id}` === path);
    return category ? category.id : "#not-sure";
  };

  const [selectedCategory, setSelectedCategory] = useState(getCategoryFromPath(location.pathname));

  useEffect(() => {
    setSelectedCategory(getCategoryFromPath(location.pathname));
  }, [location.pathname]);

  const handleCategoryClick = (id) => {
    setSelectedCategory(id);
    navigate(`/${id}`);
  };

  return (
    <div className="container mx-auto pt-10 flex">
      {/* Right Section: Image */}
      <div className="w-1/2 pl-10 flex items-center justify-center">
        <img 
          src={teamImage} // Update the path to your image
          alt="Choose Your Level"
          className="w-3/4 h-auto rounded-lg shadow-lg" // Adjust the classes as needed
        />
      </div>

      {/* Left Section: Category Cards */}
      <div className="w-1/2 flex flex-col">
        <div className="flex flex-col space-y-6">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`border border-black rounded-2xl shadow-md cursor-pointer transition-all duration-300 p-4 ${selectedCategory === category.id ? "bg-green-100 border-green-600" : "bg-white border-gray-300"} ${index % 2 === 0 ? "ml-auto" : "mr-auto"} w-3/5`}
              onClick={() => handleCategoryClick(category.id)}
            >
              <div className="flex justify-between items-center">
                <div className="flex-shrink-0">{category.icon}</div>
                <div className="text-center flex-grow px-2">
                  <h4 className="text-lg font-bold">{category.title}</h4>
                  <p className="text-sm">{category.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeCategory1;
