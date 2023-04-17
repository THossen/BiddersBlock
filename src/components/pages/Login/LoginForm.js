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
      <div className="w-96 h-96 bg-cyan-500 rounded-t-lg py-6 px-8 text-white text-center text-3xl font-semibold flex flex-col justify-center">
        <div>Welcome</div>
      </div>
      <div className="w-96 bg-white rounded-lg py-8 px-8 shadow-lg">
        <form onSubmit={handleLogin} className="flex flex-col">
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-semibold mb-2"
            >
              Username:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border-2 border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-2"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-2 border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-full self-center mt-4"
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
