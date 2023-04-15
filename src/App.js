import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/pages/LandingPage/LandingPage';
import Home from './components/pages/Home/Home';
import NavBar from './components/layout/Navbar';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element= {<LandingPage />} />
        <Route path="Home" element = {<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
