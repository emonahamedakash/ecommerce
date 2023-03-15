import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Home.css";
import noImage from "../assets/noImage.jpg";
import { BASE_URL } from "../../baseUrl";
import Slider from "./Slider";
import ProductCard from "../product/ProductCard";
import { useDispatch } from "react-redux";
import { ADD } from "../../redux/actions/cartAction";
import { ADDWISH } from "../../redux/actions/wishAction";
import Loader from "../Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetchProducts().then();
  }, []);

  const fetchProducts = async () => {
    setIsLoading(true);
    await axios
      .get(`${BASE_URL}/api/v1/product/list/all`)
      .then((response) => {
        console.log(response);
        let temp = [];
        if (response.data.data !== undefined) {
          response.data.data.forEach((item) => {
            temp.push(item);
          });
          setProducts(temp);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  //reducer start
  const dispatch = useDispatch();
  const send = (e) => {
    dispatch(ADD(e));
    toast.success("Added to Cart🛒", {
      position: "top-center",
      autoClose: 2000,
    });
  };
  const sendWish = (e) => {
    dispatch(ADDWISH(e));
    toast.success("Added to Wishlist❤️", {
      position: "top-center",
      autoClose: 2000,
    });
  };
  //reducer end
  console.log(products);

  const navigate = useNavigate();
  return (
    <div className="home">
      <Slider />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="allProductList">
          <h3 style={{ textAlign: "center", fontSize: "40px", margin: "10px" }}>
            Featured Products
          </h3>
          <div className="productList">
            {products.map((product, i) => {
              const { id, title, salePrice, regularPrice, images } = product;
              if (i > 9) {
                return null;
              } else {
                return (
                  <div key={i}>
                    <ProductCard
                      id={id}
                      title={title}
                      regularPrice={regularPrice}
                      price={salePrice}
                      image={
                        images
                          ? `${BASE_URL}${images[0].thumbUrl.replace("D:", "")}`
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
              }
            })}
          </div>
          <div className="more">
            <br />
            <button
              onClick={() =>
                navigate("allcategory/category", {
                  state: { categoryId: 1 },
                })
              }
              className="btn btn-outline-secondary w-100"
            >
              See More
            </button>
          </div>
          <h3 style={{ textAlign: "center", fontSize: "40px" }}>Electronics</h3>
          <div className="productList">
            {products
              .filter((each) => each.category.name === "Electronics")
              .map((product, i) => {
                const { id, title, salePrice, regularPrice, images } = product;
                if (product === undefined) {
                  return <h1>There is no Product</h1>;
                } else if (i > 9) {
                  return null;
                } else {
                  return (
                    <div key={i}>
                      <ProductCard
                        id={id}
                        title={title}
                        regularPrice={regularPrice}
                        price={salePrice}
                        image={
                          images
                            ? `${BASE_URL}${product.images[0].thumbUrl.replace(
                                "D:",
                                ""
                              )}`
                            : noImage
                        }
                        btnFunction={() => send(product)}
                        onClick={() =>
                          navigate("/products/productdetails", {
                            state: { product: product },
                          })
                        }
                      />
                    </div>
                  );
                }
              })}
          </div>
          <div className="more">
            <br />
            <button
              onClick={() =>
                navigate("allcategory/category", {
                  state: { categoryId: 1 },
                })
              }
              className="btn btn-outline-secondary w-100"
            >
              See More
            </button>
          </div>
          <h3
            style={{ textAlign: "center", fontSize: "40px", margin: "10px 0" }}
          >
            Grocery
          </h3>
          <div className="productList">
            {products
              .filter((each) => each.category === "Grocery")
              .map((product, i) => {
                const { id, title, salePrice, regularPrice, images } = product;
                if (i > 9) {
                  return null;
                } else {
                  return (
                    <div key={i}>
                      <ProductCard
                        id={id}
                        title={title}
                        regularPrice={regularPrice}
                        price={salePrice}
                        image={
                          images
                            ? `${BASE_URL}${product.images[0].thumbUrl.replace(
                                "D:",
                                ""
                              )}`
                            : noImage
                        }
                        btnFunction={() => send(product)}
                        onClick={() =>
                          navigate("/products/productdetails", {
                            state: { product: product },
                          })
                        }
                      />
                    </div>
                  );
                }
              })}
          </div>
          <div className="more">
            <button
              onClick={() =>
                navigate("allcategory/category", {
                  state: { categoryId: 2 },
                })
              }
              className="btn btn-outline-secondary w-100"
            >
              See More
            </button>
          </div>
          <h3
            style={{ textAlign: "center", fontSize: "40px", margin: "10px 0" }}
          >
            Food
          </h3>
          <div className="productList">
            {products
              .filter((each) => "Food")
              .map((product, i) => {
                const { id, title, salePrice, regularPrice, images } = product;
                return (
                  <div key={i}>
                    <ProductCard
                      id={id}
                      title={title}
                      regularPrice={regularPrice}
                      price={salePrice}
                      image={
                        images
                          ? `${BASE_URL}${product.images[0].thumbUrl.replace(
                              "D:",
                              ""
                            )}`
                          : noImage
                      }
                      btnFunction={() => send(product)}
                      onClick={() =>
                        navigate("/products/productdetails", {
                          state: { product: product },
                        })
                      }
                    />
                  </div>
                );
              })}
          </div>
          <div className="more">
            <button
              onClick={() =>
                navigate("allcategory/category", {
                  state: { categoryId: 3 },
                })
              }
              className="btn btn-outline-secondary w-100"
            >
              See More
            </button>
          </div>
        </div>
      )}
      <ToastContainer autoClose={2000} />
      <br />
    </div>
  );
}
