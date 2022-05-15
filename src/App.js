import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './pages/Shared/Navbar';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Login from './pages/Home/Login';
import Footer from './pages/Home/Footer';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='login' element={<Login/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
