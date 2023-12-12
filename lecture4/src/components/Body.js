import React, { useEffect, useState } from "react";
import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer";
const Body = () => {
  //Local State Variable - Super powerful Variable
  const [RestaurentList, setRestaurentList] = useState([]); //destructure

  // const arr = useState(resList);
  // const RestaurentList = arr[0];
  // const setRestaurentList = arr[1];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0460404&lng=77.7652346&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setRestaurentList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
  };

  //conditional rendering.

  //Normal js variables
  // const RestaurentListjs = [
  //   {
  //     cardType: "restaurant",
  //     layoutAlignmentType: "VERTICAL",
  //     data: {
  //       type: "restaurant",
  //       data: {
  //         type: "F",
  //         id: "731703",
  //         name: "prince da dhaba",
  //         uuid: "1deaba58-3e40-4b79-ac25-2f03bb96f756",
  //         city: "1",
  //         ar: 4.0,
  //         area: "Ramamurthy nagar",
  //         totalRatingsString: "",
  //         cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
  //         cuisines: ["Bakery"],
  //         tags: [],
  //         costForTwo: 30000,
  //         costForTwoString: "₹300 FOR TWO",
  //       },
  //     },
  //   },
  //   {.
  //     cardType: "restaurant",
  //     layoutAlignmentType: "VERTICAL",
  //     data: {
  //       type: "restaurant",
  //       data: {
  //         type: "F",
  //         id: "731709",
  //         name: "jagdish ki dukan",
  //         uuid: "1deaba58-3e40-4b79-ac25-2f03bb96f756",
  //         city: "1",
  //         ar: 3.8,
  //         area: "Ramamurthy nagar",
  //         totalRatingsString: "",
  //         cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
  //         cuisines: ["Bakery"],
  //         tags: [],
  //         costForTwo: 30000,
  //         costForTwoString: "₹300 FOR TWO",
  //       },
  //     },
  //   },
  //   {,
  //     cardType: "restaurant",
  //     layoutAlignmentType: "VERTICAL",
  //     data: {
  //       type: "restaurant",
  //       data: {
  //         type: "F",
  //         id: "731409",
  //         name: "manish ki shop",
  //         uuid: "1deaba58-3e40-4b79-ac25-2f03bb96f756",
  //         city: "1",
  //         ar: 4.5,
  //         area: "Ramamurthy nagar",
  //         totalRatingsString: "",
  //         cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
  //         cuisines: ["Bakery"],
  //         tags: [],
  //         costForTwo: 30000,
  //         costForTwoString: "₹300 FOR TWO",
  //       },
  //     },
  //   },
  // ];


  //CONDITIONAL RENDERING
  return RestaurentList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filtered = RestaurentList.filter(
              (x) => x.info.avgRating > 4.1
            );

            setRestaurentList(filtered);
            // console.log(filtered);
          }}
        >
          Top Rated Restaurent
        </button>
      </div>
      {/* <div className="search">Search</div> */}
      <div className="res-container">
        {RestaurentList.map((restaurant) => (
          <RestaurentCard key={restaurant?.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
