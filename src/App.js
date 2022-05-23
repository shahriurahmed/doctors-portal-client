
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home';
import Footer from './Pages/Home/Shared/Footer';
import Navbar from './Pages/Home/Shared/Navbar';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp/SignUp';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointments from './Pages/Dashboard/MyAppointments';
import MyReview from './Pages/Dashboard/MyReview';
import MyHistory from './Pages/Dashboard/MyHistory';
import AllUsers from './Pages/Dashboard/AllUsers';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AddDoctor from './Pages/Dashboard/AddDoctor';
import ManageDoctors from './Pages/Dashboard/ManageDoctors';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        } />
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        } >
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>
          <Route path='history' element={<MyHistory></MyHistory>}></Route>
          <Route path='users' element={<RequireAdmin>
            <AllUsers></AllUsers>
          </RequireAdmin>}></Route>
          <Route path='addDoctor' element={<RequireAdmin>
            <AddDoctor></AddDoctor>
          </RequireAdmin>}></Route>
          <Route path='manageDoctors' element={<RequireAdmin>
            <ManageDoctors></ManageDoctors>
          </RequireAdmin>}></Route>
        </Route>
        {/* 
        <Route path='/reviews' element={<Reviews/>} />
        <Route path='/contactus' element={<ContactUs/>} />
         */}
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

// REACT_APP_APIKEY=AIzaSyAh4naQk0Ad6gt2J-JhbQs3NDx0Nqc35a4
// REACT_APP_AUTHDOMAIN=doctors-portal-84e4d.firebaseapp.com
// REACT_APP_PROJECTID=doctors-portal-84e4d
// REACT_APP_STORAGEBUCKET=doctors-portal-84e4d.appspot.com
// REACT_APP_MESSAGINGSENDERID=740619857730
// REACT_APP_APPID=1:740619857730:web:8ed4dfb9e09fbba98a62db

export default App;
