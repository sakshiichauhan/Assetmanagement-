import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Importing the Navbar component
import Home from './pages/Home';
import profile from './components/profile';
//import ViewAssignedAssets from './pages/ViewAssignedAssets'; // Example page for Asset Management
//import FoodCourtMenu from './pages/FoodCourtMenu'; // Example page for Food Court Menu
//import Alerts from './pages/Alerts'; // Example Alerts page
import Login from './pages/Login';
import Signup from './pages/Signup';
import AdminDashboard from './pages/AdminDashboard';
import AssetMangement from './pages/AssetMangement';
import FoodCourt from './pages/FoodCourt';





const App = () => {
  

  return (
    <Router>
      <div>
        
        <Navbar />

        
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<profile />} />
          <Route path="/assetmanagement" element={<AssetMangement />} />
          <Route path="/foodcourt" element={<FoodCourt />} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
