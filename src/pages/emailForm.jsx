import React, { useState } from 'react';
import emailjs from '@emailjs/browser';  // Import EmailJS
import { AiFillCheckCircle } from 'react-icons/ai';  // Icon for confirmation animation
import { FiLoader } from 'react-icons/fi';  // Loader icon for loading state

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Send the main email to admin
    emailjs
      .send(
        'service_eyxism2',  // Replace with your EmailJS Service ID
        'template_29jud3l',  // Replace with your EmailJS Admin Template ID
        formData,
        '-X-Fcly7TbDGmkfXD'  // Replace with your EmailJS User ID
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
        'service_eyxism2',  // Replace with your EmailJS Service ID
        'template_aivqsh6',  // Replace with your EmailJS Auto-reply Template ID
        formData,
        '-X-Fcly7TbDGmkfXD'  // Replace with your EmailJS User ID
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
    <div className="flex justify-center items-center h-full py-10">
      <div className=" emailform p-8 shadow-2xl w-3/5 transition-transform transform hover:scale-105 duration-300">
        {!submitted ? (
          <>
            <h2 className="text-2xl font-extrabold text-center mb-6 text-blue-600 animate-fadeIn">Resume Review Request</h2>
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
                className={`py-2 px-4 mx-auto rounded-lg text-white font-bold flex items-center justify-center ${
                  loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
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
