import React from 'react';
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import Navbar from '../src/component/Navbar';
import Dashboard from '../src/component/Dashboard';
import Assest from '../src/component/Assest';
import Viewassest from '../src/component/Viewassest';
import Assignassest from '../src/component/Assignassest';
import FoodCourt from '../src/component/Foodcourt';
import Alert from '../src/component/Alert';
import Requestassest from './component/Requestassest';
import Foodmenu from './component/Foodmenu';
import Login from './component/login';
import Signup from './component/Signup';


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/assets" element={<Assest />} />
        <Route path="/view-assigned-assets" element={<Viewassest />} />
        <Route path="/assign-asset" element={<Assignassest />} />
        <Route path="/request-asset" element={<Requestassest />} />
        <Route path="/food-court" element={<FoodCourt />} />
        <Route path='/food-court-menu' element={<Foodmenu/>} />
        <Route path="/alerts" element={<Alert />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        
      </Routes>
      </>
      
  );
}

export default App;
