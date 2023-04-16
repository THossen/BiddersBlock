import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/layout/Navbar';
import Body from './components/layout/Body';
import LandingPage from './components/pages/LandingPage/LandingPage';
import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
import Register from './components/pages/Register/Register';
import Footer from './components/layout/Footer';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Body>
        <Routes>
          <Route path='/' element= {<LandingPage />} />
          <Route path='/Home' element = {<Home/>} />
          <Route path='/Login' element = {<Login/>} />
          <Route path='/Register' element = {<Register/>} />
        </Routes>
      </Body>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
