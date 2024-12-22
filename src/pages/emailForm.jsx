import React, { useState } from 'react';
import emailjs from '@emailjs/browser'; 
import { AiFillCheckCircle } from 'react-icons/ai';  
import { FiLoader } from 'react-icons/fi'; 

const ResumeReviewForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    profession: '',
    resumeDetails: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const adminEmailContent = {
    ...formData,
    subject: `Lead - ${formData.name} (Resume Review Request)`,
    message: `
      Hello Admin,

      You have received a new resume review request from ${formData.name}. Here are the details:

      - **Name**: ${formData.name}
      - **Email**: ${formData.email}
      - **Profession**: ${formData.profession}
      - **Resume Details**: ${formData.resumeDetails}

      Best regards,
      Lead Generation Team
    `,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_eyxism2', 
        'template_29jud3l', 
        adminEmailContent,
        '-X-Fcly7TbDGmkfXD' 
      )
      .then(
        (response) => {
          console.log('Main email sent SUCCESS!', response.status, response.text);
        },
        (error) => {
          console.log('Main email send FAILED...', error);
        }
      );

    // Send auto-reply to the user
    emailjs
      .send(
        'service_eyxism2', 
        'template_aivqsh6',
        formData,
        '-X-Fcly7TbDGmkfXD'
      )
      .then(
        (response) => {
          console.log('Auto-reply email sent SUCCESS!', response.status, response.text);
          setSubmitted(true);
        },
        (error) => {
          console.log('Auto-reply email send FAILED...', error);
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="flex justify-center items-center">
      <div className=" emailform p-8 shadow-2xl md:w-3/5 transition-transform transform hover:scale-105 duration-300">
        {!submitted ? (
          <>
            <h2 className="text-2xl font-extrabold text-center mb-6 secondary-color animate-fadeIn">Resume Review Request</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="mb-4">
                <label className="block label-sty">Your Name</label>
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border input-box transition-all duration-300"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block label-sty">Your Email</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border input-box transition-all duration-300"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block label-sty">Student/Professional</label>
                <input
                  name="profession"
                  type="text"
                  value={formData.profession}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border input-box transition-all duration-300"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block label-sty">Message</label>
                <textarea
                  name="resumeDetails"
                  value={formData.resumeDetails}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border input-box transition-all duration-300"
                  rows="4"
                  required
                />
              </div>
              <button
                type="submit"
                className={`py-2 px-4 mx-auto rounded-xl text-white font-bold flex items-center justify-center ${
                  loading ? 'bg-gray-400 cursor-not-allowed' : 'secondary-btn hover:bg-blue-600'
                } transition-transform transform hover:scale-105 focus:outline-none`}
                disabled={loading}
              >
                {loading ? <FiLoader className="animate-spin mr-2" /> : null}
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center animate-fadeIn">
            <AiFillCheckCircle className="text-green-500 text-6xl animate-bounce" />
            <p className="text-xl font-semibold mt-4 text-blue-600">Form Submitted!</p>
            <p className="text-gray-500">Our team will contact you within 12 hours.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeReviewForm;
