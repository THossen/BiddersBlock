import { AuthProvider } from "../../auth/AuthContext";
import Login from "./Login";

const LoginPage = ({ username, password }) => {
  return (
      <div className="bg-gradient-to-b from-cyan-500 to-white min-h-screen flex justify-center items-center">
        <div className="rounded-lg shadow-lg w-full md:max-w-3xl md:flex bg-white">
          <div className="bg-cyan-500 py-8 px-6 md:p-12 md:w-1/2 flex items-center justify-center rounded-l-lg">
            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Welcome back
            </h2>
          </div>
          <div className="w-full md:w-1/2 px-6 py-12 md:p-12">
            <h2 className="text-4xl font-bold text-gray-800 md:text-5xl">
              Login to Your Account
            </h2>
            <Login username={username} password={password} />
          </div>
        </div>
      </div>
  );
};

export default LoginPage;

