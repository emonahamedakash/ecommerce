import React, { useState, useEffect } from "react";
import CategoryCard from "./CategoryCard";
import "./AllCategory.css";
import noImage from "../assets/noImage.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../baseUrl";
import Loader from "../Loader";

export const AllCategory = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //Category fetching from here
  useEffect(() => {
    fetchCategories().then();
  }, []);

  const fetchCategories = async () => {
    setIsLoading(true);
    await axios
      .get(`${BASE_URL}/api/v1/category/list/all`)
      .then((response) => {
        let temp = [];
        response.data.data.forEach((item) => {
          temp.push(item);
        });
        setCategories(temp);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  //category fetching end
  const navigateCat = useNavigate();

  return (
    <div className="allcategory-container">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="allcategory">
          {categories.map((category, i) => {
            const { id, image, name } = category;
            return (
              <div className="allcategoryLink allcategoryCard" key={i}>
                <CategoryCard
                  id={id}
                  image={
                    image === null ? noImage : `${BASE_URL}${image?.thumbUrl}`
                  }
                  name={name}
                  onClick={() =>
                    navigateCat("category", {
                      state: { categoryId: id },
                    })
                  }
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AllCategory;
