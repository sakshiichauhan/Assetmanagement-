import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '/src/Assets/alpheric logo.png'; // Import the logo image

const Navbar = () => {
  const [assetDropdownOpen, setAssetDropdownOpen] = useState(false);
  const [foodCourtDropdownOpen, setFoodCourtDropdownOpen] = useState(false);

  const toggleAssetDropdown = () => setAssetDropdownOpen(!assetDropdownOpen);
  const toggleFoodCourtDropdown = () => setFoodCourtDropdownOpen(!foodCourtDropdownOpen);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <img 
            src={logo} 
            alt="Alpheric logo" 
            className="w-32 h-auto" // Adjust the width as needed
          />
        </div>

        {/* Navbar Links */}
        <div className="flex space-x-6">
          {/* Home Link */}
          <Link 
            to="/" 
            className="px-4 py-2 hover:bg-yellow-400 rounded"
          >
            Home
          </Link>

          {/* Asset Management Dropdown */}
          <div className="relative">
            <button
              className="px-4 py-2 hover:bg-yellow-400 rounded"
              onClick={toggleAssetDropdown}
            >
              Asset Management
            </button>
            {assetDropdownOpen && (
              <div className="absolute left-0 w-48 mt-2 bg-gray-700 rounded-md shadow-lg">
                <ul>
                  <li className="px-4 py-2 hover:bg-yellow-400">
                    <Link to="/view-assigned-assets">View Assigned Assets</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-yellow-400">
                    <Link to="/assign-asset">Assign Asset</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-yellow-400">
                    <Link to="/request-asset">Request Asset</Link>
                  </li>
                  
                </ul>
              </div>
            )}
          </div>

          {/* Food Court Orders Dropdown */}
          <div className="relative">
            <button
              className="px-4 py-2 hover:bg-yellow-400 rounded"
              onClick={toggleFoodCourtDropdown}
            >
              Food Court Orders
            </button>
            {foodCourtDropdownOpen && (
              <div className="absolute left-0 w-48 mt-2 bg-gray-700 rounded-md shadow-lg">
                <ul>
                  <li className="px-4 py-2 hover:bg-yellow-400">
                    <Link to="/food-court-menu">Food Court Menu</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Alerts Link */}
          <Link to="/alerts" className="px-4 py-2 hover:bg-yellow-400 rounded">
            Alerts
          </Link>
          
          {/* login Link */}
          <Link 
            to="/signup" 
            className="text-white bg-yellow-400 px-4 py-2 rounded hover:bg-yellow-500 flex items-center transition duration-200"
          >
            <i className="ion-icon ion-ios-log-in text-xl mr-2"></i> {/* Ionicon login icon */}
             Sign in
          </Link>
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
