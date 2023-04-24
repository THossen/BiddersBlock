import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import LoginForm from "./LoginForm";

const Login = () => {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userName: usernameInput,
        userPassword: passwordInput
      })
    });

    if (response.ok) {
      const userData = await response.json();
      login(userData);
      setUsernameInput("");
      setPasswordInput("");
      navigate("/ProfilePage");
    } else if (response.status === 401) {
      alert("Invalid username or password.");
    } else {
      alert("Failed to login.");
    }
  };

  return (
    <div>
      <LoginForm
        username={usernameInput}
        password={passwordInput}
        setUsername={setUsernameInput}
        setPassword={setPasswordInput}
        handleLogin={handleLogin}
      />
    </div>
  );
};

export default Login;



