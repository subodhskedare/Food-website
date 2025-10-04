import { RESTAURANT_URL } from "../utils/constant";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Hooks/useOnlineStatus";

const Body = () => {
  // useState: To create a state variable, searchText is local state variable
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const onlineStatus = useOnlineStatus()
  if(onlineStatus === false) return <h1>You look offline</h1>

  function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
      restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterData;
  }

  function filterDataTopRated(restaurants) {
    console.log("rating", restaurants[0].info?.avgRating);
    const filterData = restaurants.filter(
      (restaurant) => restaurant?.info?.avgRating > 4
    );
    return filterData;
  }

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_URL);
    const jsonData = await data.json();
    // console.log(jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants[0].info);

    setRestaurants(
      jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestaurants(
      jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Discover Amazing Food
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-orange-100">
            Order from your favorite restaurants and enjoy delicious meals
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                className="w-full px-6 py-4 text-lg rounded-full border-0 shadow-lg focus:ring-4 focus:ring-orange-300 focus:outline-none text-gray-800 placeholder-gray-500"
                placeholder="Search for restaurants, cuisines, or dishes..."
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
              />
              <button
                className="absolute right-2 top-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
                onClick={() => {
                  const data = filterData(searchText, restaurants);
                  setFilteredRestaurants(data);
                }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            className="bg-white hover:bg-orange-500 hover:text-white text-orange-500 font-semibold px-6 py-3 rounded-full border-2 border-orange-500 transition-all duration-200 shadow-md hover:shadow-lg flex items-center space-x-2"
            onClick={() => {
              const data = filterDataTopRated(restaurants);
              setRestaurants(data);
            }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>Top Rated</span>
          </button>
          
          <button
            className="bg-white hover:bg-red-500 hover:text-white text-red-500 font-semibold px-6 py-3 rounded-full border-2 border-red-500 transition-all duration-200 shadow-md hover:shadow-lg flex items-center space-x-2"
            onClick={() => {
              fetchData();
              setSearchText("");
            }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span>Clear Filters</span>
          </button>
        </div>
      </div>

      {/* Restaurant List */}
      {restaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              {filteredRestaurants.length} Restaurants Found
            </h2>
            <p className="text-gray-600">
              Discover amazing dining experiences near you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredRestaurants.map((restaurant) => {
              return (
                <Link
                  key={restaurant?.info?.id}
                  to={'/restaurant/' + restaurant?.info?.id}
                  className="group"
                >
                  <RestaurantCard
                    {...restaurant?.info}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;
