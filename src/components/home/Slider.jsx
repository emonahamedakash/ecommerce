import axios from "axios";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { BASE_URL } from "../../baseUrl";

export default function Slider() {
  const b = [
    {
      bannerLink:
        "https://icms-image.slatic.net/images/ims-web/d54a863f-74be-4bb3-816a-4f4adf718916.jpg",
    },
    {
      bannerLink:
        "https://icms-image.slatic.net/images/ims-web/bc8e092a-f9f6-469e-b6ff-d4a6950b6376.jpg",
    },
    {
      bannerLink:
        "https://icms-image.slatic.net/images/ims-web/fe40db68-334a-48b8-a5bb-d06708e6395b.jpg",
    },
    {
      bannerLink:
        "https://icms-image.slatic.net/images/ims-web/a309ba7c-ba8f-40ea-a5a7-9f7c8b7affcc.jpg",
    },
  ];
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    fetchBanners().then();
  }, []);

  const fetchBanners = async () => {
    await axios.get(`${BASE_URL}/api/v1/banner/list/all`).then((response) => {
      let temp = [];
      if (response.data.data !== undefined) {
        response.data.data.forEach((item) => {
          temp.push(item);
        });
        setBanners(temp);
      }
    });
  };
  return (
    <div className="slider">
      <Carousel>
        {banners.map((banner, i) => {
          return (
            <Carousel.Item key={i}>
              <img
                className="d-block w-100 h-300px"
                src={`${BASE_URL}${banner.imageUrl}`}
                alt="banner"
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
