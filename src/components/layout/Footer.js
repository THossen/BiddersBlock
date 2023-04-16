import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="bg-violet-950 text-white text-xl font-bold justify-between items-center px-4 py-6 space-y-2">
            <div className="flex justify-between w-full">
                <Link to='/AboutUs' className="hover:text-cyan-500">
                    About us
                </Link>
                <Link to='/Contact' className="hover:text-cyan-500">
                    Contact us
                </Link>
            </div>
            <div className="mt-4 text-sm text-center">
                &copy; 2023 BiddersBlock. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer
