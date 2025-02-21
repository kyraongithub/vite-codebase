import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("token", "abcd");
    navigate("/dashboard");
  };

  return (
    <div>
      <button onClick={() => handleLogin()}>login sekarang</button>
    </div>
  );
};

export default Login;
