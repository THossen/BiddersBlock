import React, { useState } from "react";
import RegistrationForm from "./RegistrationForm";

const Register = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegistration = async (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    try {
      // Make API call to register user with the provided data
      // Replace this with your actual API call to register a user
      const response = await fetch("http://localhost:3001/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname,
          lastname,
          address,
          email,
          username,
          password,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        setErrorMessage(error.message);
      } else {
        // Redirect to login page upon successful registration
        window.location.href = "/LoginPage";
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="bg-white py-8 px-6 shadow rounded-lg">
      <RegistrationForm
        firstname={firstname}
        lastname={lastname}
        address={address}
        email={email}
        username={username}
        password={password}
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

