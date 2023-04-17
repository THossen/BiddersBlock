import React from "react";

const LoginForm = ({
  username,
  password,
  setUsername,
  setPassword,
  handleLogin,
}) => {
  return (
    <div className="flex flex-col justify-center items-center mt-16">
      <div className="w-96 h-96 bg-gradient-to-b from-cyan-500 to-cyan-600 rounded-t-3xl py-6 px-8 text-white text-center text-3xl font-semibold flex flex-col justify-center">
        <h1>Welcome</h1>
        <p className="text-gray-50 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
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
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-2 border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500"
              required
            />
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
        <button className="text-blue-500 font-semibold hover:underline">
          Create Account
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
