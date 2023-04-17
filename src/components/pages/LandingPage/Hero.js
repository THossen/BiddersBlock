import { Link } from "react-router-dom";

const heading = "The Premier Destination for Online Auctions";
const subheading = "Bid on your favorite items from the comfort of your own home";

const Hero = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-violet-800 to-pink-500">
            <img src="/SingleCube.png" style={{ width: "300px", height: "auto", marginBottom: "24px" }} />
            <h1 className="font-bold text-5xl text-white text-center mb-8">{heading}</h1>
            <p className="text-lg text-white text-center mb-12">{subheading}</p>
            <Link 
                to="/Register" 
                className="px-3 py-2 bg-cyan-500 hover:bg-sky-700 rounded-3xl hover:scale-110 duration-200 ease-in-out font-bold text-2xl text-white">
                    Get Started 
            </Link>
        </div>
    )
}

export default Hero
