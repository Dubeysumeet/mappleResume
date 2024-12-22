import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from '@emailjs/browser';  // Import EmailJS

const WhyChooseUs = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [feedback, setFeedback] = useState({ fullName: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [isFeedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFeedback({ ...feedback, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const emailParams = {
      subject: `You have received feedback from "${feedback.fullName}."`,
      message: `Feedback Message: "${feedback.message}"`,
    };
    
    emailjs
      .send(
        'service_eyxism2', 
        'template_29jud3l',
        emailParams,
        '-X-Fcly7TbDGmkfXD' 
      )
      .then(() => {
        setFeedbackSubmitted(true); 
        setFeedback({ fullName: "", message: "" });
      })
      .catch(() => {
        alert("Failed to send feedback. Please try again.");
      })
      .finally(() => setLoading(false));
  };

  const cardsData = [
    {
      title: "Personalized Feedback",
      content: "Our experts review your resume, providing advice tailored to Canadian job markets.",
      buttonText: "Learn More",
      buttonLink: "#",
    },
    {
      title: "Career-Focused Approach",
      content: "We align your resume with in-demand skills and formats preferred by Canadian employers.",
      buttonText: "See Our Services",
      buttonLink: "#",
    },
    {
      title: "Free Access for 2 Months",
      content: "Try our resume review service at no cost during the pilot phase.",
      buttonText: "Sign Up Free",
      buttonLink: "#",
    },
    {
      title: "Pilot Program Benefits",
      content: "Your feedback helps shape Maple Resume into Canada’s go-to resume resource.",
      buttonText: "Give Feedback",
      buttonLink: "#",
      action: () => setModalOpen(true),
    },
  ];

  return (
    <>
      {/* Content Section */}
      <div className="text-center py-24 px-16 mt-1 secondary-bg">
        <h2 className="text-3xl md:text-5xl text-black font-bold mb-8">Welcome to Maple Resume</h2>
        <p className="text-md md:text-lg text-gray-700 font-medium mb-4">
          Maple Resume is your dedicated Canadian partner in career advancement. During our pilot project, we’re offering free resume review services for the first two months. Join us early to access personalized career resources tailored to Canadian job markets.
        </p>
        <p className="text-md text-gray-600 font-medium">
          Your feedback is essential as we build Maple Resume into the go-to resource for Canadian job seekers.
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex md:p-5 mt-20">
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
                  className="text-start flex flex-col gap-8 my-10 tag-card rounded-xl px-2 md:px-20 py-8"
                >
                  <h1 className="text-3xl text-black font-bold">{card.title}</h1>
                  <h5 className="text-md text-gray-700 font-medium">{card.content}</h5>
                  <a
                    href={card.buttonLink}
                    onClick={card.action}
                    className="text-md"
                  >
                    <span className="tag-card rounded-2xl text-white px-10 py-3">{card.buttonText}</span>
                  </a>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal Section */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 w-1/3">
            {!isFeedbackSubmitted ? (
              <>
                <h2 className="text-2xl font-bold mb-4">Give Feedback</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={feedback.fullName}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">
                      Feedback Message
                    </label>
                    <textarea
                      name="message"
                      value={feedback.message}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      rows="4"
                      required
                    />
                  </div>
                  <div className="flex justify-end gap-4">
                    <button
                      type="button"
                      onClick={() => setModalOpen(false)}
                      className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-blue-500 text-white px-4 py-2 rounded"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Send Feedback"}
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
                <p className="text-gray-700 mb-6">
                  Your feedback has been successfully submitted.
                </p>
                <button
                  onClick={() => {
                    setModalOpen(false);
                    setFeedbackSubmitted(false);
                  }}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default WhyChooseUs;
