import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = ({
  username,
  password,
  setUsername,
  setPassword,
  handleLogin,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-16">
      <div className="w-96 h-96 bg-gradient-to-b from-cyan-500 to-cyan-600 rounded-t-3xl py-6 px-8 text-white text-center text-3xl font-semibold flex flex-col justify-center">
        <h1>Welcome to BiddersBlock</h1>
        <p className="text-gray-50 text-lg">
          Please login with your user credientials below
        </p>
      </div>
      <div className="w-96 bg-white rounded-b-3xl py-8 px-8 shadow-lg text-center">
        <form onSubmit={handleLogin} className="flex flex-col">
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
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-2 border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500"
                required
              />
              <button
                type="button"
                className="mt-1 absolute right-2 top-2 text-gray-500 focus:outline-none mb-1"
                onClick={toggleShowPassword}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-16 rounded-full self-center mt-4"
          >
            Sign in
          </button>
        </form>
      </div>
      <div className="mt-4">
        <div className="text-gray-700 text-center">New user?</div>
        <Link
          to="/Register"
          className="text-blue-500 font-semibold hover:underline"
        >
          Create Account
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;