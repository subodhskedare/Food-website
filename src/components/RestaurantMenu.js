import { useParams } from "react-router-dom"; // import useParams for read `resId`
import useRestaurantMenu from "../Hooks/useRestaurantMenu";
import {
  IMG_CDN_URL,
  ITEM_IMG_CDN_URL,
} from "../utils/constant";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams(); // call useParams and get value of restaurant id using object destructuring
  const { restaurant, menuItems } = useRestaurantMenu(resId);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Restaurant Header */}
      <div className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
            {/* Restaurant Image */}
            <div className="flex-shrink-0">
              <img
                className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover shadow-lg"
                src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
                alt={restaurant?.name}
              />
            </div>
            
            {/* Restaurant Details */}
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                {restaurant?.name}
              </h1>
              <p className="text-lg text-gray-600 mb-4">
                {restaurant?.cuisines?.join(", ")}
              </p>
              
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className={`px-4 py-2 rounded-full font-semibold flex items-center space-x-2 ${
                  restaurant?.avgRating < 4
                    ? 'bg-red-100 text-red-800'
                    : restaurant?.avgRating === "--"
                    ? 'bg-gray-100 text-gray-800'
                    : 'bg-green-100 text-green-800'
                }`}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>{restaurant?.avgRating}</span>
                </div>
                
                <div className="flex items-center text-gray-600">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{restaurant?.sla?.slaString}</span>
                </div>
                
                <div className="text-gray-600">
                  {restaurant?.costForTwoMessage}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Menu Header */}
          <div className="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Recommended</h2>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-white font-semibold">
                  {menuItems.length} ITEMS
                </span>
              </div>
            </div>
          </div>
          
          {/* Menu Items */}
          <div className="p-6">
            {menuItems.length > 0 ? (
              <div className="space-y-6">
                {menuItems.map((item) => (
                  <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200 border border-gray-100" key={item?.id}>
                    {/* Item Details */}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">
                        {item?.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                        {item?.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-orange-600">
                          {item?.price > 0
                            ? new Intl.NumberFormat("en-IN", {
                                style: "currency",
                                currency: "INR",
                              }).format(item?.price / 100)
                            : " "}
                        </span>
                      </div>
                    </div>
                    
                    {/* Item Image and Add Button */}
                    <div className="flex-shrink-0 relative">
                      {item?.imageId && (
                        <img
                          className="w-24 h-24 rounded-lg object-cover"
                          src={ITEM_IMG_CDN_URL + item?.imageId}
                          alt={item?.name}
                        />
                      )}
                      <button className="absolute -bottom-2 -right-2 bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                        ADD +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No Menu Items Available</h3>
                <p className="text-gray-500">This restaurant hasn't added their menu items yet.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;