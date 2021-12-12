import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "./contexts/AuthProvider";
import Header from './components/Header/Header';
import Home from "./pages/Home/Home";
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Footer from './components/Footer/Footer';
import NotFound from './pages/NotFound/NotFound';
import Tours from "./pages/Tours/Tours";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import TourDetails from "./pages/TourDetails/TourDetails";
import MyCart from "./pages/MyCart/MyCart";
import Admin from "./pages/Admin/Admin";
import ManageBookings from "./pages/ManageBookings/ManageBookings";
import AddPackage from "./pages/AddPackage/AddPackage";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route exact path="/home">
              <Home></Home>
            </Route>

            <Route exact path="/about">
              <About></About>
            </Route>

            <Route exact path="/tours">
              <Tours></Tours>
            </Route>

            <PrivateRoute exact path="/tours/:tourId">
              <TourDetails></TourDetails>
            </PrivateRoute>

            <Route exact path="/contact">
              <Contact></Contact>
            </Route>

            <PrivateRoute exact path="/mycart">
              <MyCart></MyCart>
            </PrivateRoute>

            <PrivateRoute exact path="/admin">
              <Admin></Admin>
            </PrivateRoute>

            <PrivateRoute exact path="/managebookings">
              <ManageBookings></ManageBookings>
            </PrivateRoute>

            <PrivateRoute exact path="/addpackage">
              <AddPackage></AddPackage>
            </PrivateRoute>

            <Route exact path="/login">
              <Login></Login>
            </Route>

            <Route exact path="/register">
              <Register></Register>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
