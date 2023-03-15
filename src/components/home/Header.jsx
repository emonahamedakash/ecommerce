import React, { useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaShoppingBag,
  FaUserCircle,
  FaHeart,
  FaRegHeart,
  FaSignOutAlt,
} from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Header() {
  const { currentUser, signOut } = useAuth();

  const getData = useSelector((state) => state.cartReducer.carts);
  const getWishData = useSelector((state) => state.wishReducer.wishes);
  return (
    <div className="header-container">
      <div className="header">
        <div className="headerLogoContainer">
          <Link to="/">
            <img
              className="headerLogo"
              src="https://baibai365.com/wp-content/uploads/2022/02/cropped-Hotel-360.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="headerSearch">
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="headerSearchInput"
          />
          <div className="headerSearchIcon">
            <FaSearch />
          </div>
        </div>
        <div className="headerMenu">
          <Link
            to="/login"
            className="headerLink"
            title={currentUser ? "profie" : "login"}
          >
            <FaUserCircle className="headerIcon" />
          </Link>
          <Link to="/wishlist" className="headerLink" title="Wishlist">
            <FaHeart className="headerIcon" />
            <span className="cartCount">{getWishData.length}</span>
          </Link>
          <Link to="/cart" className="headerLink" title="Cart">
            <FaShoppingBag className="headerIcon" />
            <span className="cartCount">{getData.length}</span>
          </Link>
          {currentUser && (
            <a onClick={signOut} className="headerLink" title="Cart">
              <FaSignOutAlt className="headerIcon" />
            </a>
          )}
          {/* {
                    loading && <spinner/>
                } */}
        </div>
      </div>
    </div>
  );
}
