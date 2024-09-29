import React, { useState } from 'react';
import emailjs from '@emailjs/browser';  // Import EmailJS
import { AiFillCheckCircle } from 'react-icons/ai';  // Icon for confirmation animation

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
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {!submitted ? (
          <>
            <h2 className="text-2xl font-bold text-center mb-6">Resume Review Request</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Your Name</label>
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Your Email</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Student/Professional</label>
                <input
                  name="profession"
                  type="text"
                  value={formData.profession}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Message</label>
                <textarea
                  name="resumeDetails"
                  value={formData.resumeDetails}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                  rows="4"
                  required
                />
              </div>
              <button
                type="submit"
                className={`w-full py-2 px-4 rounded-lg text-white font-bold ${
                  loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
                } focus:outline-none`}
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center">
            <AiFillCheckCircle className="text-green-500 text-6xl animate-bounce" />
            <p className="text-xl font-semibold mt-4">Form Submitted!</p>
            <p className="text-gray-500">Our team will contact you within 12 hours.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeReviewForm;
