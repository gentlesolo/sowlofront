import './App.css';
import HomePage from './pages/HomePage';
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/navbar/Navbar";
import React from "react";
import Modal from 'react-modal';
import BaseRouter from "./baseRouter";
<<<<<<< HEAD
import Login from './../src/Auth/login';
import Register from './../src/Auth/Register';
=======
import Login from "./Auth/login";
import Register from "./Auth/Register";
<<<<<<< HEAD
import Footer from "./components/footer/Footer";
=======
>>>>>>> c9f5af74dba00ded0aaf2dc339f199f31f50168d
>>>>>>> ac40c7821967d70cdffe697153a944ca57ad595e


//Modal.setAppElement('#root');

function App() {
  return (
    <div className="App">

        <Navbar />
       <BaseRouter/>
       {/* <Login />*/}
       {/* <Register/>*/}

        <Footer/>

    </div>
  );
}

export default App;
