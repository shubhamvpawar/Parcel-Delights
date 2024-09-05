import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { REST_DATA } from "../utils/constants";
import { FiSearch } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

const Body = () => {
  //Local State Variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  //Filtered Restaurant State Variable: To resolve the issue of nested filter/search
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  //useEffect
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(REST_DATA);

      if (!data.ok) {
        throw new Error("Network response was not ok");
      }

      const json = await data.json();

      setListOfRestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurant(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      // Handle CORS error
      if (error.name === "TypeError" && error.message === "Failed to fetch") {
        alert(
          "Failed to fetch data due to CORS error. Please use Allow CORS extension to bypass CORS restrictions and access Site: \n" +
            "- For Chrome: https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf\n" +
            "- For Firefox: https://addons.mozilla.org/en-US/firefox/addon/cors-everywhere/\n" +
            "- For Edge: https://microsoftedge.microsoft.com/addons/detail/cors-unblock/egnccfnpppnapkakgcbhfojbcdamigoh"
        );
      } else {
        // Handle other errors
        console.error("Error:", error);
      }
    }
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>Looks like you're offline! PLease check your internet connectionn</h1>
    );

  //Shimmer UI Logic ==> Conditional Rendering
  // if (listOfRestaurants.length === 0) {
  //     return <Shimmer />
  // }

  //Ternary Operator
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body mx-auto w-10/12 md:w-9/12">
      <div className="filter flex flex-col md:flex-row">
        <div className="search flex px-2 w-full md:w-1/2 mb-2 md:mb-0 md:mr-2">
          {/* We bind this search text value to the btn we created using useState */}
          <input
            type="search"
            className="border border-solid border-black rounded-lg focus:px-2 w-3/5 px-2 my-4"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-2 my-4 mx-2 rounded-lg font-semibold hover:bg-gray-200 hover:scale-90 w-2/5 flex items-center justify-center"
            onClick={() => {
              //Filter the restaurant cards and update the UI
              //Get Search Text
              // console.log(searchText);

              //Change the search box result to lowerCase so the render can happen even if lower case name is used e.g pizza is searched then also it should work for Name: Pizza
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            <FiSearch />
            Search
          </button>
        </div>
        {/* <div className="search  px-2 flex items-center w-1/2 justify-end">
                    <button className=" rounded-lg px-2 font-semibold hover:bg-gray-200 hover:scale-90"
                        onClick={() => {
                            //Filter Logic for top rated restaurannts
                            const filteredList = listOfRestaurants.filter(
                                (res) => res.info.avgRating >= 4
                            );
                            console.log(filteredList);
                            setListOfRestaurants(filteredList);
                        }}
                    >Top Rated Restaurants&#x1F50E;</button>
                </div> */}
        <div className="search  px-2 flex items-center w-full justify-start md:justify-end md:w-1/2">
          <button
            className="rounded-lg px-2 font-semibold hover:bg-gray-200 hover:scale-90 flex items-center justify-center"
            onClick={() => {
              //Filter Logic for top rated restaurannts
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating >= 4
              );
              console.log(filteredList);
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated
            <FaStar />
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap justify-between">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {" "}
            <RestaurantCard resData={restaurant} />{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
