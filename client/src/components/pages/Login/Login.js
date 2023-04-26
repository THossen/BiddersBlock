import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthContext";
import LoginForm from "./LoginForm";
import axios from "axios"

const Login = () => {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/login", {
        userName: usernameInput,
        userPassword: passwordInput,
      });

      if (response.status === 200) {
        const { user } = response.data; // Extract the user object
        login(user);
        setUsernameInput("");
        setPasswordInput("");
        navigate("/ProfilePage");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert("Invalid username or password.");
      } else {
        alert("Failed to login.");
      }
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



