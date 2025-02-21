import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div>
      ini halaman dashboard
      <button onClick={() => handleLogout()}>logout sekarang</button>
    </div>
  );
};

export default Dashboard;
