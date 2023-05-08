import React from "react";

const RegistrationForm = ({
  firstname,
  lastname,
  address,
  email,
  username,
  password,
  confirmpassword,
  handleRegistration,
  setFirstName,
  setLastname,
  setAddress,
  setEmail,
  setUsername,
  setPassword,
  setConfirmPassword,
  errorMessage,
}) => {
  return (
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
          htmlFor="confirmPassword"
          className="block text-gray-700 font-semibold mb-2"
        >
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmpassword"
          value={confirmpassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full border-2 border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500"
          required
        />
      </div>
      {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
