import React, { useState, useEffect } from "react";
import "./AllStore.css";
import noImage from "../assets/noImage.jpg";
import CategoryCard from "./CategoryCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../baseUrl";
import Loader from "../Loader";

export const AllStore = () => {
  const [stores, setStores] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //Store fetching from here
  useEffect(() => {
    fetchStores().then();
  }, []);

  const fetchStores = async () => {
    setIsLoading(true);
    await axios
      .get(`${BASE_URL}/api/v1/store/list/all`)
      .then((response) => {
        console.log(response);
        let temp = [];
        response.data.data.forEach((item) => {
          temp.push(item);
        });
        setStores(temp);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  //Store fetching end
  const navigateStore = useNavigate();

  return (
    <div className="allstore-container">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="allstore">
          {stores.map((store, i) => {
            return (
              <div className="allstoreLink allstoreCard" key={i}>
                <CategoryCard
                  image={
                    store.storeLogoThumbnailUrl === null
                      ? noImage
                      : `${BASE_URL}${store.storeLogoThumbnailUrl}`
                  }
                  name={store.name}
                  onClick={() =>
                    navigateStore("store", { state: { sName: store.name } })
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

export default AllStore;
