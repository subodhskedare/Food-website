import { useState } from "react";
import { ITEM_IMG_CDN_URL } from "../utils/constant";

const MenuAccordion = ({ categories }) => {
  const [expandedCategories, setExpandedCategories] = useState(new Set());

  // Debug logging
  console.log("MenuAccordion received categories:", categories);
  console.log("Categories count:", categories?.length);

  const toggleCategory = (categoryId) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
    } else {
      newExpanded.add(categoryId);
    }
    setExpandedCategories(newExpanded);
  };

  const renderMenuItem = (item) => (
    <div
      className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200 border border-gray-100"
      key={item?.id}
    >
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
  );

  const renderCategory = (category, level = 0) => {
    const isExpanded = expandedCategories.has(category.categoryId || category.title);
    const hasItems = category.itemCards && category.itemCards.length > 0;
    const hasSubCategories = category.categories && category.categories.length > 0;

    return (
      <div key={category.categoryId || category.title} className="mb-4">
        {/* Category Header */}
        <div
          className={`bg-gradient-to-r from-orange-500 to-red-500 px-6 py-4 cursor-pointer transition-all duration-200 hover:from-orange-600 hover:to-red-600 ${
            level > 0 ? "ml-4 rounded-lg" : "rounded-t-lg"
          }`}
          onClick={() => toggleCategory(category.categoryId || category.title)}
        >
          <div className="flex items-center justify-between">
            <h3 className={`text-white font-bold ${level > 0 ? "text-lg" : "text-xl"}`}>
              {category.title}
            </h3>
            <div className="flex items-center space-x-3">
              {hasItems && (
                <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-white font-semibold text-sm">
                    {category.itemCards.length} ITEMS
                  </span>
                </div>
              )}
              <div className="transform transition-transform duration-200">
                <svg
                  className={`w-6 h-6 text-white transition-transform duration-200 ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Category Content */}
        {isExpanded && (
          <div className="bg-white border-l-4 border-orange-500 shadow-lg">
            <div className="p-6">
              {/* Render subcategories if they exist */}
              {hasSubCategories && (
                <div className="space-y-4 mb-6">
                  {category.categories.map((subCategory) =>
                    renderCategory(subCategory, level + 1)
                  )}
                </div>
              )}

              {/* Render menu items */}
              {hasItems && (
                <div className="space-y-4">
                  {category.itemCards.map((itemCard) =>
                    renderMenuItem(itemCard.card?.info)
                  )}
                </div>
              )}

              {/* Show message if no items */}
              {!hasItems && !hasSubCategories && (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">
                    No Items Available
                  </h3>
                  <p className="text-gray-500">
                    This category doesn't have any items yet.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  // Safety check
  if (!categories || categories.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-12 h-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-600 mb-2">
          No Menu Categories Available
        </h3>
        <p className="text-gray-500">
          This restaurant hasn't added their menu categories yet.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {categories.map((category) => renderCategory(category))}
    </div>
  );
};

export default MenuAccordion;
