import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../../baseUrl";
import "./Cart.css";
import noImage from "../assets/noImage.jpg";
import { DLT, CLR } from "../../redux/actions/cartAction";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";
import Empty from "../Empty";
import { FaRegTrashAlt } from "react-icons/fa";
import Checkout from "./Checkout";

const Cart = () => {
  const [price, setPrice] = useState();
  const getData = useSelector((state) => state.cartReducer.carts);
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  let varient = 1;

  const msg = "Hello";

  console.log(getData);

  const dispatch = useDispatch();
  const delet = (id) => {
    dispatch(DLT(id));
  };

  const handleSubmit = () => {
    let data = {
      // createdBy: currentUser.username,
      orderProducts: [
        {
          productId: getData[0].id,
          selectedVariantId: varient,
          quantity: 1,
          price: getData[0].productVariants[0].regularPrice,
          cashback: 0.0,
        },
      ],
      //gap
      status: "PLACED",
      totalCost: price,
      paidAmount: price,
      contactNo: "01786105590",
      addressId: 1,
      paymentHistory: {
        total: price,
        paymentMethod: [
          {
            amount: price,
            type: "CASH",
            issuer: "CUSTOMER",
          },
        ],
      },
    };
    console.log(data);
    axios
      .post(`${BASE_URL}/api/v1/order-history/create`, data, {
        params: { access_token: localStorage.getItem("accessToken") },
      })
      .then((response) => {
        console.log(response);
        getData.map((item) => {
          delet(item.id);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const total = () => {
    let price = 0;
    getData.map((ele) => {
      price = parseFloat(ele.salePrice) + price;
    });
    setPrice(price);
  };

  useEffect(() => {
    total();
  }, [total]);

  return (
    <div className="cart">
      {getData.length === 0 ? (
        <Empty name={"Cart"} />
      ) : (
        <div className="cartContainer">
          <div className="cartItems">
            {getData.map((e, i) => {
              return (
                <div key={i}>
                  <div className="cartItemList">
                    <img
                      src={
                        e.images?.length > 0
                          ? `${BASE_URL}${e.images[0].thumbUrl.replace(
                              "D:",
                              ""
                            )}`
                          : noImage
                      }
                      alt={e.title}
                    />
                    <p>{e.title}</p>
                    <input type="number" defaultValue={1} name="quantity" />
                    <p>¥{e.salePrice}</p>
                    <button
                      className="btn btn-danger"
                      onClick={() => delet(e.id)}
                    >
                      <FaRegTrashAlt />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="checkout">
            <div className="totalPrice">
              <p>Total Cost</p>
              <p>¥{price}</p>
            </div>
            <hr />

            <button
              // onClick={setOpenCheckout(true)}
              // onClick={() => {
              //   navigate("/checkout", {
              //     state: { m: msg },
              //   });
              // }}
              onClick={handleSubmit}
              className="btn btn-primary w-100"
            >
              PROCEED TO CHECKOUT
            </button>
            <button
              onClick={() => navigate("/")}
              className="btn btn-outline-success w-100 mt-2"
            >
              Continue shopping
            </button>
          </div>
          {/* {openCheckout && <Checkout />} */}
        </div>
      )}
    </div>
  );
};

export default Cart;
