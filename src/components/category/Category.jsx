import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Category.css";
import noImage from "../assets/noImage.jpg";
import { BASE_URL } from "../../baseUrl";
import ProductCard from "../product/ProductCard";
import Loader from "../Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { ADD } from "../../redux/actions/cartAction";
import { ADDWISH } from "../../redux/actions/wishAction";

function Category() {
  const [subCategories, setSubCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [subName, setSubName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchSubCategories().then();
    fetchProducts().then();
  }, []);

  const fetchSubCategories = async () => {
    await axios
      .get(`${BASE_URL}/api/v1/sub-category/list/${categoryId}`)
      .then((response) => {
        console.log(response);
        let temp = [];
        response.data.data.forEach((item) => {
          temp.push(item);
        });
        if (temp.length > 0) {
          setSubName(temp[0].name);
        }
        setSubCategories(temp);
      });
  };

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

  const handleSubBtn = (subName) => {
    setSubName(subName);
  };
  const { state } = useLocation();
  const { categoryId } = state;

  //adding to cart
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
  const navigate = useNavigate();
  return (
    <div className="category-container">
      <div className="subCategoryList">
        {subCategories.map((subCategory, i) => (
          <button
            onClick={() => handleSubBtn(subCategory.name)}
            key={i}
            className="whiteBtn"
          >
            {subCategory.name}
          </button>
        ))}
      </div>
      <div className="productPart">
        <div className="categoryProductList">
          {isLoading ? (
            <Loader />
          ) : (
            products
              .filter((each) => each.subCategory?.name === subName)
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
                          ? `${BASE_URL}${product.images[0].thumbUrl}`
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
      </div>
      <ToastContainer />
    </div>
  );
}

export default Category;
