
import { useEffect, useState } from "react";
import {
  MENU_ITEM_TYPE_KEY,
} from "../utils/constant";

const useRestaurantMenu = (resId) => {
    const [restaurant, setRestaurant] = useState(null);
    const [menuItems, setMenuItems] = useState([]);
    
    useEffect(() => {
        getRestaurantInfo();
    }, [resId]);
 
    async function getRestaurantInfo() {
        try {
            // Use the correct API endpoint for individual restaurant menu
            const response = await fetch(`https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&lat=21.1702401&lng=72.83106070000001&restaurantId=${resId}`);
            const json = await response.json();
      
            console.log("Restaurant API Response:", json);
      
            // Extract restaurant info from the menu API response
            const cards = json?.data?.cards;
            let restaurant = null;
            
            // Find restaurant info from the cards
            if (Array.isArray(cards)) {
                const restaurantCard = cards?.find(card => 
                    card?.card?.card?.info?.id === resId
                );
                if (restaurantCard?.card?.card?.info) {
                    restaurant = { info: restaurantCard.card.card.info };
                }
            }
            
            setRestaurant(restaurant);
      
            // Set menu item data
            const menuItemsData = json?.data?.cards?.find(x => x.groupedCard)?.
                                  groupedCard?.cardGroupMap?.REGULAR?.
                                  cards?.map(x => x.card?.card)?.
                                  filter(x => x['@type'] == MENU_ITEM_TYPE_KEY)?.
                                  map(x => x.itemCards).flat().map(x => x.card?.info) || [];
            
            console.log("Menu Items Data:", menuItemsData);
            
            const uniqueMenuItems = [];
            menuItemsData.forEach((item) => {
                if (item && !uniqueMenuItems.find(x => x.id === item.id)) {
                    uniqueMenuItems.push(item);
                }
            });
            setMenuItems(uniqueMenuItems);

        } catch (error) {
            setMenuItems([]);
            setRestaurant(null);
            console.error("Error fetching restaurant data:", error);
        }
    }

    return { restaurant, menuItems };
}

export default  useRestaurantMenu;