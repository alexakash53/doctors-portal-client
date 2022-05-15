import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './pages/Shared/Navbar';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Login from './pages/Home/Login';
import Footer from './pages/Home/Footer';
import Appointment from './pages/Appointment/Appointment';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-10'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='appointment' element={<Appointment/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='login' element={<Login/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
