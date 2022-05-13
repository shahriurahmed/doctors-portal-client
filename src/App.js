
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Footer from './Pages/Home/Shared/Footer';
import Navbar from './Pages/Home/Shared/Navbar';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='/appontment' element={<Appontment />} />
        <Route path='/reviews' element={<Reviews/>} />
        <Route path='/contactus' element={<ContactUs/>} />
         */}
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
