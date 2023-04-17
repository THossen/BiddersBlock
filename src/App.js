import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/layout/Navbar';
import Body from './components/layout/Body';
import LandingPage from './components/pages/LandingPage/LandingPage';
import Browse from './components/pages/Browse/Browse';
import Login from './components/pages/Login/Login';
import Register from './components/pages/Register/Register';
import Footer from './components/layout/Footer';
import Contact from './components/pages/Contact/Contact';
import AboutUs from './components/pages/About Us/AboutUs';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Body>
        <Routes>
          <Route path='/' element= {<LandingPage />} />
          <Route path='/Browse' element = {<Browse/>} />
          <Route path='/Login' element = {<Login/>} />
          <Route path='/Register' element = {<Register/>} />
          <Route path='/AboutUs' element = {<AboutUs/>} />
          <Route path='/Contact' element = {<Contact/>} />
        </Routes>
      </Body>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
