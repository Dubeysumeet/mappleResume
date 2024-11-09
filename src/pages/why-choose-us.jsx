import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";

const WhyChooseUs = () => {
  const cardsData = [
    {
      title: "Personalized Feedback",
      content: "Our experts review your resume, providing advice tailored to Canadian job markets.",
      buttonText: "Learn More",
      buttonLink: "#"
    },
    {
      title: "Career-Focused Approach",
      content: "We align your resume with in-demand skills and formats preferred by Canadian employers.",
      buttonText: "See Our Services",
      buttonLink: "#"
    },
    {
      title: "Free Access for 2 Months",
      content: "Try our resume review service at no cost during the pilot phase.",
      buttonText: "Sign Up Free",
      buttonLink: "#"
    },
    {
      title: "Pilot Program Benefits",
      content: "Your feedback helps shape Maple Resume into Canada’s go-to resume resource.",
      buttonText: "Give Feedback",
      buttonLink: "#"
    }
  ];

  return (
    <>
      <div className="text-center py-24 px-16 mt-1 secondary-bg">
        <h2 className="text-5xl text-black font-bold mb-8">Welcome to Maple Resume</h2>
        <p className="text-lg text-gray-700 font-medium mb-4">
          Maple Resume is your dedicated Canadian partner in career advancement. During our pilot project, we’re offering free resume review services for the first two months. Join us early to access personalized career resources tailored to Canadian job markets.
        </p>
        <p className="text-md text-gray-600 font-medium">
          Your feedback is essential as we build Maple Resume into the go-to resource for Canadian job seekers.
        </p>
      </div>

      <div className="flex p-5 mt-20">
        <div className="w-4/6 h-3/4 mx-auto">
          <AnimatePresence>
            {cardsData.map((card, index) => {
              const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

              return (
                <motion.div
                  key={index}
                  ref={ref}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="text-start flex flex-col gap-8 my-10 tag-card rounded-xl px-20 py-8"
                >
                  <h1 className="text-3xl text-black font-bold">{card.title}</h1>
                  <h5 className="text-md text-gray-700 font-medium">{card.content}</h5>
                  <a href={card.buttonLink} className="text-md">
                    <span className="tag-card rounded-2xl text-white px-10 py-3">{card.buttonText}</span>
                  </a>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
