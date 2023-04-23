import React, { useState, useContext } from "react";
import AuthContext from "../../auth/AuthContext";
import LoginForm from "./LoginForm";

const Login = () => {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const { login } = useContext(AuthContext);

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
      login();
      setUsernameInput("");
      setPasswordInput("");
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

