import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTachometerAlt, FaUsers, FaWpforms } from 'react-icons/fa';
import { CiSettings } from "react-icons/ci";


const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white h-screen w-64 fixed shadow-md">
      <div className="p-4 border-b border-gray-600">
        <h3 className="text-xl font-semibold">Employee</h3>
      </div>
      <div className="mt-4">
        <NavLink
          to="/admin-dashboard"
          className="flex items-center px-4 py-2 text-white hover:bg-gray-700"
          activeClassName="bg-gray-700"
        >
          <FaTachometerAlt className="mr-3" />
          <span>Dashboard</span>
        </NavLink>
        <NavLink
          to="/admin-dashboard"
          className="flex items-center px-4 py-2 text-white hover:bg-gray-700"
          activeClassName="bg-gray-700"
        >
          <FaUsers className="mr-3" />
          <span>employee asset asign </span>
        </NavLink>
        <NavLink
          to="/admin-dashboard"
          className="flex items-center px-4 py-2 text-white hover:bg-gray-700"
          activeClassName="bg-gray-700"
        >
          <FaWpforms className="mr-3" />
          <span>Roomwise asset assign</span>
        </NavLink>
        <NavLink
          to="/admin-dashboard"
          className="flex items-center px-4 py-2 text-white hover:bg-gray-700"
          activeClassName="bg-gray-700"
        >
          <FaWpforms className="mr-3" />
          <span>Asset request</span>
        </NavLink>
        <NavLink
          to="/admin-dashboard"
          className="flex items-center px-4 py-2 text-white hover:bg-gray-700"
          activeClassName="bg-gray-700"
        >
          <FaTachometerAlt className="mr-3" />
          <span>Asset repair</span>
        </NavLink>
        <NavLink
          to="/admin-dashboard"
          className="flex items-center px-4 py-2 text-white hover:bg-gray-700"
          activeClassName="bg-gray-700"
        >
          <FaTachometerAlt className="mr-3" />
          <span>asset replacement</span>
        </NavLink>
        <NavLink
          to="/admin-dashboard"
          className="flex items-center px-4 py-2 text-white hover:bg-gray-700"
          activeClassName="bg-gray-700"
        >
          <CiSettings className="mr-3" />
          <span>Setting</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
