import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <div>
      ini homepage
      <Link to="/login">
        <button>login</button>
      </Link>
    </div>
  );
};

export default Homepage;
