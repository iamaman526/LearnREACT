import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
     -logo
     -nav bar
 * body
     -search 
     -restaurentContainer
     -Restaurent Card
      - image
       - name of the restaurent
       - name of the res, cuisine , star rating, divilery time

 * footer
     -copyright
     -links
     -address
     -content
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://vyapar-logo-maker.s3.ap-south-1.amazonaws.com/images/logo-maker-3.webp"
        />
      </div>
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About us </li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurentCard = (props) => {
  const { resData } = props;
  console.log(resData);
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
        src="https://b.zmtcdn.com/data/pictures/chains/9/51039/e3e149c669fa5d2e3f57221a2c394697_o2_featured_v2.jpg?output-format=webp"
      />
      <h3>{resData?.data?.data?.name}</h3>
     
      <h4>{resData.data.data.area}</h4>
      <h4>{resData?.data?.avgRating}</h4>
      <h4>{resData?.data?.data.cuisines}</h4>
      <h4>38 minutes</h4>
    </div>
  ); 
};


const resObj = 
 
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "731706",
        "name": "Creams and berrys",
        "uuid": "1deaba58-3e40-4b79-ac25-2f03bb96f756",
        "city": "1",
        "area": "Ramamurthy nagar",
        "totalRatingsString": "",
        "cloudinaryImageId": "a30ed459ccdc89cf1f3ab91def783582",
        "cuisines": [
          "Bakery"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 37,
        "minDeliveryTime": 37,
        "maxDeliveryTime": 37,
        "slaString": "37 MINS",
        "lastMileTravel": 0,
        "slugs": {
          "restaurant": "creams-and-berrys-ramamurthy-nagar-ramamurthy-nagar",
          "city": "Bangalore"
        },
        "cityState": "1",
        "address": "",
        "locality": "Sbi Bank Colony",
        "parentId": 434554,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 9800,
              "message": ""
            },
            {
              "name": "BASE_TIME",
              "fee": 0,
              "message": ""
            },
            {
              "name": "ANCILLARY_SURGE_FEE",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 9800,
          "message": "",
          "title": "Delivery Charge",
          "amount": "9800",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=7387083~p=1~eid=00000189-7432-0d7e-22dc-875200d9014f~srvts=1689871584638~89290",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "9.5 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "",
          "deliveryTime": 37,
          "minDeliveryTime": 37,
          "maxDeliveryTime": 37,
          "lastMileTravel": 0,
          "lastMileDistance": 9.5,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "--",
        "totalRatings": 0,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  }
 



const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurentCard resData = {resObj}
        />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
