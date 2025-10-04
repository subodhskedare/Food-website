import { IMG_CDN_URL } from "../utils/constant";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  sla,
  costForTwo,
  avgRating,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group cursor-pointer">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={IMG_CDN_URL + cloudinaryImageId}
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <div
            className={`px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1 ${
              avgRating >= 4
                ? "bg-green-500 text-white"
                : avgRating >= 3
                ? "bg-yellow-500 text-white"
                : "bg-red-500 text-white"
            }`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>{avgRating}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1 group-hover:text-orange-500 transition-colors duration-200">
          {name}
        </h3>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {cuisines.join(", ")}
        </p>

        <div className="flex items-center text-gray-500 text-sm mb-3">
          <svg
            className="w-4 h-4 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span className="line-clamp-1">{areaName}</span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center text-gray-500">
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{sla.lastMileTravelString}</span>
          </div>

          <div className="text-gray-700 font-semibold">{costForTwo}</div>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};

export const isOpenFunc = () => {
  return (props) => {
    return (
      <div>
        <label className="absolute z-10, z-20, z-30, z-40, z-50 bg-black text-white m-2 p-2 rounded-lg ">
          IsOpen
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
