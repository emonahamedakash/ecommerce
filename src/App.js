import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/account/Login";
import Register from "./components/account/Register";
import Profile from "./components/account/Profile";
import Wishlist from "./components/cart/Wishlist";
import Checkout from "./components/cart/Checkout";
import AllCategory from "./components/category/AllCategory";
import ProductDetails from "./components/product/ProductDetails";
import Campaign from "./components/campaign/Campaign";
import Contact from "./components/others/Contact";
import Policy from "./components/policycenter/Policy";
import Seller from "./components/vendor/Seller";
import Category from "./components/category/Category";
import Home from "./components/home/Home";
import NavigationBar from "./components/home/NavigationBar";
import Footer from "./components/home/Footer";
import VendorRegister from "./components/vendor/VendorRegister";
import Requirements from "./components/policycenter/guest/Requirements";
import Terms from "./components/account/Terms";
import Header from "./components/home/Header";
import PublicOutlet from "./PublicOutlet";
import PrivateOutlet from "./PrivateOutlet";
import EditProfile from "./components/account/EditProfile";
import Cart from "./components/cart/Cart";
import Error from "./components/others/Error";
import AllStore from "./components/category/AllStore";
import Store from "./components/category/Store";
import AllManufacturer from "./components/category/AllManufacturer";
import Manufacturer from "./components/category/Manufacturer";

function App() {
  return (
    <div className="app">
      <Header />
      <NavigationBar />
      <Routes>
        <Route path="/login" element={<PublicOutlet />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/secure" element={<PrivateOutlet />}>
          <Route path="/secure/checkout" element={<Checkout />} />
          <Route path="/secure/profile" element={<Profile />} />
          <Route
            path="/secure/profile/edit-profile"
            element={<EditProfile />}
          />
        </Route>
        <Route index element={<Home />} />
        <Route path="allcategory" element={<AllCategory />} />
        <Route path="allstore" element={<AllStore />} />
        <Route path="allmanufacturer" element={<AllManufacturer />} />
        <Route path="products/productdetails" element={<ProductDetails />} />
        <Route path="campaign" element={<Campaign />} />
        <Route path="contact" element={<Contact />} />
        <Route path="policy" element={<Policy />} />
        <Route path="seller" element={<Seller />} />
        <Route path="allcategory/category" element={<Category />} />
        <Route path="allstore/store" element={<Store />} />
        <Route path="allmanufacturer/manufacturer" element={<Manufacturer />} />
        <Route path="vendor-register" element={<VendorRegister />} />
        <Route path="requirements-info" element={<Requirements />} />
        <Route path="terms" element={<Terms />} />
        <Route path="cart" element={<Cart />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="error" element={<Error />} />
        <Route path="register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
      {/* <Header />
      <Routes>
        <Route path="/login" element={<PublicOutlet />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/secure" element={<PrivateOutlet />}>
          <Route path="/secure/checkout" element={<Checkout />} />
          <Route path="/secure/profile" element={<Profile />} />
          <Route
            path="/secure/profile/edit-profile"
            element={<EditProfile />}
          />
        </Route>
        <Route path="/" element={<MainNav />}>
          <Route index element={<Home />} />
          <Route path="allcategory" element={<AllCategory />} />
          <Route path="allstore" element={<AllStore />} />
          <Route path="allmanufacturer" element={<AllManufacturer />} />
          <Route path="products/productdetails" element={<ProductDetails />} />
          <Route path="campaign" element={<Campaign />} />
          <Route path="contact" element={<Contact />} />
          <Route path="policy" element={<Policy />} />
          <Route path="seller" element={<Seller />} />
          <Route path="allcategory/category" element={<Category />} />
          <Route path="allstore/store" element={<Store />} />
          <Route
            path="allmanufacturer/manufacturer"
            element={<Manufacturer />}
          />
        </Route>
        <Route path="vendor-register" element={<VendorRegister />} />
        <Route path="requirements-info" element={<Requirements />} />
        <Route path="terms" element={<Terms />} />
        <Route path="cart" element={<Cart />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="error" element={<Error />} />
        <Route path="register" element={<Register />} />
      </Routes>
      <Footer /> */}
    </div>
  );
}

export default App;
