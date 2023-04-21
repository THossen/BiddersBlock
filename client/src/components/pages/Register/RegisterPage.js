import Register from "./Register";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="bg-gradient-to-b from-violet-400 to-white min-h-screen">
      <div className="max-w-md mx-auto pt-20">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Create your account
        </h2>
        <p className="mt-2 text-center text-md text-gray-600">
          Already have an account?{" "}
          <Link
            to="/LoginPage"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Sign in
          </Link>
        </p>
        <div className="mt-8">
          <Register />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;