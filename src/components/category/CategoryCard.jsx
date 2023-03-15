import React from "react";
import "./CategoryCard.css";

const CategoryCard = (props) => {
  return (
    <div
      className="categoryCardContainer"
      onClick={props.onClick}
      key={props.id}
    >
      <div>
        <img className="categoryImg" src={props.image} alt="categoryThumb" />
        <h4>{props.name}</h4>
      </div>
    </div>
  );
};

export default CategoryCard;
