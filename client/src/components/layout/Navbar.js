import { Link } from "react-router-dom";
import useAuth from "../../Providers/useAuth";
import { useNavigate } from "react-router-dom";
import AccountCircle from "@mui/icons-material/AccountCircle";

const NavBar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const linkClasses =
    "inline-block px-6 py-2 bg-cyan-500 hover:bg-sky-700 rounded-3xl hover:scale-110 duration-200 ease-in-out";

  const profileIconClasses =
    "text-white hover:text-cyan-500 duration-200 ease-in-out";

  return (
    <header className="flex justify-between items-center px-4 py-6 font-bold text-2xl text-white bg-violet-950 shadow-lg">
      <div className="flex items-center hover:scale-110 duration-200 ease-in-out hover:text-cyan-500">
        <Link to="/">
          <img
            src="Logo's/SingleCube.png"
            alt="Blue Cube"
            className="w-10 h-auto"
          />
        </Link>
        <Link to="/">Home</Link>
      </div>
      <nav className="space-x-4 md:block">
        <Link
          to="/Auctions"
          className="inline-block ml-auto hover:text-cyan-500 hover:scale-110 duration-200 ease-in-out"
        >
          Auctions
        </Link>
        {!user ? (
          <>
            <Link to="/RegisterPage" className={linkClasses}>
              Register
            </Link>
            <Link to="/LoginPage" className={linkClasses}>
              Login
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/ProfilePage"
              className="inline-block p-2 bg-cyan-500 hover:bg-sky-700 rounded-full hover:scale-110 duration-200 ease-in-out"
            >
              <AccountCircle className={profileIconClasses} fontSize="large" />
            </Link>
            <button onClick={handleLogout} className={linkClasses}>
              Logout
            </button>
          </>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
