import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <header className="flex justify-between items-center px-4 py-6 font-bold text-2xl text-white bg-violet-950 shadow-2xl">
            <Link to="/" className="hover:text-cyan-500 hover:scale-110 duration-200 ease-in-out"> Welcome </Link>
            <nav className="space-x-4 md.block">
                <Link to="/Home" className="inline-block ml-auto hover:text-cyan-600 hover:scale-110 duration-200 ease-in-out"> Home </Link>
                <Link to="/Register" 
                    className="inline-block px-3 py-2 bg-cyan-500 hover:bg-sky-700 rounded-3xl hover:scale-110 duration-200 ease-in-out">
                        Register 
                </Link>
                <Link to="/Login" 
                    className="inline-block px-3 py-2 bg-cyan-500 hover:bg-sky-700 rounded-3xl hover:scale-110 duration-200 ease-in-out">
                        Login 
                </Link>

            </nav>
        </header>
    )
}

export default NavBar