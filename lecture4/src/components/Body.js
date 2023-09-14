import React from "react";
import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";

const Body = () => {
  const RestaurentList = [
    {
      cardType: "restaurant",
      layoutAlignmentType: "VERTICAL",
      data: {
        type: "restaurant",
        data: {
          type: "F",
          id: "731703",
          name: "prince da dhaba",
          uuid: "1deaba58-3e40-4b79-ac25-2f03bb96f756",
          city: "1",
          ar: 4.0,
          area: "Ramamurthy nagar",
          totalRatingsString: "",
          cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
          cuisines: ["Bakery"],
          tags: [],
          costForTwo: 30000,
          costForTwoString: "₹300 FOR TWO",
        },
      },
    },
    {
      cardType: "restaurant",
      layoutAlignmentType: "VERTICAL",
      data: {
        type: "restaurant",
        data: {
          type: "F",
          id: "731703",
          name: "jagdish ki dukan",
          uuid: "1deaba58-3e40-4b79-ac25-2f03bb96f756",
          city: "1",
          ar: 3.8,
          area: "Ramamurthy nagar",
          totalRatingsString: "",
          cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
          cuisines: ["Bakery"],
          tags: [],
          costForTwo: 30000,
          costForTwoString: "₹300 FOR TWO",
        },
      },
    },
  ];
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            RestaurentList.filter((x) => {
              return x.data.data.ar > 3.8;
            }).map((x) => x.RestaurentList);
            console.log("byyyyyy");
          }}
        >
          Top Rated Restaurent
        </button>
      </div>
      <div className="search">Search</div>
      <div className="res-container">
        {RestaurentList.map((restaurant) => (
          <RestaurentCard key={restaurant.data.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
