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
  // console.log(resData);

   const { cloudinaryImageId, name,area,costForTwo,cuisines}  = resData?.data?.data;

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
        src= {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"  +  cloudinaryImageId}
      />
      <h3>{name}</h3>
     
      <h4>{area}</h4>
      <h4>{costForTwo/100}</h4>
      <h4>{cuisines}</h4>
      <h4>38 minutes</h4>
    </div>
  ); 
};


const resList = [ 

{
  "cardType": "restaurant",
  "layoutAlignmentType": "VERTICAL",
  "data": {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "731707",
      "name": "Creams and berrys",
      "uuid": "1deaba58-3e40-4b79-ac25-2f03bb96f756",
      "city": "1",
      "area": "Ramamurthy nagar",
      "totalRatingsString": "",
      "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
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
},

{
  "cardType": "restaurant",
  "layoutAlignmentType": "VERTICAL",
  "data": {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "731709",
      "name": "prince da dhaba",
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
},
{
  "cardType": "restaurant",
  "layoutAlignmentType": "VERTICAL",
  "data": {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "731708",
      "name": "prince da dhaba",
      "uuid": "1deaba58-3e40-4b79-ac25-2f03bb96f756",
      "city": "1",
      "area": "Ramamurthy nagar",
      "totalRatingsString": "",
      "cloudinaryImageId": "v1675667626/PC_Creative%20refresh/South_Indian_4.png",
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
},

{
  "cardType": "restaurant",
  "layoutAlignmentType": "VERTICAL",
  "data": {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "731701",
      "name": "prince da dhaba",
      "uuid": "1deaba58-3e40-4b79-ac25-2f03bb96f756",
      "city": "1",
      "area": "Ramamurthy nagar",
      "totalRatingsString": "",
      "cloudinaryImageId": "v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Idli.png",
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
},

{
  "cardType": "restaurant",
  "layoutAlignmentType": "VERTICAL",
  "data": {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "731703",
      "name": "prince da dhaba",
      "uuid": "1deaba58-3e40-4b79-ac25-2f03bb96f756",
      "city": "1",
      "area": "Ramamurthy nagar",
      "totalRatingsString": "",
      "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
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
},

{
  "cardType": "restaurant",
  "layoutAlignmentType": "VERTICAL",
  "data": {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "731705",
      "name": "prince da dhaba",
      "uuid": "1deaba58-3e40-4b79-ac25-2f03bb96f756",
      "city": "1",
      "area": "Ramamurthy nagar",
      "totalRatingsString": "",
      "cloudinaryImageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Pure_Veg.png",
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
},
]
 




const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">

        {
          resList.map((restaurant) => ( <RestaurentCard key={restaurant.data.data.id} resData={restaurant}/>)
        )}




    
      
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
