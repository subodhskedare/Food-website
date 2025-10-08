import { LOGO_URL } from "../utils/constant";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Hooks/useOnlineStatus";
import UserContext from "../Hooks/UserContect";

const Header = () => {
  const [isLoggedin, setIsLoggedin] = useState(true);
  const onlineStatus = useOnlineStatus();
  const data = useContext(UserContext);

  return (
    <div className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              className="h-10 w-10 rounded-lg"
              src={LOGO_URL}
              alt="Foodie Logo"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              FoodieHub
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-1">
              <span className="text-sm text-gray-500">Status:</span>
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                  onlineStatus
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {onlineStatus ? "🟢 Online" : "🔴 Offline"}
              </span>
            </div>

            <Link
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200 px-3 py-2 rounded-md hover:bg-orange-50"
              to="/"
            >
              Home
            </Link>
            <Link
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200 px-3 py-2 rounded-md hover:bg-orange-50"
              to="/about"
            >
              About Us
            </Link>
            <Link
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200 px-3 py-2 rounded-md hover:bg-orange-50"
              to="/contact"
            >
              Contact Us
            </Link>
            <Link
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200 px-3 py-2 rounded-md hover:bg-orange-50"
              to="/grocery"
            >
              Grocery
            </Link>

            {/* Cart */}
            <div className="relative">
              <button className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200 px-3 py-2 rounded-md hover:bg-orange-50 flex items-center space-x-1">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8.5"
                  />
                </svg>
                <span>Cart</span>
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>

            {/* Login/Logout Button */}
            {isLoggedin ? (
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                onClick={() => setIsLoggedin(false)}
              >
                Logout
              </button>
            ) : (
              <button
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-4 py-2 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                onClick={() => setIsLoggedin(true)}
              >
                Login
              </button>
            )}
            <div className="flex items-center space-x-1">
              <span className="text-sm text-gray-500">User:</span>
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800${onlineStatus}`}
              >
                {data.loggedInUser}
              </span>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-orange-500 p-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
