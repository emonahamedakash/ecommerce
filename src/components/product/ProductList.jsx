import React from "react";
import ProductCard from "./ProductCard";

const Productlist = () => {
  return (
    <div>
      <ProductCard
        id={product.id}
        title={product.name}
        regularPrice={product.regularPrice}
        price={product.salePrice}
        image={
          product.images.length > 0
            ? `${BASE_URL}${product.images[0].thumbUrl.replace("D:", "")}`
            : "https://us.123rf.com/450wm/pe3check/pe3check1710/pe3check171000054/88673746-no-image-available-sign-internet-web-icon-to-indicate-the-absence-of-image-until-it-will-be-download.jpg?ver=6"
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
};

export default Productlist;
