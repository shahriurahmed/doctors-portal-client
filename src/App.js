
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home';
import Footer from './Pages/Home/Shared/Footer';
import Navbar from './Pages/Home/Shared/Navbar';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp/SignUp';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/appointment' element={<Appointment />} />
        {/* 
        <Route path='/reviews' element={<Reviews/>} />
        <Route path='/contactus' element={<ContactUs/>} />
         */}
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
