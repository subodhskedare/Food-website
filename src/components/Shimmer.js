import { shimmer_card_unit } from "./../utils/constant";

// Shimmer card to display with animation
const CardShimmer = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
      {/* Image shimmer */}
      <div className="h-48 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_2s_infinite]"></div>
      
      {/* Content shimmer */}
      <div className="p-6 space-y-4">
        {/* Title shimmer */}
        <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_2s_infinite] rounded-lg w-3/4"></div>
        
        {/* Tags shimmer */}
        <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_2s_infinite] rounded-lg w-full"></div>
        <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_2s_infinite] rounded-lg w-2/3"></div>
        
        {/* Location shimmer */}
        <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_2s_infinite] rounded-lg w-1/2"></div>
        
        {/* Bottom info shimmer */}
        <div className="flex justify-between items-center">
          <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_2s_infinite] rounded-lg w-1/3"></div>
          <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_2s_infinite] rounded-lg w-1/4"></div>
        </div>
      </div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Hero shimmer */}
      <div className="bg-gradient-to-r from-gray-200 to-gray-300 py-16 animate-pulse">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="h-16 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 bg-[length:200%_100%] animate-[shimmer_2s_infinite] rounded-lg w-3/4 mx-auto mb-6"></div>
          <div className="h-8 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 bg-[length:200%_100%] animate-[shimmer_2s_infinite] rounded-lg w-1/2 mx-auto mb-8"></div>
          <div className="h-12 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 bg-[length:200%_100%] animate-[shimmer_2s_infinite] rounded-full w-1/3 mx-auto"></div>
        </div>
      </div>

      {/* Filter shimmer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="h-12 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_2s_infinite] rounded-full w-32"></div>
          <div className="h-12 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_2s_infinite] rounded-full w-32"></div>
        </div>
      </div>

      {/* Restaurant cards shimmer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="mb-8">
          <div className="h-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_2s_infinite] rounded-lg w-1/3 mb-2"></div>
          <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_2s_infinite] rounded-lg w-1/4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {new Array(shimmer_card_unit).fill(0).map((element, index) => {
            return <CardShimmer key={index.toString() + 1} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Shimmer;