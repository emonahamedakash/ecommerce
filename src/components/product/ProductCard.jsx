import React from "react";
import "./ProductCard.css";
import { BsFillSuitHeartFill } from "react-icons/bs";

export default function ProductCard(props) {
  return (
    <div className="product-container">
      <div className="product">
        <img
          onClick={props.onClick}
          src={props.image}
          className="img-fluid mx-auto productCardImage"
          alt={props.title}
        />

        <p className="productTitle">{props.title}</p>
        <div>
          <div className="price">¥{props.price}</div>
          <div className="regularPrice">
            <del>{props.regularPrice}</del>
          </div>
        </div>
        <div className="productCardBtn">
          <button onClick={props.btnFunction} className="btn btn-success">
            Add to Cart
          </button>
          <button
            onClick={props.wishBtnFunction}
            className="btn btn-outline-warning"
          >
            <BsFillSuitHeartFill />
          </button>
        </div>
      </div>
    </div>
  );
}
