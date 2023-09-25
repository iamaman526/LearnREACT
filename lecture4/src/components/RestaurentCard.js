import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
  const { resData } = props;
  // console.log(resData);

  const { cloudinaryImageId, name, area, costForTwo, cuisines, avgRating } =
    resData?.info;

  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>

      <h4>{area}</h4>
      <h4>{costForTwo}</h4>
      <h5>{avgRating} ⭐</h5>
      <h4>{cuisines.join(",")}</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

export default RestaurentCard;
