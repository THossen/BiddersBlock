const LoginForm = ({
  username,
  password,
  setUsername,
  setPassword,
  handleLogin,
}) => {
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
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-gray-400 rounded-md shadow-sm w-full p-2 mt-4 text-lg"
          placeholder="Password"
        />
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
          className="bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-4 rounded-md mt-8 w-full"
        >
          Log In
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
