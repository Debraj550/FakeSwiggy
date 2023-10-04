import React, { useContext, useState } from "react";
import logofull from "../assets/logofull.png";
import { Link } from "react-router-dom";
import About from "./About";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = ({ onAboutClick }) => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const { loggedinUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  const handleLogin = () => {
    setIsLoggedin((prev) => !prev);
  };

  const handleAboutClick = (e) => {
    e.preventDefault(); // Prevent the default link behavior
    onAboutClick();
  };

  return (
    <div className="flex justify-between shadow-lg px-4 items-center bg-gradient-to-b from-white to-gray-100 mb-4">
      <div className="logo-container">
        <Link to="/">
          <img
            className="w-28 transition-all hover:scale-110"
            src={logofull}
          ></img>
        </Link>
      </div>
      <div className="flex">
        <ul className="flex p-4 m-4 items-center font-sans gap-4">
          <li className="px-4 transition-all hover:scale-110 hover:text-red-600 cursor-pointer ">
            <Link to="/">
              <i className="fa-solid fa-house"></i>
              {" Home"}
            </Link>
          </li>
          <li className="px-4 hover:text-red-600 transition-transform hover:scale-110">
            <Link to="" onClick={handleAboutClick}>
              <i className="fa-solid fa-circle-info"></i>
              {" About"}
            </Link>
          </li>

          <li className="px-4 hover:text-red-600 transition-transform hover:scale-110">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 hover:text-red-600 transition-transform hover:scale-110">
            <i className="fa-solid fa-cart-shopping"></i>
            <Link to={"/cart"}>
              {" Cart"} ({cartItems.length})
            </Link>
          </li>
          <li className="px-4 hover:text-red-600 transition-transform">
            <button
              className="px-4 py-2 bg-orange-600 font-bold rounded-lg text-white hover:bg-orange-700"
              onClick={handleLogin}
            >
              <i className="fa-solid fa-right-to-bracket"></i>
              {isLoggedin ? " logout" : " login"}
            </button>
          </li>
          {/* <li className="font-bold">{loggedinUser}</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
