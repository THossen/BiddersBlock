import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <header className="bg-blue-300 flex justify-between items-center px-4 py-4">
            <nav className="space-x-4 md.block">
                <Link to="/"> Welcome </Link>
                <Link to="/Home" className="ml-auto"> Home </Link>  
            </nav>
        </header>
    )
}

export default NavBar