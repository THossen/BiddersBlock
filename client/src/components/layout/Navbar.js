import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="flex justify-between items-center px-4 py-6 font-bold text-2xl text-white bg-violet-950 shadow-2xl">
      <Link
        to="/"
        className="hover:text-cyan-500 hover:scale-110 duration-200 ease-in-out"
      >
        Home
      </Link>
      <nav className="space-x-4 md.block">
        <Link
          to="/Auctions"
          className="inline-block ml-auto hover:text-cyan-500 hover:scale-110 duration-200 ease-in-out"
        >
          Auctions
        </Link>
        <Link
          to="/RegisterPage"
          className="inline-block px-6 py-2 bg-cyan-500 hover:bg-sky-700 rounded-3xl hover:scale-110 duration-200 ease-in-out"
        >
          Register
        </Link>
        <Link
          to="/LoginPage"
          className="inline-block px-6 py-2 bg-cyan-500 hover:bg-sky-700 rounded-3xl hover:scale-110 duration-200 ease-in-out"
        >
          Login
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;


