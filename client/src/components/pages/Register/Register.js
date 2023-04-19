/* old code
const Register = () => {
    return (
        <div className="font-bold text-5xl text-center py-8">
            User Registration Page
        </div>
    )
}

export default Register
*/

import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Register = () => {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastname] = useState('');
    const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      // Perform email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setErrorMessage('Please enter a valid email address.');
        return;
      }

      // Perform password strength check
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{}|;':"\\|,.<>/?])(?=.*[^\s])[\s\S]{8,}$/;
      if (!passwordRegex.test(password)) {
        setErrorMessage(
          'Password must be at least 8 characters long and contain at least one uppercase letter, one number, and one special character.'
        );
        return;
      }

      // Perform password verification check
      if (!(password === confirmpassword)) {
        setErrorMessage(
          'Passwords are not the same. Please enter the same password for both parts.'
        );
        return;
      }

      // Make API call to register user data to SQL database
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstname, lastname, address, email, username, password}),
      });

      if (response.ok) {
        // Redirect to login page or perform other actions for successful registration
        window.location.href = '/Register';
      } else {
        // Show error message for failed registration attempt
        setErrorMessage('Failed to register. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      // Show error message for API call failure
      setErrorMessage('Failed to register. Please try again later.');
    }
  };
  
  return (
    <div className="flex flex-col justify-center items-center mt-16 mb-16">
      <div className="w-96 h-96 bg-gradient-to-b from-cyan-500 to-cyan-600 rounded-t-3xl py-6 px-8 text-white text-center text-3xl font-semibold flex flex-col justify-center">
        <h1>Welcome to BiddersBlock</h1>
        <p className="text-gray-50 text-lg">
          Please register with your user credientials below
        </p>
      </div>
      <div className="w-96 bg-white rounded-b-3xl py-8 px-8 shadow-lg text-center">
        <form onSubmit={handleRegistration} className="flex flex-col">
        <div className="mb-4">
            <label
              htmlFor="firstname"
              className="block text-gray-700 font-semibold mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstname"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full border-2 border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="lastname"
              className="block text-gray-700 font-semibold mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className="w-full border-2 border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-gray-700 font-semibold mb-2"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full border-2 border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500"
              required
            />
          </div>
        <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-2 border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500"
              required
            />
          </div>
        <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-semibold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border-2 border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-2 border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirmpassword"
              className="block text-gray-700 font-semibold mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="password"
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border-2 border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500"
              required
            />
          </div>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-16 rounded-full self-center mt-4">
            Sign in
          </button>
        </form>
      </div>
      </div>
    );
};

export default Register;
