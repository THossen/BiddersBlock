import React from "react";

const Contact = () => {
  return (
    <div className="bg-gradient-to-t from-cyan-500 to-white min-h-screen flex justify-center items-center">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center">
            <img
              src="https://d9j5qtehtodpj.cloudfront.net/thumbnail/?image=4686ab4c1f0311edbfd212d8651c2e35&maxWidth=800&fittedCrop=0&version=199629"
              alt="Contact Image"
              className="rounded-full"
            />
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="border rounded-lg px-4 py-2 w-full"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="border rounded-lg px-4 py-2 w-full"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="number" className="block font-bold mb-2">
                  Number
                </label>
                <input
                  type="number"
                  id="number"
                  name="number"
                  className="border rounded-lg px-4 py-2 w-full"
                  placeholder="Enter your number"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block font-bold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="border rounded-lg px-4 py-2 w-full"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <div className="mt-8">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;