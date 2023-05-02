import { useState } from "react";

const LoginForm = ({
  username,
  password,
  setUsername,
  setPassword,
  handleLogin,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form
      onSubmit={handleLogin}
      className="mt-8 space-y-6 bg-white rounded-lg shadow-md px-8 py-10"
    >
      <div>
        <label htmlFor="username" className="sr-only">
          Username
        </label>
        <input
          id="username"
          name="username"
          type="text"
          autoComplete="username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border-gray-400 rounded-md shadow-sm w-full p-2 text-lg"
          placeholder="Username"
        />
      </div>
      <div>
        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <div className="relative">
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-gray-400 rounded-md shadow-sm w-full p-2 mt-4 text-lg pr-10"
            placeholder="Password"
          />
          <button
            type="button"
            onClick={handlePasswordToggle}
            className="absolute inset-y-5 right-0 px-2 py-2 text-sm font-medium text-gray-700"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between mt-8">
        <label htmlFor="remember_me" className="flex items-center">
          <input
            id="remember_me"
            name="remember_me"
            type="checkbox"
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <span className="ml-2 text-sm text-gray-900">Remember me</span>
        </label>
        <div className="text-sm">
          <a
            href="#"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Forgot your password?
          </a>
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="bg-cyan-500 hover:bg-sky-700 text-white py-2 px-4 rounded-md mt-8 w-full"
        >
          Log In
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
