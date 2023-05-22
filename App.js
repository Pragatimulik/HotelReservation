import logo from './logo.svg';
import './App.css';

import{ Button,Container, Row,col} from 'reactstrap';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link,
   Routes,
   RouterProvider
} from "react-router-dom";
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Menus from './Components/Menus';
import Addcustomer from './Components/Addcustomer';
import Allcustomer from './Components/Allcustomer';
import UpdateCustomer from './Components/UpdateCustomer';

import Addhotel from './Components/Addhotel';
import Allhotel from './Components/Allhotel';
import UpdateHotel from './Components/UpdateHotel';


function App() {
  return (
    <div>
      <ToastContainer/>
      <Header/>
      <Container>
          <div className="row">
            <div className="col-4 col-md-4"><Menus/></div>
            <div className="col-8 col-md-8">
              <Router>
                <Routes>
                <Route path="/" element={<Home/>}exact/>
                    <Route path="/add-customer" element={<Addcustomer/>}exact/>
                    <Route path="/all-customer" element={<Allcustomer/>}exact/>
                    <Route path="/update-customer" element={<UpdateCustomer/>}exact/>
                    
                    <Route path="/add-hotel" element={<Addhotel/>}exact/>
                    <Route path="/all-hotel" element={<Allhotel/>}exact/>
                    <Route path="/update-hotel" element={<UpdateHotel/>}exact/>
                   
                </Routes>
              </Router>
            </div>
          </div>
      </Container>
      <br/>
      
    </div>
  );
}

export default App;
