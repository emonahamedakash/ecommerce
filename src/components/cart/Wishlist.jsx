import React, { useEffect } from "react";
import "./Wishlist.css";
import Error from "../others/Error";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../../baseUrl";
import { FaTrashAlt } from "react-icons/fa";
import { ADD } from "../../redux/actions/cartAction";
import { DLTWISH } from "../../redux/actions/wishAction";
import Empty from "../Empty";
import noImage from "../assets/noImage.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function Wishlist() {
  const getData = useSelector((state) => state.wishReducer.wishes);
  const dispatch = useDispatch();
  const delet = (id) => {
    dispatch(DLTWISH(id));
  };
  //reducer start
  const send = (e) => {
    dispatch(ADD(e));
    toast.success("Product Added to Cart!", {
      position: "top-center",
      autoClose: 2000,
    });
  };

  //handle add cart
  const handleAddCart = (e) => {
    send(e);
    delet(e);
  };

  // 👇️ scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  });
  // 👆 scroll to top on page load
  const navigate = useNavigate();
  return (
    <div>
      {getData.length === 0 ? (
        <Empty name={"Wish List"} />
      ) : (
        <div className="wishlist">
          <h3 style={{ textAlign: "center" }}>Wish List</h3>
          {getData.map((e, i) => {
            if (e !== undefined) {
              return (
                <div className="wishlistItems" key={i}>
                  <div className="delfromwishlist">
                    <button
                      onClick={() => delet(e.id)}
                      className="btn btn-danger"
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                  <div>
                    <img
                      onClick={() =>
                        navigate("/products/productdetails", {
                          state: { product: e },
                        })
                      }
                      className="wishlistLogo"
                      src={
                        e.images?.length > 0
                          ? `${BASE_URL}${e.images[0].thumbUrl.replace(
                              "D:",
                              ""
                            )}`
                          : noImage
                      }
                      alt="logo"
                    />
                  </div>
                  <div className="productSummery">
                    <h5 className="productTitle">{e.title}</h5>
                  </div>
                  <div className="quantity">
                    <p>In Stock</p>
                  </div>
                  <div className="price">
                    <h3>¥{e.salePrice}</h3>
                    <button
                      onClick={() => {
                        send(e);
                        delet(e.id);
                      }}
                      className="btn btn-primary"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            } else {
              return <Error />;
            }
          })}
        </div>
      )}
      <ToastContainer />
    </div>
  );
}
