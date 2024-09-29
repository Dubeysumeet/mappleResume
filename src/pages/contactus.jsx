import React from 'react';
import { Smartphone } from "lucide-react";

const Contact = () => {
  return (
    <>
      {/* Header Section */}
      <div className="text-center py-24 pl-16 pr-16 mt-1 bg-gray-50">
        <h2 className="text-5xl text-black font-bold mb-8">Contact Us</h2>
        <p className="text-md text-gray-500 font-medium">We are here to help you! Get in touch with us for any inquiries.</p>
      </div>

      {/* Contact Details Section */}
      <div className="bg-gray-100 min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-8">  
        <div className="flex flex-col md:flex-row md:space-x-8 mb-8">
          {/* Contact Details Section */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
            <div className="mb-4">
              <h3 className="font-bold text-gray-700">Office Address:</h3>
              <p className="text-gray-600">123 Maple Street, Suite 100<br />City, State, 12345</p>
            </div>
            <div className="mb-4">
              <h3 className="font-bold text-gray-700">Email:</h3>
              <p className="text-gray-600">info@yourcompany.com</p>
            </div>
            <div className="mb-4">
              <h3 className="font-bold text-gray-700">Phone:</h3>
              <p className="text-gray-600">(123) 456-7890</p>
            </div>
          </div>

          {/* Google Maps Section */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Location</h2>
            <div className="w-full h-64">
              <iframe
                title="Google Map"
                className="w-full h-full rounded-lg shadow-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345091476!2d144.9537353153176!3d-37.8162799797513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f2f2a43%3A0x5045675218ceed23!2sYour%20Company%20Name!5e0!3m2!1sen!2sus!4v1631138523849!5m2!1sen!2sus"
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
