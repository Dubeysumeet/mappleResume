import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { User, Briefcase, Star, UserCheck, Users, Award } from "lucide-react"; // Importing Lucide icons

const categories = [
  {
    id: "#",
    title: "Choose a career level",
    subtitle: "(Not sure? Take our quiz!)",
    icon: <Star />, // Icon for Not Sure
  },
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

const UserCategory = () => {
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
    <div className="container mx-auto pt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-1">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`p-4  rounded-xl cursor-pointer hover:border-green-600 hover:text-green-600 ${
              selectedCategory === category.id
                ? "bg-green-100 border-green-600"
                : "bg-white"
            }`}
            onClick={() => handleCategoryClick(category.id)}
          >
            <div className="flex justify-between items-center">
            <div className="">{category.icon}</div>
            <div className="text-center">
            <h4 className="text-sm font-bold">{category.title}</h4>
            <p className="text-xs">{category.subtitle}</p>
            </div>
            
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserCategory;
