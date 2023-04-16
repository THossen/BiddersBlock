import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <header className="flex justify-between items-center px-4 py-6 font-bold text-2xl text-white bg-violet-950 shadow-2xl">
            <Link to="/" className="hover:text-blue-500"> Welcome </Link>
            <nav className="space-x-4 md.block">
                <Link to="/Home" className="ml-auto hover:text-blue-400"> Home </Link>
                <Link to="/Register" 
                    className="px-3 py-2 bg-blue-400 rounded-md hover:scale-110 duration-200 ease-in-out hover:text-purple-800">
                        Register 
                </Link>
                <Link to="/Login" 
                    className="px-3 py-2 bg-blue-400 rounded-md hover:scale-110 duration-200 ease-in-out hover:text-purple-800">
                        Login 
                </Link>

            </nav>
        </header>
    )
}

export default NavBar