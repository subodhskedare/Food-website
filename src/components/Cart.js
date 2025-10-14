import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart, addItems, removeItems } from "../Redux/cartSlice";
import { ITEM_IMG_CDN_URL } from "../utils/constant";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleOnClickToRemoveItems = (item) => {
    console.log("handleOnClickToRemoveItems", item);
    dispatch(removeItems(item.id));
  };

  useEffect(() => {}, []);

  const renderMenuItem = (item, index) => (
    <div
      className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200 border border-gray-100"
      key={`${item?.id || "item"}-${index}`}
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
        <button
          className="absolute -bottom-2 -right-2 bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
          onClick={() => handleOnClickToRemoveItems(item)}
        >
          Remove +
        </button>
      </div>
    </div>
  );
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Cart Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Shopping Cart</h1>
        <button
          type="button"
          onClick={() => handleClearCart()}
          className="focus:outline-none text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 transition-colors duration-200"
        >
          Clear Cart
        </button>
      </div>

      {/* Cart Content */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100">
        <div className="p-6">
          {/* Render cart items */}
          {cartItems && cartItems.length > 0 ? (
            <div className="space-y-4">
              {cartItems.map((itemCard, index) => {
                // Handle different data structures
                const item = itemCard?.card?.info || itemCard;
                return renderMenuItem(item, index);
              })}
            </div>
          ) : (
            /* Show message if no items */
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-3">
                Your cart is empty
              </h3>
              <p className="text-gray-500 mb-6">
                Add some delicious items to get started!
              </p>
              <button
                onClick={() => window.history.back()}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
