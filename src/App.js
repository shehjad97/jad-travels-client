import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import AuthProvider from './auth/AuthProvider';
import PrivateRoute from './pages/Auth/PrivateRoute/PrivateRoute';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/Auth/Login/Login';
import Register from './pages/Auth/Register/Register';
import Admin from './pages/Admin/Admin';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import MyCart from './pages/MyCart/MyCart';
import Tours from './pages/Tours/Tours';
import TourDetails from './pages/TourDetails/TourDetails';
import AddPackage from './pages/Admin/AddPackage/AddPackage';
import ManageBookings from './pages/Admin/ManageBookings/ManageBookings';


function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />

            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />

            <Route path='/admin' element={<Admin />} />
            <Route path='/admin/managebookings' element={<ManageBookings />} />
            <Route path='/admin/addpackage' element={<AddPackage />} />

            {/* Private Routes */}
            <Route element={<PrivateRoute />}>
              <Route path='/mycart' element={<MyCart />} />
              <Route path='/tours' element={<Tours />} />
              <Route path='/tours/:tourId' element={<TourDetails />} />
            </Route>

            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;