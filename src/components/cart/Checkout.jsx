import React from "react";
import { useLocation } from "react-router-dom";
import "./Checkout.css";
export const Checkout = () => {
  const state = useLocation();
  const { m } = state;
  console.log(m);
  return (
    <div>
      <h1>This is checkout page</h1>
    </div>
  );
};
export default Checkout;
