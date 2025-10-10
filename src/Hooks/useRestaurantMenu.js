import { useEffect, useState } from "react";
import { MENU_ITEM_TYPE_KEY, RESTAURANT_URL } from "../utils/constant";
import { swiggyCusineData } from "../utils/swiggyCusineData";

const useRestaurantMenu = (resId) => {
  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [menuCategories, setMenuCategories] = useState([]);

  useEffect(() => {
    getRestaurantInfo();
  }, [resId]);

  async function getRestaurantInfo() {
    try {
      // Use the correct API endpoint for individual restaurant menu

      const data = await fetch(RESTAURANT_URL);
      const jsonData = await data.json();
      const restaurants =
        jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;

      console.log(
        "jsonData",
        jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
      );

      const getRestDataFunc = restaurants.find((element) => {
        console.log("resId === element.info.id", resId, element.info.id);
        return resId === element.info.id;
      });

      console.log("Found restaurant:", getRestDataFunc);

      // Set restaurant info
      if (getRestDataFunc) {
        setRestaurant({ info: getRestDataFunc.info });
      }

      // Extract menu categories from swiggyCusineData for accordion
      console.log("Using swiggyCusineData for menu categories");
      const menuCategoriesFromSwiggy =
        swiggyCusineData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards
          ?.filter(
            (card) =>
              card?.card?.card?.["@type"] ===
                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
              card?.card?.card?.["@type"] ===
                "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
          )
          ?.map((card) => card.card.card) || [];

      console.log(
        "Menu Categories from swiggyCusineData:",
        menuCategoriesFromSwiggy
      );
      console.log("Menu Categories count:", menuCategoriesFromSwiggy.length);

      // Extract all menu items from categories
      const allMenuItems = [];
      menuCategoriesFromSwiggy.forEach((category) => {
        if (category.itemCards) {
          category.itemCards.forEach((itemCard) => {
            const item = itemCard.card?.info;
            if (item && !allMenuItems.find((x) => x.id === item.id)) {
              allMenuItems.push(item);
            }
          });
        }
        if (category.categories) {
          category.categories.forEach((subCategory) => {
            if (subCategory.itemCards) {
              subCategory.itemCards.forEach((itemCard) => {
                const item = itemCard.card?.info;
                if (item && !allMenuItems.find((x) => x.id === item.id)) {
                  allMenuItems.push(item);
                }
              });
            }
          });
        }
      });

      setMenuCategories(menuCategoriesFromSwiggy);
      setMenuItems(allMenuItems);
    } catch (error) {
      setMenuItems([]);
      setRestaurant(null);
      console.error("Error fetching restaurant data:", error);
    }
  }

  return { restaurant, menuItems, menuCategories };
};

export default useRestaurantMenu;
