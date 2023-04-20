import React, { useState, useContext } from "react";
import AuthContext from "../../auth/AuthContext";
import LoginForm from "./LoginForm";

const Login = ({ username, password }) => {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const { login } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    if (usernameInput === username && passwordInput === password) {
      login();
      setUsernameInput("");
      setPasswordInput("");
    } else {
      alert("Invalid username or password.");
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
