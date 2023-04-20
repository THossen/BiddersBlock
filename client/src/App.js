import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/layout/Navbar";
import Body from "./components/layout/Body";
import LandingPage from "./components/pages/LandingPage/LandingPage";
import Auctions from "./components/pages/Auctions/Auctions";
import LoginPage from "./components/pages/Login/LoginPage";
import Register from "./components/pages/Register/RegisterPage";
import Footer from "./components/layout/Footer";
import Contact from "./components/pages/Contact/Contact";
import AboutUs from "./components/pages/About Us/AboutUs";
import AuctionDetailsPage from "./components/pages/Auctions/AuctionDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Body>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Auctions" element={<Auctions />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/auctions/:id" element={<AuctionDetailsPage />} />
        </Routes>
      </Body>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
