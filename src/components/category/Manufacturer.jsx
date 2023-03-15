import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Manufacturer.css";
import axios from "axios";
import noImage from "../assets/noImage.jpg";
import { BASE_URL } from "../../baseUrl";
import ProductCard from "../product/ProductCard";
import Loader from "../Loader";
import { useDispatch } from "react-redux";
import { ADD } from "../../redux/actions/cartAction";
import { ADDWISH } from "../../redux/actions/wishAction";
import { ToastContainer, toast } from "react-toastify";

function Manufacturer(props) {
  const [products, setProducts] = useState([]);
  const [manufacturerName, setManufacturerName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchProducts().then();
  }, []);

  //products fetching from here

  const fetchProducts = async () => {
    setIsLoading(true);
    await axios
      .get(`${BASE_URL}/api/v1/product/list/all`)
      .then((response) => {
        let temp = [];
        if (response.data.data !== undefined) {
          response.data.data.forEach((item) => {
            temp.push(item);
          });
        }
        setProducts(temp);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const dispatch = useDispatch();
  const send = (e) => {
    dispatch(ADD(e));
    toast.success("Product Added to Cart!", {
      position: "top-center",
      autoClose: 2000,
    });
  };
  const sendWish = (e) => {
    dispatch(ADDWISH(e));
    toast.success("Product Added to Wishlist!", {
      position: "top-center",
      autoClose: 2000,
    });
  };

  const handleSubBtn = (manufacturerName) => {
    setManufacturerName(manufacturerName);
  };
  const { state } = useLocation();
  const { mName } = state;
  const navigate = useNavigate();
  return (
    <div className="manufacturer-container">
      <h2>{mName}</h2>
      <div className="manufacturer">
        {isLoading ? (
          <Loader />
        ) : (
          products
            .filter((each) => each.manufacturer?.name === mName)
            .map((product, i) => {
              return (
                <div key={i}>
                  <ProductCard
                    id={product.id}
                    title={product.title}
                    regularPrice={product.regularPrice}
                    price={product.salePrice}
                    image={
                      product.images.length > 0
                        ? `${BASE_URL}${product.images[0].thumbUrl.replace(
                            "D:",
                            ""
                          )}`
                        : noImage
                    }
                    btnFunction={() => send(product)}
                    wishBtnFunction={() => sendWish(product)}
                    onClick={() =>
                      navigate("/products/productdetails", {
                        state: { product: product },
                      })
                    }
                  />
                </div>
              );
            })
        )}
      </div>
      <ToastContainer />
    </div>
  );
}

export default Manufacturer;
