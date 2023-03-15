import React, { useState, useEffect } from "react";
import "./ProductDetails.css";
import noImage from "../assets/noImage.jpg";
import axios from "axios";
import { BASE_URL } from "../../baseUrl";
import ReactImageMagnify from "react-image-magnify";
import ProductCard from "./ProductCard";
import { useLocation, useNavigate } from "react-router-dom";
import parse from "html-react-parser";
import { ADD } from "../../redux/actions/cartAction";
import { ADDWISH } from "../../redux/actions/wishAction";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = () => {
  const [relProducts, setRelProducts] = useState([]);

  const { state } = useLocation();
  const { product } = state;
  console.log(product);

  let imageLink =
    product.images.length === 0
      ? noImage
      : `${BASE_URL}${product.images[0]?.imageUrl}`;

  useEffect(() => {
    document.title = `BaiBai365 | ${product.title}`;
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  });
  useEffect(() => {
    fetchRelProducts().then();
  }, []);

  const fetchRelProducts = async () => {
    await axios.get(`${BASE_URL}/api/v1/product/list/all`).then((response) => {
      let temp = [];
      if (response.data !== undefined) {
        response.data.data.forEach((item) => {
          temp.push(item);
        });
        setRelProducts(temp);
      }
    });
  };

  // from redux
  const dispatch = useDispatch();
  const send = (e) => {
    dispatch(ADD(e));
    toast.success("Added to Cart🛒", {
      position: "top-center",
      autoClose: 2000,
    });
  };
  //Sending to cart

  const sendWish = (e) => {
    dispatch(ADDWISH(e));
    toast.success("Added to Wishlist❤️", {
      position: "top-center",
      autoClose: 2000,
    });
  };

  const navigate = useNavigate();

  return (
    <div className="productDetails">
      <div className="upperPart">
        <ReactImageMagnify
          className="productImage"
          {...{
            smallImage: {
              alt: product.title,
              isFluidWidth: true,
              src: imageLink,
            },
            largeImage: {
              src: imageLink,
              width: 800,
              height: 800,
            },
          }}
        />

        <div className="productDetails">
          <h2>{product.title}</h2>
          <p>
            <b>Seller: </b>
            {product.store?.name}
          </p>
          <p>
            <b>Manufatured by: </b>
            {product.manufacturer?.name}
          </p>
          <h6 style={{ color: "gray" }}>
            Regular Price: ¥<del>{product.regularPrice}</del>
          </h6>
          <h5 style={{ color: "red" }}>Price: ¥{product.salePrice}</h5>
          {/* {product.productVariants === [] ? (
            <h3>No variant available</h3>
          ) : (
            <div className="productVariants">
              {product.productVariants.map((v, i) => {
                console.log(v);
                console.log(i);
                return (
                  <>
                    <h3>{v.featureDetails[i].feature.name}</h3>
                    <button className="btn btn-outline-secondary">
                      {v.featureDetails[i].name}
                    </button>
                  </>
                );
              })}
            </div>
          )} */}
          <div className="addButton">
            <button
              onClick={() => sendWish(product)}
              className="btn btn-warning"
            >
              Add to Wishlist
            </button>
            <button onClick={() => send(product)} className="btn btn-primary">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="middlePart">
        <hr />
        <br />
        <p
          className="productTitleMiddlePart"
          style={{
            height: "50px",
            color: "white",
            textAlign: "center",
            backgroundColor: "gray",
          }}
        >
          Product Details of {product.name}
        </p>
        <div className="description">{parse(product.description)}</div>
      </div>
      <div className="bottomPart">
        <div>
          <h3>Related Products</h3>
          <div className="relatedProducts">
            {relProducts
              .filter(
                (each) => each.subCategory?.id === product.subCategory?.id
              )
              .map((relproduct, i) => {
                if (i > 3) {
                  return null;
                } else {
                  return (
                    <div key={i}>
                      <ProductCard
                        title={relproduct.title}
                        price={relproduct.price}
                        image={
                          relproduct.images.length > 0
                            ? `${BASE_URL}${relproduct.images[0].thumbUrl.replace(
                                "D:",
                                ""
                              )}`
                            : "https://us.123rf.com/450wm/pe3check/pe3check1710/pe3check171000054/88673746-no-image-available-sign-internet-web-icon-to-indicate-the-absence-of-image-until-it-will-be-download.jpg?ver=6"
                        }
                        btnFunction={() => send(product)}
                        wishBtnFunction={() => sendWish(product)}
                        onClick={() =>
                          navigate("/products/productdetails", {
                            state: { product: relproduct },
                          })
                        }
                      />
                    </div>
                  );
                }
              })}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
export default ProductDetails;
