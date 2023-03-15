import React, { useState, useEffect } from "react";
import "./AllManufacturer.css";
import CategoryCard from "./CategoryCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../baseUrl";
import Loader from "../Loader";

export const AllManufacturer = () => {
  const [manufacturers, setManufacturers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //Manufacturer fetching from here
  useEffect(() => {
    fetchManufacturers().then();
  }, []);

  const fetchManufacturers = async () => {
    setIsLoading(true);
    await axios
      .get(`${BASE_URL}/api/v1/manufacturer/list/all`)
      .then((response) => {
        let temp = [];
        response.data.data.forEach((item) => {
          temp.push(item);
        });
        setManufacturers(temp);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  //Manufacturer fetching end
  const navigateManufacturer = useNavigate();

  return (
    <div className="allmanufacturer-container">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="allmanufacturer">
          {manufacturers.map((manufacturer, i) => {
            return (
              <div className="allmanufacturerLink allmanufacturerCard" key={i}>
                <CategoryCard
                  id={manufacturer.id}
                  image={
                    manufacturer.image === null
                      ? "https://us.123rf.com/450wm/pe3check/pe3check1710/pe3check171000054/88673746-no-image-available-sign-internet-web-icon-to-indicate-the-absence-of-image-until-it-will-be-download.jpg?ver=6"
                      : `${BASE_URL}${manufacturer.image?.imageUrl}`
                  }
                  name={manufacturer.name}
                  onClick={() =>
                    navigateManufacturer("manufacturer", {
                      state: { mName: manufacturer.name },
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

export default AllManufacturer;
