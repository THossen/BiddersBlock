import { useState } from "react";
import axios from "axios";
import RegistrationForm from "./RegistrationForm";

const Register = () => {
  const [userFirstname, setFirstName] = useState("");
  const [userLastname, setLastname] = useState("");
  const [userAddress, setAddress] = useState("");
  const [userEmail, setEmail] = useState("");
  const [userName, setUsername] = useState("");
  const [userPassword, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegistration = async (e) => {
    e.preventDefault();

    // Email verification
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userEmail)) {
      setErrorMessage("Please enter a valid email address");
      return;
    }

    // Strong password check
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    if (!passwordRegex.test(userPassword)) {
      setErrorMessage(
        "Please enter a strong password with at least 8 characters, one uppercase letter, one number, and one special character"
      );
      return;
    }

    if (userPassword !== confirmpassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3001/register", {
        userName,
        userEmail,
        userPassword,
        userFirstname,
        userLastname,
        userAddress,
      });

      // Redirect to login page upon successful registration
      window.location.href = "/LoginPage";
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <div className="bg-white py-8 px-6 shadow rounded-lg">
      <RegistrationForm
        userFirstname={userFirstname}
        userLastname={userLastname}
        userAddress={userAddress}
        userEmail={userEmail}
        userName={userName}
        userPassword={userPassword}
        confirmpassword={confirmpassword}
        handleRegistration={handleRegistration}
        setFirstName={setFirstName}
        setLastname={setLastname}
        setAddress={setAddress}
        setEmail={setEmail}
        setUsername={setUsername}
        setPassword={setPassword}
        setConfirmPassword={setConfirmPassword}
        errorMessage={errorMessage}
      />
    </div>
  );
};

export default Register;
