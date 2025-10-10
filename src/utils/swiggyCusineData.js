export const swiggyCusineData = {
  statusCode: 0,
  data: {
    statusMessage: "done successfully",
    cards: [
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
            text: "Sadguru Veg Diet - Station",
            headerStyling: {
              textColor: "text_Highest_Emphasis",
              textVariant: "header_H3_Black",
            },
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.gandalf.widgets.v2.RestaurantBlTab",
            tabs: [
              {
                id: "Order Online",
                title: "Order Online",
              },
            ],
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "49298",
              name: "Sadguru Veg Diet - Station",
              city: "Mumbai",
              slugs: {
                restaurant: "sadguru-veg-diet-nr-chembur-station-chembur",
                city: "mumbai",
              },
              uniqueId: "e51e6528-4859-48c8-8fed-e84c17dc2d76",
              cloudinaryImageId:
                "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/19/46e197e7-cb6b-412e-9a9d-997c44d8e208_49298.jpg",
              locality: "Nr Chembur Station",
              areaName: "Near Chembur Station",
              costForTwo: "65000",
              costForTwoMessage: "₹650 for two",
              cuisines: ["South Indian", "North Indian"],
              avgRating: 4.6,
              veg: true,
              feeDetails: {
                restaurantId: "49298",
                fees: [{}],
              },
              parentId: "352284",
              avgRatingString: "4.6",
              totalRatingsString: "19K+ ratings",
              sla: {
                restaurantId: "49298",
                deliveryTime: 33,
                minDeliveryTime: 30,
                maxDeliveryTime: 35,
                lastMileTravel: 5,
                serviceability: "SERVICEABLE",
                stressFactor: 1,
                rainMode: "RAIN_MODE_NONE",
                longDistance: "LONG_DISTANCE_NOT_LONG_DISTANCE",
                zoneId: 231,
                slaString: "30-35 MINS",
                lastMileTravelString: "5.0 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2025-10-09 23:59:00",
                visibility: true,
                opened: true,
                restaurantClosedMeta: {},
              },
              aggregatedDiscountInfo: {
                header: "Freedel",
                shortDescriptionList: [
                  {
                    meta: "Freedel",
                    discountType: "FREE_DELIVERY",
                    operationType: "RESTAURANT",
                  },
                  {
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                ],
                descriptionList: [
                  {
                    meta: "Freedel",
                    discountType: "FREE_DELIVERY",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "10% off upto ₹100|Use RUPAYCC100 Above ₹600",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                ],
                visible: true,
              },
              badges: {},
              slugString: "sadguru-veg-diet-nr-chembur-station-chembur",
              isOpen: true,
              labels: [
                {
                  title: "Timings",
                  message: "null",
                },
                {
                  title: "Address",
                  message:
                    "Janata Market, Near Chembur Station, Chembur, Mumbai",
                },
                {
                  title: "Cuisines",
                  message: "South Indian,North Indian",
                },
              ],
              totalRatings: 19000,
              aggregatedDiscountInfoV2: {
                header: "Freedel",
                shortDescriptionList: [
                  {
                    meta: "Freedel",
                    discountType: "FREE_DELIVERY",
                    operationType: "RESTAURANT",
                  },
                  {
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                ],
                descriptionList: [
                  {
                    meta: "Freedel",
                    discountType: "FREE_DELIVERY",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "10% off upto ₹100|Use RUPAYCC100 Above ₹600",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                ],
                couponDetailsCta: "View coupon details",
              },
              type: "F",
              headerBanner: {
                url: "swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/49298",
              },
              generalPurposeInfoListV2: [
                {
                  cta: {
                    info: {
                      recordings: {},
                    },
                    linkCta: {},
                  },
                },
              ],
              ratingSlab: "RATING_SLAB_5",
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
                commsStyling: {},
              },
              hasBestsellerItems: true,
              cartOrderabilityNudgeBanner: {
                parameters: {},
                presentation: {},
              },
              latLong: "19.062237,72.90051300000005",
              backgroundImageOverlayInfo: {},
              featuredSectionInfo: {},
              dishStyle: {
                socialMarkerStyle: [
                  {
                    socialMarkerType: "SOCIAL_MARKER_TYPE_HIGH_PROTEIN",
                    title: "Protein Rich",
                    textStyle: "FONT_NAME_V2_BODY3_NEUTRAL_BOLD",
                    textColor: "highlight",
                  },
                  {
                    socialMarkerType: "SOCIAL_MARKER_TYPE_BESTSELLER",
                    title: "Bestseller",
                    textStyle: "FONT_NAME_V2_BODY3_NEUTRAL_BOLD",
                    textColor: "color_swiggy_one",
                  },
                ],
              },
            },
            analytics: {},
          },
          relevance: {
            type: "RELEVANCE_TYPE_CHECK_ORDERABILITY_ON_ITEM_ADD",
            sectionId: "POP_UP_CROUTON_MENU",
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            layout: {
              rows: 1,
              columns: 2,
              horizontalScrollEnabled: true,
              itemSpacing: 12,
              lineSpacing: 10,
              widgetPadding: {},
              containerStyle: {
                containerPadding: {
                  left: 10,
                  right: 10,
                  bottom: 16,
                },
              },
            },
            id: "offerCollectionWidget_UX4",
            gridElements: {
              infoWithStyle: {
                "@type":
                  "type.googleapis.com/swiggy.presentation.food.v2.OfferInfoWithStyle",
                offers: [
                  {
                    info: {
                      header: "10% OFF UPTO ₹100",
                      offerTagColor: "#E46D47",
                      logoBottom:
                        "MARKETING_BANNERS/IMAGES/OFFERS/2025/8/20/c812c78a-7809-4ffa-9eea-59482c5bac46_RuPay.png",
                      offerIds: ["aad6b5b0-cd9c-4e28-b967-f72aae66b6f3"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE RUPAYCC100",
                      description: "ABOVE ₹600",
                      offerType: "offers",
                      restId: "49298",
                      offerLogo:
                        "MARKETING_BANNERS/IMAGES/OFFERS/2025/8/20/c812c78a-7809-4ffa-9eea-59482c5bac46_RuPay.png",
                      descriptionTextColor: "#7302060C",
                      primaryDescription: "USE RUPAYCC100",
                    },
                    cta: {
                      type: "OFFER_HALF_CARD",
                    },
                  },
                  {
                    info: {
                      header: "FLAT ₹75 OFF",
                      offerTagColor: "#E46D47",
                      logoBottom:
                        "MARKETING_BANNERS/IMAGES/OFFERS/2025/10/2/73a4b86c-9570-4dad-a096-0f3bedd97c63_HDFC.png",
                      offerIds: ["1a119b1e-14c8-485d-8821-c345a6b3bbc4"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "NO CODE REQUIRED",
                      description: "ABOVE ₹600",
                      offerType: "offers",
                      restId: "49298",
                      offerLogo:
                        "MARKETING_BANNERS/IMAGES/OFFERS/2025/10/2/73a4b86c-9570-4dad-a096-0f3bedd97c63_HDFC.png",
                      descriptionTextColor: "#7302060C",
                      primaryDescription: "NO CODE REQUIRED",
                    },
                    cta: {
                      type: "OFFER_HALF_CARD",
                    },
                  },
                ],
                habitMilestoneInfo: {
                  callout: {},
                },
                loyaltyDiscoverPresentationInfo: {
                  logoCtx: {},
                },
              },
            },
          },
        },
      },
      {
        groupedCard: {
          cardGroupMap: {
            REGULAR: {
              cards: [
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge",
                      isPureVeg: true,
                      badges: {},
                      vegOnlyDetails: {
                        imageId: "AutoVegOnly_qkjowj",
                        title: "Showing only vegetarian options.",
                        description:
                          "Tap on the VEG ONLY button to turn off the setting",
                      },
                      topRatedFilter: {
                        attributes: {
                          displayText: "Ratings 4.0+",
                        },
                      },
                      kidsCategoryFilter: {
                        attributes: {
                          displayText: "Kids Favourites",
                          tooltip: {
                            enabled: true,
                            displayText:
                              "Kids Favourites Filter applied. Remove this filter to see the full Menu.",
                          },
                        },
                      },
                      vegFilter: {
                        attributes: {
                          displayText: "VEG",
                        },
                      },
                      nonvegFilter: {
                        attributes: {
                          displayText: "NONVEG",
                        },
                      },
                    },
                    relevance: {
                      type: "RELEVANCE_TYPE_ON_MENU_FILTER_TOGGLED",
                      sectionId: "MENU_FILTER_TOGGLE",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Recommended",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "11413808",
                              name: "Paneer Chilli Dosa",
                              category: "South Indian Treasures",
                              description:
                                "A delicious South Indian delicacy with a spicy twist, combining crispy dosa filled with flavorful paneer and vegetables, perfect for a satisfying meal. Served with chutney and sambar.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/9/15/876c3fe4-23a5-45f8-8739-ebc0d79537e1_4295e87e-78da-4c7d-8ec6-a1bc28896349.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 43000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "18 ratings",
                                  ratingCountV2: "18",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "56497028",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "11413861",
                              name: "Ghee Sada Dosa",
                              category: "South Indian Treasures",
                              description:
                                "A traditional South Indian crepe made with clarified butter, served plain without any filling. Enjoy the crispy texture and rich flavor of this classic dish. Served with chutney and sambar.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/9/15/c2d95fd2-719c-43b8-b540-9c70d8830e91_0c45dd1b-f8f8-45ac-924b-5099727cf981.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 15500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "182 ratings",
                                  ratingCountV2: "182",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "55059406",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "11413793",
                              name: "Pav Bhaji Dosa",
                              category: "South Indian Treasures",
                              description:
                                "A delicious fusion of fluffy dosa filled with a spicy and flavorful mixture of mashed vegetables, perfect for a satisfying meal. Served with chutney and sambar.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/9/15/a25ce7fb-641c-413e-bb10-cee21e483a8f_a2930119-dab2-42b3-8b8f-e5594512a830.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 27500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "12 ratings",
                                  ratingCountV2: "12",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "55896536",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "11413884",
                              name: "Onion Rava Sada Dosa",
                              category: "South Indian Treasures",
                              description:
                                "A crispy South Indian crepe made with semolina and topped with a flavorful mixture of onions and spices. Perfect for a delicious and satisfying meal. Served with chutney and sambar.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/9/15/a3db60b5-95da-48be-bfe3-bcccdf06da0e_b77c4388-d684-4c5f-8674-1dfbcc0285e3.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 21000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "84 ratings",
                                  ratingCountV2: "84",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "55708784",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "11413760",
                              name: "Cheese Dosa",
                              category: "South Indian Treasures",
                              description:
                                "A crispy South Indian crepe filled with a gooey, melted cheese filling, perfect for a savory and indulgent breakfast or snack. Served with chutney and sambar.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/9/15/06ec1722-1cba-4c2a-9595-ef54e9922637_e9c16ae8-b508-48ef-84b8-354b38c38ef2.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 21500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "87 ratings",
                                  ratingCountV2: "87",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "55526195",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "11413835",
                              name: "Rava Sada Dosa",
                              category: "South Indian Treasures",
                              description:
                                "A traditional South Indian crepe made with semolina and served plain, perfect for a light and crispy breakfast or snack. Served with chutney and sambar.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/9/15/45ba920e-755d-4299-8510-18dfebb9e7fc_132a8d58-c253-4d6e-951e-33bc028711cf.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 17000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "209 ratings",
                                  ratingCountV2: "209",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "54965783",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "11413871",
                              name: "Ghee Rava Sada Dosa",
                              category: "South Indian Treasures",
                              description:
                                "A traditional South Indian crepe made with semolina, clarified butter, and spices. Crispy on the outside and soft on the inside, perfect for breakfast or a snack. Served with chutney and sambar.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/9/15/06dc288e-34b7-4e88-89b9-c2761feac62b_e26cb865-2a46-4abe-bba9-b1053b8f1fc2.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 19500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "26 ratings",
                                  ratingCountV2: "26",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "55059405",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "11413845",
                              name: "Mysore Sada Dosa",
                              category: "South Indian Treasures",
                              description:
                                "A traditional South Indian crepe made with a crispy golden-brown exterior and a flavorful spiced potato filling, perfect for breakfast or a light meal. Served with chutney and sambar.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/9/15/adc88cda-eecb-4a22-8c57-5c7c62f2d99b_22329df4-349c-49da-b341-092f8493b7ba.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 16000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "133 ratings",
                                  ratingCountV2: "133",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "55012204",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "11413879",
                              name: "Mysore Rava Dosa",
                              category: "South Indian Treasures",
                              description:
                                "A South Indian delicacy made with semolina, rice flour, and spices, Mysore Rava Dosa is a crispy and flavorful crepe that is perfect for breakfast or as a snack. Served with chutney and sambar.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/9/15/d5043f5d-5f8f-4b21-a0c7-9cb9470a76a3_f9995770-93f2-43a7-8b2a-46cd6e0cb111.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 19500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "29 ratings",
                                  ratingCountV2: "29",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "55896535",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "149489728",
                              name: "Cheese Paper Sada Dosa",
                              category: "South Indian Treasures",
                              description:
                                "Thin, crispy South Indian rice crepe filled with a savory mixture of spiced potatoes and onions. Served with chutney and sambar.",
                              inStock: 1,
                              isVeg: 1,
                              price: 42500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              parentId: "88697695",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "11413931",
                              name: "Onion Uttapam",
                              category: "South Indian Treasures",
                              description:
                                "A South Indian delicacy made with a savory batter of rice and lentils, topped with caramelized onions and served with coconut chutney and sambar.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/9/15/7c5fde36-8dce-486c-8313-2709e4457d25_09cd87bf-be2e-4a4e-952f-0496007f9ed3.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 15500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "390 ratings",
                                  ratingCountV2: "390",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "55012208",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "96269547",
                              name: "Butter Soft Uttapam",
                              category: "South Indian Treasures",
                              description:
                                "Delicious South Indian pancake made with a soft and fluffy batter, cooked to perfection with a generous amount of butter for a rich and savory flavor. Served with chutney and sambar.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/9/15/970837b5-874e-43f0-a4b0-75d3588e73b4_cccb8f9d-a7f0-4545-9201-bd0798a0162c.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 21500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "5 ratings",
                                  ratingCountV2: "5",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "55303466",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "11413938",
                              name: "Tomato Onion Uttapam",
                              category: "South Indian Treasures",
                              description:
                                "A savory South Indian pancake topped with a flavorful mix of tomatoes and onions, perfect for a delicious and satisfying breakfast or snack. Served with chutney and sambar.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/9/15/74d8562b-e486-4305-ad60-1ee14131f0f2_06df7f07-839e-4dbd-addf-0992ea912191.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 18000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.9",
                                  ratingCount: "209 ratings",
                                  ratingCountV2: "209",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "54965792",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "11413912",
                              name: "Cheese Onion Uttapam",
                              category: "South Indian Treasures",
                              description:
                                "A savory South Indian pancake topped with a generous amount of melted cheese and caramelized onions, creating a delicious and satisfying meal option. Served with chutney and sambar.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/9/15/fec71713-600e-4bb5-ac36-729e6000a56e_fa872230-4d5b-4775-9721-594db2a3faff.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 29000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.9",
                                  ratingCount: "31 ratings",
                                  ratingCountV2: "31",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "56496990",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "96269548",
                              name: "Podi Onion Uttapam",
                              category: "South Indian Treasures",
                              description:
                                "A savory South Indian pancake topped with a flavorful blend of spices, onions, and lentil powder, perfect for a delicious and satisfying meal. Served with chutney and sambar.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/9/15/3dffaa52-0994-4fa9-92bb-07880238e252_594b1ab9-1518-460a-8e93-a262e3a9f8b9.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 21000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              parentId: "55059415",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "11413923",
                              name: "Cheese Uttapam",
                              category: "South Indian Treasures",
                              description:
                                "A savory South Indian pancake topped with a generous amount of melted cheese, creating a delicious and comforting meal that is perfect for breakfast or brunch. Served with chutney and sambar.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/9/15/74151158-c9b6-4c09-a742-0dbaac5c0207_2842bbb4-1f54-4860-9388-696db18d659d.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 22000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "4 ratings",
                                  ratingCountV2: "4",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "55390955",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "149489914",
                              name: "Steamed Idli (3 Pcs)",
                              category: "South Indian Treasures",
                              description:
                                "Soft and fluffy South Indian delicacy made from fermented rice and lentil batter, served in a set of three pieces. Served with coconut chutney and sambar.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/9/15/8b3bdb72-39a0-49ba-bd53-b4229ce9bcd0_0abfb099-d5b5-4820-98a6-2d45482f66bd.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 10000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "116 ratings",
                                  ratingCountV2: "116",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "88697812",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "149489749",
                              name: "Sabudana Vada (2 Pcs)",
                              category: "South Indian Treasures",
                              description:
                                "Crispy and flavorful deep-fried snack made from soaked sabudana, potatoes, and spices. Perfect for a light and tasty treat. Served With Sweet Lassi.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/9/15/bfae7e25-82be-4f17-a76c-d961afef7fd7_b637fa2a-1f3c-44a4-8558-b91fb91d5934.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 10500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "47 ratings",
                                  ratingCountV2: "47",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "88697790",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "149489833",
                              name: "Dahi Vada (2 Pcs)",
                              category: "South Indian Treasures",
                              description:
                                "Soft lentil dumplings soaked in creamy yogurt and topped with tangy tamarind chutney and spicy mint sauce. A popular Indian street food snack.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/9/15/f6fc6b58-7fb5-484f-adbb-2db16d590df6_abb452f1-aab6-4772-a096-3d14fb176c1a.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 17500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "20 ratings",
                                  ratingCountV2: "20",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "88697704",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "149489755",
                              name: "Butter Idli (3 Pcs)",
                              category: "South Indian Treasures",
                              description:
                                "Soft and fluffy idlis made with a generous amount of butter, perfect for a delicious and comforting South Indian breakfast or snack. Served with chutney and sambar.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/9/15/307974ef-cc39-4b06-a83e-c1c37d0f54ff_8e059e65-02f5-4944-8b97-77c59dc5e2ca.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 13500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              parentId: "88697692",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      type: "CATEGORY_TYPE_RECOMMENDED",
                      subtitleSuffix: {},
                      categoryId: "-1",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      title: "Flavors of India",
                      categories: [
                        {
                          title: "Chef Recommended Signatures",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "153536339",
                                  name: "Veg Makhanwala[500gm]",
                                  category: "Flavors of India",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 36500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "4 ratings",
                                      ratingCountV2: "4",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "91374867",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489840",
                                  name: "Veg Shahi Handi (750 Ml)",
                                  category: "Flavors of India",
                                  description:
                                    "A rich and creamy vegetable curry cooked in a traditional Indian style, served in a royal handi. Perfect for those who love indulgent and flavorful dishes.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/92794282-e228-47ed-b21c-91cd4602a772_29d35451-0035-4d36-8426-3c70d10ad6ae.jpg_compressed",
                                  isVeg: 1,
                                  price: 60000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.5",
                                      ratingCount: "3 ratings",
                                      ratingCountV2: "3",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697845",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489815",
                                  name: "Veg Handi (750 Ml)",
                                  category: "Flavors of India",
                                  description:
                                    "A delicious medley of fresh vegetables cooked in a rich and aromatic gravy, served in a traditional handi pot. Perfect for sharing with friends and family.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/52dd47af-0cd1-4dd9-bc3c-ec4ee414e209_430d1977-ac07-4e3d-b53d-69ff7e8cc2a1.jpg_compressed",
                                  isVeg: 1,
                                  price: 47000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.6",
                                      ratingCount: "13 ratings",
                                      ratingCountV2: "13",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697829",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489819",
                                  name: "Veg Lajawab (750 Ml)",
                                  category: "Flavors of India",
                                  description:
                                    "A delicious and flavorful vegetarian dish in a generous 750 ml portion size, perfect for satisfying your hunger and tantalizing your taste buds.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/e6f214c2-74b7-4cfa-b053-014b89d50472_fcec9fb0-abcd-459f-813f-c2bdea04ff22.jpg_compressed",
                                  isVeg: 1,
                                  price: 47000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "5 ratings",
                                      ratingCountV2: "5",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697834",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489808",
                                  name: "Kaju Mushroom Masala (500 Ml)",
                                  category: "Flavors of India",
                                  description:
                                    "Creamy and rich cashew-based gravy with tender mushrooms, simmered to perfection in a blend of aromatic spices. Served in a 500 ml container.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/09d520ae-342d-48ab-a18b-545c7fbc63bf_fa3ab565-7a2b-4f28-afe1-57494b9adc60.jpg_compressed",
                                  isVeg: 1,
                                  price: 47000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  parentId: "88697726",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489850",
                                  name: "Veg Kadai (500 Ml)",
                                  category: "Flavors of India",
                                  description:
                                    "A delicious and aromatic Indian curry made with a medley of fresh vegetables, cooked in a rich and flavorful tomato-based gravy. Perfect for pairing with rice or bread.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/50aff726-9cb5-4cea-ba3c-da681ae86e0a_eb8edcb3-3c9f-46fe-90b6-d6fc958b8ca8.jpg_compressed",
                                  isVeg: 1,
                                  price: 43000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.9",
                                      ratingCount: "7 ratings",
                                      ratingCountV2: "7",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697832",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489786",
                                  name: "Mushroom Masala (500 Ml)",
                                  category: "Flavors of India",
                                  description:
                                    "A rich and flavorful curry made with a blend of spices and fresh mushrooms, perfect for pairing with rice or bread. Enjoy this hearty dish in a generous 500 ml portion.",
                                  isVeg: 1,
                                  price: 43500,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "3 ratings",
                                      ratingCountV2: "3",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697746",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489825",
                                  name: "Veg Jalfrezi (500 Ml)",
                                  category: "Flavors of India",
                                  description:
                                    "A delicious and flavorful mix of assorted vegetables cooked in a spicy and tangy tomato-based gravy, perfect for a satisfying meal.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/989283ea-1617-4e1a-892e-1c1f9cd061f8_8db1ca9b-6e3f-473f-85ad-d5571e40f740.jpg_compressed",
                                  isVeg: 1,
                                  price: 41000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.8",
                                      ratingCount: "4 ratings",
                                      ratingCountV2: "4",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697831",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489803",
                                  name: "Spicy Veg Chilli Milli (500 Ml)",
                                  category: "Flavors of India",
                                  description:
                                    "A flavorful and spicy vegetarian chili made with a mix of assorted vegetables, beans, and spices, perfect for a hearty and satisfying meal.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/7875558f-e65f-418a-82c9-0375a467edf2_a97f40b6-04d4-4681-801e-e76dd87195c7.jpg_compressed",
                                  isVeg: 1,
                                  price: 41000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.0",
                                      ratingCount: "7 ratings",
                                      ratingCountV2: "7",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697807",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489788",
                                  name: "Sarso Ka Saag (500 Ml)",
                                  category: "Flavors of India",
                                  description:
                                    "A traditional Punjabi dish made with mustard greens, spinach, and spices, simmered to perfection in a rich and flavorful gravy. Enjoy with makki ki roti.",
                                  isVeg: 1,
                                  price: 43500,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.9",
                                      ratingCount: "5 ratings",
                                      ratingCountV2: "5",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697792",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489827",
                                  name: "Spicy Veg Hyderabadi (500 Ml)",
                                  category: "Flavors of India",
                                  description:
                                    "A flavorful and aromatic dish from Hyderabad, this spicy veg curry is perfect for those who enjoy a bit of heat in their meals. Enjoy it with rice or bread.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/7d303e43-8058-4aed-8961-f2c6f9de60d6_8f780f13-c470-43a7-b237-8e82b3cde365.jpg_compressed",
                                  isVeg: 1,
                                  price: 41000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.4",
                                      ratingCount: "3 ratings",
                                      ratingCountV2: "3",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697808",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489778",
                                  name: "Kaju Curry (500 Ml)",
                                  category: "Flavors of India",
                                  description:
                                    "Creamy and rich curry made with cashews, onions, and aromatic spices. Perfect for pairing with rice or naan for a satisfying meal.",
                                  isVeg: 1,
                                  price: 43000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.0",
                                      ratingCount: "5 ratings",
                                      ratingCountV2: "5",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697724",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489821",
                                  name: "Spicy Veg Tawa (500 Ml)",
                                  category: "Flavors of India",
                                  description:
                                    "A flavorful blend of assorted vegetables cooked on a sizzling hot tawa with a fiery kick of spices, perfect for those who enjoy a bit of heat in their meal.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/73f77f39-259e-4a7b-a7f0-360f3a7e5754_1ec12693-6722-4b21-a102-ebfb1c61cf5b.jpg_compressed",
                                  isVeg: 1,
                                  price: 43000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  parentId: "88697811",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489791",
                                  name: "Spicy Veg Jaipuri (500 Ml)",
                                  category: "Flavors of India",
                                  description:
                                    "A flavorful and aromatic Indian curry dish with a mix of fresh vegetables cooked in a rich and spicy gravy, perfect for pairing with rice or bread.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/19/da185fe5-2cbe-43b3-ac6b-fdb55051769c_96ce78b3-ecec-4ff4-b9dd-5607acc9d28a.jpg",
                                  isVeg: 1,
                                  price: 41000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "4 ratings",
                                      ratingCountV2: "4",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697809",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489795",
                                  name: "Spicy Veg Kolhapuri (500 Ml)",
                                  category: "Flavors of India",
                                  description:
                                    "A flavorful and aromatic Indian curry made with a medley of vegetables cooked in a spicy and tangy gravy, perfect for pairing with rice or bread.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/16/aafc3919-5cf5-489e-b6a1-f1d070f43d08_e2a9caa8-c38b-493c-aab4-f73a18284ab7.jpg",
                                  isVeg: 1,
                                  price: 36500,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.5",
                                      ratingCount: "32 ratings",
                                      ratingCountV2: "32",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697810",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489781",
                                  name: "Chana Masala (500 Ml)",
                                  category: "Flavors of India",
                                  description:
                                    "A flavorful and aromatic Indian dish made with chickpeas cooked in a spicy tomato-based sauce. Perfect for pairing with rice or naan bread.",
                                  isVeg: 1,
                                  price: 34500,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.7",
                                      ratingCount: "4 ratings",
                                      ratingCountV2: "4",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697693",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "52389339",
                        },
                        {
                          title: "Kofta",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "157938505",
                                  name: "Malai Kofta(sweet",
                                  category: "Flavors of India",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 43500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.5",
                                      ratingCount: "130 ratings",
                                      ratingCountV2: "130",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "55257346",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489835",
                                  name: "Paneer Kofta Curry (500 Ml)",
                                  category: "Flavors of India",
                                  description:
                                    "Creamy and flavorful curry made with soft paneer koftas simmered in a rich tomato-based gravy. Perfect for pairing with rice or naan for a satisfying meal.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/c31b72fb-ec5f-4e3a-a8c4-c5155c9723d0_9d06e93c-d329-4910-8b98-1ee5cf09024f.jpg_compressed",
                                  isVeg: 1,
                                  price: 51000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.3",
                                      ratingCount: "4 ratings",
                                      ratingCountV2: "4",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697762",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489837",
                                  name: "Veg Kofta Curry (500 Ml)",
                                  category: "Flavors of India",
                                  description:
                                    "Delicious vegetarian kofta curry in a rich and flavorful gravy, perfect for pairing with rice or naan. Satisfying and comforting meal option.",
                                  isVeg: 1,
                                  price: 41500,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  parentId: "88697833",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "52389368",
                        },
                        {
                          title: "Paneer Delights",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489872",
                                  name: "Paneer Maratha (750 Ml)",
                                  category: "Flavors of India",
                                  description:
                                    "A rich and creamy Indian curry made with succulent chunks of paneer cooked in a spicy and flavorful tomato-based gravy. Best enjoyed with steamed rice or naan.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/f42066cf-b8cd-40a8-9a34-d4fcf473523a_6c2e6c25-9216-4629-b960-764b17c17640.jpg_compressed",
                                  isVeg: 1,
                                  price: 60000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  parentId: "88697768",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489800",
                                  name: "Paneer Handi (750 Ml)",
                                  category: "Flavors of India",
                                  description:
                                    "Creamy and flavorful curry made with chunks of cottage cheese cooked in a rich tomato-based gravy, perfect to be enjoyed with naan or rice.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/19/825b9462-57b0-41be-b6f1-8e6de127c9fd_c7c0b425-4835-4a50-ba79-99a883c11ced.jpg",
                                  isVeg: 1,
                                  price: 56000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.6",
                                      ratingCount: "5 ratings",
                                      ratingCountV2: "5",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697759",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489722",
                                  name: "Spicy Paneer Tikka Masala (500 Ml)",
                                  category: "Flavors of India",
                                  description:
                                    "Deliciously spiced paneer cooked in a rich and creamy tomato-based gravy, perfect for those who love a bit of heat in their meal. Enjoy with rice or naan.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/16/65fc6429-ed59-411c-ac7d-a8e757b98621_7f405b7b-c57d-4f76-8cfc-efd458048598.jpg",
                                  isVeg: 1,
                                  price: 50000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.0",
                                      ratingCount: "16 ratings",
                                      ratingCountV2: "16",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697806",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489729",
                                  name: "Paneer Lazeez (750 Ml)",
                                  category: "Flavors of India",
                                  description:
                                    "Creamy and flavorful dish made with succulent cubes of paneer cooked in a rich and aromatic gravy. Perfect for pairing with naan or rice.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/617f1276-9ecb-4547-8c4c-ef8297a20961_cbe1e47a-2e73-4057-b44a-bcadf40227ae.jpg_compressed",
                                  isVeg: 1,
                                  price: 52500,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.8",
                                      ratingCount: "19 ratings",
                                      ratingCountV2: "19",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697765",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489891",
                                  name: "Paneer Kadai (500 Ml)",
                                  category: "Flavors of India",
                                  description:
                                    "A rich and flavorful Indian dish made with chunks of paneer cooked in a spicy tomato-based gravy, perfect to be enjoyed with naan or rice.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/3c7b4818-af88-4271-b3a6-c1e6476e40a4_d2c963fe-0057-4b52-98df-5dbdfb4666ab.jpg_compressed",
                                  isVeg: 1,
                                  price: 50000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "6 ratings",
                                      ratingCountV2: "6",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697760",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489763",
                                  name: "Paneer Butter Masala (500 Ml)",
                                  category: "Flavors of India",
                                  description:
                                    "Creamy and rich gravy made with succulent cubes of cottage cheese cooked in a flavorful blend of spices, perfect to pair with naan or rice.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/f6169c92-2d94-422c-b75e-f8cb59dd82a7_eaa87bc9-e239-48b0-8501-91d799b6b069.jpg_compressed",
                                  isVeg: 1,
                                  price: 48000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.2",
                                      ratingCount: "22 ratings",
                                      ratingCountV2: "22",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697754",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489880",
                                  name: "Spicy Paneer Tawa (500 Ml)",
                                  category: "Flavors of India",
                                  description:
                                    "Delicious chunks of paneer cooked with a blend of spices on a sizzling tawa, perfect for those who enjoy a spicy kick in their meal.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/924ff665-6f5f-422d-8024-0215c34c07a6_7a231b0c-3893-4314-888a-702206c4fd8b.jpg_compressed",
                                  isVeg: 1,
                                  price: 50000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  parentId: "88697804",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489726",
                                  name: "Paneer Palak (500 Ml)",
                                  category: "Flavors of India",
                                  description:
                                    "Creamy spinach curry with chunks of soft cottage cheese, simmered in aromatic spices. Served in a generous portion of 500 ml. Perfect for a hearty meal.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/28f29a6d-590b-47f2-9250-00b693bc5697_0764361d-2a58-47a4-83f5-3c38b9da9106.jpg_compressed",
                                  isVeg: 1,
                                  price: 48000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.1",
                                      ratingCount: "4 ratings",
                                      ratingCountV2: "4",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697773",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489727",
                                  name: "Spicy Paneer Kolhapuri (500 Ml)",
                                  category: "Flavors of India",
                                  description:
                                    "Tender paneer cooked in a fiery blend of spices and rich tomato gravy, perfect for those who crave a bold and flavorful Indian dish.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/30850d5b-e579-4492-8606-63bdd479d59e_277c20e4-2ab2-4358-aefe-07e9318b0f8c.jpg_compressed",
                                  isVeg: 1,
                                  price: 49000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.2",
                                      ratingCount: "8 ratings",
                                      ratingCountV2: "8",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697803",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489760",
                                  name: "Paneer Bhurji (500 Ml)",
                                  category: "Flavors of India",
                                  description:
                                    "A delicious Indian dish made with crumbled paneer cooked with onions, tomatoes, and spices. Perfect for a quick and flavorful meal.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/7efdce46-6b38-4e2f-8f7b-24df518ad9ee_5630dc5d-ca3c-41db-ac55-ee72c511f6b7.jpg_compressed",
                                  isVeg: 1,
                                  price: 48000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  parentId: "88697752",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489776",
                                  name: "Sweet Paneer Makhanwala (500 Ml)",
                                  category: "Flavors of India",
                                  description:
                                    "Creamy and rich gravy made with succulent paneer pieces cooked in a sweet and tangy tomato-based sauce. Perfect to pair with naan or rice.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/e083c607-07cd-4ddf-97a1-848608d20571_f22988a6-68e0-437c-ac1b-d7eb1982cfb9.jpg_compressed",
                                  isVeg: 1,
                                  price: 48000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "4 ratings",
                                      ratingCountV2: "4",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697817",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489697",
                                  name: "Paneer Kaju Curry (500 Ml)",
                                  category: "Flavors of India",
                                  description:
                                    "Creamy curry made with soft paneer and crunchy cashews, simmered in a rich and flavorful sauce. Perfect for pairing with rice or naan.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/16/cd8d822f-6a43-497f-88b9-e8bfdb83c4ea_9a9d285e-4917-401c-8322-55cea8667876.jpg",
                                  isVeg: 1,
                                  price: 47500,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.4",
                                      ratingCount: "3 ratings",
                                      ratingCountV2: "3",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697761",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489754",
                                  name: "Paneer Matar (500 Ml)",
                                  category: "Flavors of India",
                                  description:
                                    "A delicious Indian dish made with soft cubes of paneer cooked in a flavorful gravy with green peas. Perfect to pair with rice or naan for a satisfying meal.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/a56cfb6d-1598-4dd7-9fb6-3bfe67cd1e86_378feaf6-3db5-4f28-ba5e-c5822228e028.jpg_compressed",
                                  isVeg: 1,
                                  price: 47000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "4 ratings",
                                      ratingCountV2: "4",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697769",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "52389318",
                        },
                        {
                          title: "Punjabi Feast",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489678",
                                  name: "Paneer Punjabi Gravy (750 Ml)",
                                  category: "Flavors of India",
                                  description:
                                    "Delicious Punjabi gravy made with chunks of soft paneer, simmered in a rich and flavorful tomato-based sauce. Perfect for pairing with rice or naan.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/9478df79-feba-40f2-926c-8de948dcd951_4b396743-5532-4827-a64a-51095144cb81.jpg_compressed",
                                  isVeg: 1,
                                  price: 63000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  parentId: "88697775",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489676",
                                  name: "Paneer Koliwada Gravy (750 Ml)",
                                  category: "Flavors of India",
                                  description:
                                    "A rich and flavorful gravy made with succulent pieces of paneer coated in a spicy and tangy marinade, perfect for pairing with rice or naan.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/24845743-5ad2-470d-9acb-9e9d9b939f81_d6af3050-7459-48ec-be9c-7b34664d2e49.jpg_compressed",
                                  isVeg: 1,
                                  price: 63000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  parentId: "88697763",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489684",
                                  name: "Paneer Afghani Gravy (750 Ml)",
                                  category: "Flavors of India",
                                  description:
                                    "Creamy and rich gravy made with succulent pieces of paneer cooked in a blend of aromatic spices, perfect for pairing with rice or naan.",
                                  isVeg: 1,
                                  price: 63000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  parentId: "88697751",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489919",
                                  name: "Veg Diwani Handi Gravy (750 Ml)",
                                  category: "Flavors of India",
                                  description:
                                    "A rich and flavorful gravy made with a blend of spices, vegetables. Perfect for pairing with rice or bread for a satisfying meal.",
                                  isVeg: 1,
                                  price: 55000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  parentId: "88697823",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489686",
                                  name: "Paneer Do Pyaza Gravy (750 Ml)",
                                  category: "Flavors of India",
                                  description:
                                    "Creamy and flavorful gravy made with succulent paneer pieces, onions, and a blend of aromatic spices. Perfect for pairing with rice or naan.",
                                  isVeg: 1,
                                  price: 53500,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "3 ratings",
                                      ratingCountV2: "3",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697756",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489682",
                                  name: "Paneer Lucknowi Gravy (750 Ml)",
                                  category: "Flavors of India",
                                  description:
                                    "Indulge in a rich and creamy Lucknowi gravy made with succulent pieces of paneer, perfect for pairing with rice or naan. Enjoy the flavors of North India.",
                                  isVeg: 1,
                                  price: 53500,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  parentId: "88697766",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "52389298",
                        },
                        {
                          title: "Punjabi Appetizers",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489770",
                                  name: "Paneer Koliwada Tikka (8 Pcs)",
                                  category: "Flavors of India",
                                  description:
                                    "Deliciously marinated paneer cubes, coated in a spicy batter and deep-fried to perfection. A popular Indian appetizer with a crunchy exterior and a soft, flavorful interior.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/3d12a8cd-6efd-4a4b-bcbb-fd9da097f687_7bc07d79-03a7-47cb-a2a4-730b0a2a63aa.jpg_compressed",
                                  isVeg: 1,
                                  price: 56000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  imageBadges: [
                                    {
                                      imageId:
                                        "merch_bau/High%20Protein%201_1.png",
                                    },
                                  ],
                                  parentId: "88697764",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489739",
                                  name: "Paneer Tikka (8 Pcs)",
                                  category: "Flavors of India",
                                  description:
                                    "Delicious chunks of paneer marinated in a blend of spices and grilled to perfection. Perfect for a flavorful and satisfying appetizer or snack.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/9f14ec5d-74dd-47e9-be4d-874dc69a79ac_22150e91-9351-457f-a44c-5691f5ea22b1.jpg_compressed",
                                  isVeg: 1,
                                  price: 53500,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.9",
                                      ratingCount: "3 ratings",
                                      ratingCountV2: "3",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697779",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489762",
                                  name: "Paneer Pahadi Tikka (8 Pcs)",
                                  category: "Flavors of India",
                                  description:
                                    "Delicious chunks of paneer marinated in a flavorful blend of spices and grilled to perfection, giving you a taste of the mountains in every bite.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/ce0b4cbd-8cf4-4b2d-9b99-9d7387fec7b5_2f6a251e-eed2-46b4-bfe4-1f9233ec38d7.jpg_compressed",
                                  isVeg: 1,
                                  price: 51000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  imageBadges: [
                                    {
                                      imageId:
                                        "merch_bau/High%20Protein%201_1.png",
                                    },
                                  ],
                                  parentId: "88697771",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489767",
                                  name: "Hara Bhara Kebab (9 Pcs)",
                                  category: "Flavors of India",
                                  description:
                                    "Delicious vegetarian kebabs made with spinach, peas, and potatoes, flavored with aromatic spices. Perfect for a healthy and flavorful appetizer or snack.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/4c7c193c-61c5-4adc-a82c-173f0a6be137_67cd2958-df6f-4802-aa93-801bf74397e2.jpg_compressed",
                                  isVeg: 1,
                                  price: 41000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "4 ratings",
                                      ratingCountV2: "4",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "91374866",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "52389328",
                        },
                        {
                          title: "Dal",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489708",
                                  name: "Dal Makhani (500 Ml)",
                                  category: "Flavors of India",
                                  description:
                                    "Creamy and rich lentil curry cooked with butter and cream, flavored with aromatic spices. Served in a generous portion of 500 ml. Perfect for a hearty meal.",
                                  isVeg: 1,
                                  price: 42500,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.5",
                                      ratingCount: "3 ratings",
                                      ratingCountV2: "3",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697707",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489715",
                                  name: "Dal Tadka (750 Ml)",
                                  category: "Flavors of India",
                                  description:
                                    "A flavorful Indian lentil dish cooked with a blend of spices and herbs, perfect for pairing with rice or bread. Enjoy the rich and aromatic flavors.",
                                  isVeg: 1,
                                  price: 39000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "13 ratings",
                                      ratingCountV2: "13",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697708",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489711",
                                  name: "Dal Fry (500 Ml)",
                                  category: "Flavors of India",
                                  description:
                                    "A delicious Indian lentil dish cooked with aromatic spices and served in a generous portion of 500 ml. Perfect for a hearty and satisfying meal.",
                                  isVeg: 1,
                                  price: 30500,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.2",
                                      ratingCount: "16 ratings",
                                      ratingCountV2: "16",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697705",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "52389323",
                        },
                      ],
                      image:
                        "FOOD_CATALOG/IMAGES/CMS/2024/9/15/9478df79-feba-40f2-926c-8de948dcd951_4b396743-5532-4827-a64a-51095144cb81.jpg_compressed",
                      categoryId: "52389297",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      title: "South Indian Treasures",
                      categories: [
                        {
                          title: "The Classics",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489914",
                                  name: "Steamed Idli (3 Pcs)",
                                  category: "South Indian Treasures",
                                  description:
                                    "Soft and fluffy South Indian delicacy made from fermented rice and lentil batter, served in a set of three pieces. Served with coconut chutney and sambar.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/8b3bdb72-39a0-49ba-bd53-b4229ce9bcd0_0abfb099-d5b5-4820-98a6-2d45482f66bd.jpg_compressed",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 10000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.7",
                                      ratingCount: "116 ratings",
                                      ratingCountV2: "116",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697812",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489820",
                                  name: "Medu Vada (2 Pcs)",
                                  category: "South Indian Treasures",
                                  description:
                                    "Crispy and savory South Indian fritters made from urad dal batter, deep-fried to perfection. Served with chutney and sambar.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/5f199a07-256f-4182-bab7-5ad7bcb314f2_ed5b72db-2870-427d-a671-59622dc75a2f.jpg_compressed",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 10500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.6",
                                      ratingCount: "83 ratings",
                                      ratingCountV2: "83",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697738",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489749",
                                  name: "Sabudana Vada (2 Pcs)",
                                  category: "South Indian Treasures",
                                  description:
                                    "Crispy and flavorful deep-fried snack made from soaked sabudana, potatoes, and spices. Perfect for a light and tasty treat. Served With Sweet Lassi.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/bfae7e25-82be-4f17-a76c-d961afef7fd7_b637fa2a-1f3c-44a4-8558-b91fb91d5934.jpg_compressed",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 10500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.3",
                                      ratingCount: "47 ratings",
                                      ratingCountV2: "47",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697790",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489833",
                                  name: "Dahi Vada (2 Pcs)",
                                  category: "South Indian Treasures",
                                  description:
                                    "Soft lentil dumplings soaked in creamy yogurt and topped with tangy tamarind chutney and spicy mint sauce. A popular Indian street food snack.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/f6fc6b58-7fb5-484f-adbb-2db16d590df6_abb452f1-aab6-4772-a096-3d14fb176c1a.jpg_compressed",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 17500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.7",
                                      ratingCount: "20 ratings",
                                      ratingCountV2: "20",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697704",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489755",
                                  name: "Butter Idli (3 Pcs)",
                                  category: "South Indian Treasures",
                                  description:
                                    "Soft and fluffy idlis made with a generous amount of butter, perfect for a delicious and comforting South Indian breakfast or snack. Served with chutney and sambar.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/307974ef-cc39-4b06-a83e-c1c37d0f54ff_8e059e65-02f5-4944-8b97-77c59dc5e2ca.jpg_compressed",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 13500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  parentId: "88697692",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "52389324",
                        },
                        {
                          title: "Masala Dosa",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11413828",
                                  name: "Masala Dosa",
                                  category: "South Indian Treasures",
                                  description:
                                    "A South Indian delicacy made with a crispy crepe filled with a spicy potato mixture, served with coconut chutney and sambar. Perfect for breakfast or anytime snack.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/e93cc59c-09c7-436a-ab77-91ee9d076c63_569e0ed8-f544-4318-bb36-4f381b7b8859.jpg_compressed",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 14500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.7",
                                      ratingCount: "1118 ratings",
                                      ratingCountV2: "1.1K+",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "54965770",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11413840",
                                  name: "Rava Masala Dosa",
                                  category: "South Indian Treasures",
                                  description:
                                    "A South Indian delicacy made with semolina and filled with a spicy potato mixture, served with coconut chutney and sambar. Perfect for breakfast or anytime snack.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/16/ed2b8b67-5a36-459e-b57a-92ef05a814b8_4a5f2332-cd01-4731-ac59-17a8e1d57c9e.jpg",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 19500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.3",
                                      ratingCount: "194 ratings",
                                      ratingCountV2: "194",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "55012220",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11413850",
                                  name: "Mysore Masala Dosa",
                                  category: "South Indian Treasures",
                                  description:
                                    "A South Indian delicacy with a crispy golden-brown exterior, filled with a spicy potato mixture and served with tangy coconut chutney and sambar.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/6fac4f28-076b-4a7b-a80f-adce0e77ec23_8218252e-9a35-435a-872d-5418e58e814a.jpg_compressed",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 18000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.6",
                                      ratingCount: "233 ratings",
                                      ratingCountV2: "233",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "55012203",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11413779",
                                  name: "Cheese Masala Dosa",
                                  category: "South Indian Treasures",
                                  description:
                                    "A crispy South Indian dosa filled with a spicy and flavorful mixture of cheese and masala, perfect for a satisfying and indulgent meal. Served with chutney and sambar.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/d2d80a3b-37d4-4bac-a795-41418aab5ace_dcd8e0aa-b0f3-4f8b-a298-4b714c8136e2.jpg_compressed",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 24000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "64 ratings",
                                      ratingCountV2: "64",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "55257341",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11413898",
                                  name: "Paper Masala Dosa",
                                  category: "South Indian Treasures",
                                  description:
                                    "A crispy South Indian crepe filled with a spicy potato mixture, served with coconut chutney and sambar. Perfect for breakfast or a light meal. Served with chutney and sambar.",
                                  imageId: "vufht8mkyxlgbsgrrhmj",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 29000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.9",
                                      ratingCount: "31 ratings",
                                      ratingCountV2: "31",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "55257352",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11413888",
                                  name: "Onion Rava Masala Dosa",
                                  category: "South Indian Treasures",
                                  description:
                                    "Crispy dosa made with semolina batter, filled with a spicy onion masala mixture. Perfect for a flavorful South Indian breakfast or snack. Served with chutney and sambar.",
                                  imageId: "ylrxzatpd3obsyxpraw3",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 23000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.6",
                                      ratingCount: "75 ratings",
                                      ratingCountV2: "75",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "55390963",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11413866",
                                  name: "Ghee Masala Dosa",
                                  category: "South Indian Treasures",
                                  description:
                                    "A South Indian delicacy made with a crispy crepe filled with a flavorful mixture of spices and clarified butter, perfect for a satisfying meal. Served with chutney and sambar.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/fedd4a20-ded9-4736-8ae9-b7a0dc502383_89497fde-25ce-4122-9221-cd3506cffe9a.jpg_compressed",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 19500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.7",
                                      ratingCount: "71 ratings",
                                      ratingCountV2: "71",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "55651035",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11413857",
                                  name: "Ghee Mysore Masala Dosa",
                                  category: "South Indian Treasures",
                                  description:
                                    "Crispy dosa filled with spicy Mysore masala and topped with a generous amount of ghee, creating a delicious and flavorful South Indian dish. Served with chutney and sambar.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/78b5a04f-03b8-4c9b-8035-636ae564b472_2679ccc3-af9f-45d2-a15f-4d72ec7502c6.jpg_compressed",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 19000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.8",
                                      ratingCount: "63 ratings",
                                      ratingCountV2: "63",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "54965767",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11413874",
                                  name: "Ghee Rava Masala Dosa",
                                  category: "South Indian Treasures",
                                  description:
                                    "A South Indian delicacy made with semolina, spices, and clarified butter, this dosa is crispy on the outside and soft on the inside, bursting with flavor. Served with chutney and sambar.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/16/ed2b8b67-5a36-459e-b57a-92ef05a814b8_4a5f2332-cd01-4731-ac59-17a8e1d57c9e.jpg",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 22000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.2",
                                      ratingCount: "33 ratings",
                                      ratingCountV2: "33",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "55782366",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "52389294",
                        },
                        {
                          title: "Sada Dosa",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489935",
                                  name: "Classic Sada Dosa",
                                  category: "South Indian Treasures",
                                  description:
                                    "A traditional South Indian crepe made from fermented rice and lentil batter, served plain with a side of coconut chutney and sambar.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/16/6cdd7f16-d5d8-4854-ab20-020294ea8de9_a3bfe0e2-471a-4a30-a961-f42c12a06f35.jpg",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 12500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.6",
                                      ratingCount: "28 ratings",
                                      ratingCountV2: "28",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697700",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11413808",
                                  name: "Paneer Chilli Dosa",
                                  category: "South Indian Treasures",
                                  description:
                                    "A delicious South Indian delicacy with a spicy twist, combining crispy dosa filled with flavorful paneer and vegetables, perfect for a satisfying meal. Served with chutney and sambar.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/876c3fe4-23a5-45f8-8739-ebc0d79537e1_4295e87e-78da-4c7d-8ec6-a1bc28896349.jpg_compressed",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 43000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "18 ratings",
                                      ratingCountV2: "18",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "56497028",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11413861",
                                  name: "Ghee Sada Dosa",
                                  category: "South Indian Treasures",
                                  description:
                                    "A traditional South Indian crepe made with clarified butter, served plain without any filling. Enjoy the crispy texture and rich flavor of this classic dish. Served with chutney and sambar.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/c2d95fd2-719c-43b8-b540-9c70d8830e91_0c45dd1b-f8f8-45ac-924b-5099727cf981.jpg_compressed",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 15500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.7",
                                      ratingCount: "182 ratings",
                                      ratingCountV2: "182",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "55059406",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11413793",
                                  name: "Pav Bhaji Dosa",
                                  category: "South Indian Treasures",
                                  description:
                                    "A delicious fusion of fluffy dosa filled with a spicy and flavorful mixture of mashed vegetables, perfect for a satisfying meal. Served with chutney and sambar.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/a25ce7fb-641c-413e-bb10-cee21e483a8f_a2930119-dab2-42b3-8b8f-e5594512a830.jpg_compressed",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 27500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "12 ratings",
                                      ratingCountV2: "12",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "55896536",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11413884",
                                  name: "Onion Rava Sada Dosa",
                                  category: "South Indian Treasures",
                                  description:
                                    "A crispy South Indian crepe made with semolina and topped with a flavorful mixture of onions and spices. Perfect for a delicious and satisfying meal. Served with chutney and sambar.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/a3db60b5-95da-48be-bfe3-bcccdf06da0e_b77c4388-d684-4c5f-8674-1dfbcc0285e3.jpg_compressed",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 21000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.7",
                                      ratingCount: "84 ratings",
                                      ratingCountV2: "84",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "55708784",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11413760",
                                  name: "Cheese Dosa",
                                  category: "South Indian Treasures",
                                  description:
                                    "A crispy South Indian crepe filled with a gooey, melted cheese filling, perfect for a savory and indulgent breakfast or snack. Served with chutney and sambar.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/06ec1722-1cba-4c2a-9595-ef54e9922637_e9c16ae8-b508-48ef-84b8-354b38c38ef2.jpg_compressed",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 21500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.7",
                                      ratingCount: "87 ratings",
                                      ratingCountV2: "87",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "55526195",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11413835",
                                  name: "Rava Sada Dosa",
                                  category: "South Indian Treasures",
                                  description:
                                    "A traditional South Indian crepe made with semolina and served plain, perfect for a light and crispy breakfast or snack. Served with chutney and sambar.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/45ba920e-755d-4299-8510-18dfebb9e7fc_132a8d58-c253-4d6e-951e-33bc028711cf.jpg_compressed",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 17000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.3",
                                      ratingCount: "209 ratings",
                                      ratingCountV2: "209",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "54965783",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11413871",
                                  name: "Ghee Rava Sada Dosa",
                                  category: "South Indian Treasures",
                                  description:
                                    "A traditional South Indian crepe made with semolina, clarified butter, and spices. Crispy on the outside and soft on the inside, perfect for breakfast or a snack. Served with chutney and sambar.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/06dc288e-34b7-4e88-89b9-c2761feac62b_e26cb865-2a46-4abe-bba9-b1053b8f1fc2.jpg_compressed",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 19500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "26 ratings",
                                      ratingCountV2: "26",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "55059405",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11413845",
                                  name: "Mysore Sada Dosa",
                                  category: "South Indian Treasures",
                                  description:
                                    "A traditional South Indian crepe made with a crispy golden-brown exterior and a flavorful spiced potato filling, perfect for breakfast or a light meal. Served with chutney and sambar.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/adc88cda-eecb-4a22-8c57-5c7c62f2d99b_22329df4-349c-49da-b341-092f8493b7ba.jpg_compressed",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 16000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "133 ratings",
                                      ratingCountV2: "133",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "55012204",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11413879",
                                  name: "Mysore Rava Dosa",
                                  category: "South Indian Treasures",
                                  description:
                                    "A South Indian delicacy made with semolina, rice flour, and spices, Mysore Rava Dosa is a crispy and flavorful crepe that is perfect for breakfast or as a snack. Served with chutney and sambar.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/d5043f5d-5f8f-4b21-a0c7-9cb9470a76a3_f9995770-93f2-43a7-8b2a-46cd6e0cb111.jpg_compressed",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 19500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "29 ratings",
                                      ratingCountV2: "29",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "55896535",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489728",
                                  name: "Cheese Paper Sada Dosa",
                                  category: "South Indian Treasures",
                                  description:
                                    "Thin, crispy South Indian rice crepe filled with a savory mixture of spiced potatoes and onions. Served with chutney and sambar.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 42500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  parentId: "88697695",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "52389301",
                        },
                        {
                          title: "Uttapam",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11413931",
                                  name: "Onion Uttapam",
                                  category: "South Indian Treasures",
                                  description:
                                    "A South Indian delicacy made with a savory batter of rice and lentils, topped with caramelized onions and served with coconut chutney and sambar.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/7c5fde36-8dce-486c-8313-2709e4457d25_09cd87bf-be2e-4a4e-952f-0496007f9ed3.jpg_compressed",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 15500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.5",
                                      ratingCount: "390 ratings",
                                      ratingCountV2: "390",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "55012208",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "96269547",
                                  name: "Butter Soft Uttapam",
                                  category: "South Indian Treasures",
                                  description:
                                    "Delicious South Indian pancake made with a soft and fluffy batter, cooked to perfection with a generous amount of butter for a rich and savory flavor. Served with chutney and sambar.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/970837b5-874e-43f0-a4b0-75d3588e73b4_cccb8f9d-a7f0-4545-9201-bd0798a0162c.jpg_compressed",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 21500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "5 ratings",
                                      ratingCountV2: "5",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "55303466",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11413938",
                                  name: "Tomato Onion Uttapam",
                                  category: "South Indian Treasures",
                                  description:
                                    "A savory South Indian pancake topped with a flavorful mix of tomatoes and onions, perfect for a delicious and satisfying breakfast or snack. Served with chutney and sambar.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/74d8562b-e486-4305-ad60-1ee14131f0f2_06df7f07-839e-4dbd-addf-0992ea912191.jpg_compressed",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 18000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.9",
                                      ratingCount: "209 ratings",
                                      ratingCountV2: "209",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "54965792",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11413912",
                                  name: "Cheese Onion Uttapam",
                                  category: "South Indian Treasures",
                                  description:
                                    "A savory South Indian pancake topped with a generous amount of melted cheese and caramelized onions, creating a delicious and satisfying meal option. Served with chutney and sambar.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/fec71713-600e-4bb5-ac36-729e6000a56e_fa872230-4d5b-4775-9721-594db2a3faff.jpg_compressed",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 29000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.9",
                                      ratingCount: "31 ratings",
                                      ratingCountV2: "31",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "56496990",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "96269549",
                                  name: "Vegetable Soft Uttapam",
                                  category: "South Indian Treasures",
                                  description:
                                    "Delight in the fluffy and flavorful South Indian treasure that is Veg Soft Uttapam.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/dff976b6-730d-4758-8965-2fe3804f6ff7_901d044f-edb6-408f-a921-482e29ad6c9b.jpg_compressed",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 21000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "5 ratings",
                                      ratingCountV2: "5",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "55157204",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "96269548",
                                  name: "Podi Onion Uttapam",
                                  category: "South Indian Treasures",
                                  description:
                                    "A savory South Indian pancake topped with a flavorful blend of spices, onions, and lentil powder, perfect for a delicious and satisfying meal. Served with chutney and sambar.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/3dffaa52-0994-4fa9-92bb-07880238e252_594b1ab9-1518-460a-8e93-a262e3a9f8b9.jpg_compressed",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 21000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  parentId: "55059415",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11413923",
                                  name: "Cheese Uttapam",
                                  category: "South Indian Treasures",
                                  description:
                                    "A savory South Indian pancake topped with a generous amount of melted cheese, creating a delicious and comforting meal that is perfect for breakfast or brunch. Served with chutney and sambar.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/74151158-c9b6-4c09-a742-0dbaac5c0207_2842bbb4-1f54-4860-9388-696db18d659d.jpg_compressed",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 22000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "4 ratings",
                                      ratingCountV2: "4",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "55390955",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "52389317",
                        },
                        {
                          title: "House Special Dosa",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "153571238",
                                  name: "Rajgira Upvas Dosa",
                                  category: "South Indian Treasures",
                                  description:
                                    "A delectable South Indian treasure with a unique twist, perfect for a satisfying vegetarian meal.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 16000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.8",
                                      ratingCount: "8 ratings",
                                      ratingCountV2: "8",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "91446818",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "96269544",
                                  name: "Paneer Chatpata Dosa",
                                  category: "South Indian Treasures",
                                  description:
                                    "A delicious South Indian crepe filled with spicy paneer, perfect for a flavorful and satisfying meal. Served with chutney and sambar.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/c1a5d95d-1c0d-460f-977a-84c1e35dd908_40250138-7ead-45a8-b07f-2fc22060bc9b.jpg_compressed",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 32500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "3 ratings",
                                      ratingCountV2: "3",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "55059412",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "96269542",
                                  name: "Podi Onion Dosa",
                                  category: "South Indian Treasures",
                                  description:
                                    "A crispy South Indian dosa smeared with a flavorful podi spice mix and topped with caramelized onions. Perfect for a spicy and savory breakfast or snack. Served with chutney and sambar.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/3bccb757-1f2f-4a38-881e-d70381b75a22_f76459f8-265e-4cf0-9852-48dc9e896466.jpg_compressed",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 21000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  parentId: "56452054",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "52389304",
                        },
                      ],
                      image:
                        "FOOD_CATALOG/IMAGES/CMS/2024/9/16/6cdd7f16-d5d8-4854-ab20-020294ea8de9_a3bfe0e2-471a-4a30-a961-f42c12a06f35.jpg",
                      categoryId: "52389293",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      title: "Beverages",
                      categories: [
                        {
                          title: "Milkshakes",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11413771",
                                  name: "Dry Fruit Milkshake",
                                  category: "Beverages",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 56000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.6",
                                      ratingCount: "47 ratings",
                                      ratingCountV2: "47",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "55390957",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11413998",
                                  name: "Sitaphal Milkshake",
                                  category: "Beverages",
                                  description:
                                    "Creamy milkshake made with fresh Sitaphal fruit, blended to perfection for a refreshing and indulgent treat. Perfect for a hot summer day.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/3f8fb9e9-3c8c-49fc-91ce-a98059d5fad1_db39ecd1-1fb2-44ec-95e0-d67f219ad096.jpg_compressed",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 34000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.9",
                                      ratingCount: "17 ratings",
                                      ratingCountV2: "17",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697798",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11413987",
                                  name: "Mango Milkshake",
                                  category: "Beverages",
                                  description:
                                    "Refreshing blend of ripe mangoes and creamy milk, perfect for a tropical treat on a hot day. Enjoy the sweet and tangy flavors in every sip.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 34000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.3",
                                      ratingCount: "125 ratings",
                                      ratingCountV2: "125",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "81074933",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11413986",
                                  name: "Chikoo Chocolate Milkshake",
                                  category: "Beverages",
                                  description:
                                    "Creamy milkshake made with sweet chikoo fruit blended with rich chocolate for a decadent and indulgent treat. Perfect for satisfying your sweet cravings.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 37000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "12 ratings",
                                      ratingCountV2: "12",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "56496993",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11413985",
                                  name: "Kaju Mango Milkshake",
                                  category: "Beverages",
                                  description:
                                    "Creamy milkshake made with ripe mangoes and cashew nuts, offering a rich and nutty flavor with a hint of sweetness. Perfect for a refreshing treat.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 36500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "5 ratings",
                                      ratingCountV2: "5",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "56497011",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11413991",
                                  name: "Chocolate Milkshake",
                                  category: "Beverages",
                                  description:
                                    "Indulge in a creamy blend of rich chocolate and smooth milk, creating a decadent treat perfect for satisfying your sweet cravings.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 29000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.7",
                                      ratingCount: "34 ratings",
                                      ratingCountV2: "34",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "55157198",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11414003",
                                  name: "Badam Pista Milkshake",
                                  category: "Beverages",
                                  description:
                                    "A creamy blend of almonds and pistachios mixed with milk to create a rich and flavorful milkshake. Perfect for a refreshing and nutritious treat.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/715c1968-ffa6-41f8-a530-5e7ab53c9f0a_e5bfba0d-0503-4b36-8728-a657b4fde93a.jpg_compressed",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 26500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "15 ratings",
                                      ratingCountV2: "15",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "56496980",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11414010",
                                  name: "Cold Coffee Milkshake",
                                  category: "Beverages",
                                  description:
                                    "A refreshing blend of chilled coffee and creamy milk, perfect for a hot day or as a pick-me-up treat. Enjoy the smooth and indulgent flavors.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 28000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "21 ratings",
                                      ratingCountV2: "21",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "56496997",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11413993",
                                  name: "Vanilla Milkshake",
                                  category: "Beverages",
                                  description:
                                    "Creamy and indulgent, this classic milkshake is made with rich vanilla ice cream and topped with a dollop of whipped cream. Perfect for satisfying your sweet tooth cravings.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 29500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "12 ratings",
                                      ratingCountV2: "12",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "55350123",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11413988",
                                  name: "Chikoo Milkshake",
                                  category: "Beverages",
                                  description:
                                    "Creamy milkshake made with sweet and juicy chikoo fruit, perfect for a refreshing and indulgent treat. Enjoy the rich flavors of this delightful beverage.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 22000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.8",
                                      ratingCount: "98 ratings",
                                      ratingCountV2: "98",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "55012174",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11414005",
                                  name: "Thandai Milkshake",
                                  category: "Beverages",
                                  description:
                                    "A refreshing blend of milk, nuts, and spices, perfect for cooling down on a hot day. Enjoy the traditional Indian flavors in every sip of this creamy drink.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 24000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.3",
                                      ratingCount: "15 ratings",
                                      ratingCountV2: "15",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "55986867",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11414007",
                                  name: "Kesar Pista Milkshake",
                                  category: "Beverages",
                                  description:
                                    "A creamy blend of saffron-infused milk and crushed pistachios, this refreshing milkshake is a delightful treat for those craving a taste of India.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 28000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "11 ratings",
                                      ratingCountV2: "11",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "55012193",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11413994",
                                  name: "Apple Milkshake",
                                  category: "Beverages",
                                  description:
                                    "Refreshing blend of fresh apples and creamy milk, perfect for a nutritious and delicious drink option. Enjoy the sweet and tangy flavors in every sip.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 26500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "3 ratings",
                                      ratingCountV2: "3",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "56496976",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11414000",
                                  name: "Rose Milkshake",
                                  category: "Beverages",
                                  description:
                                    "Refreshing milkshake made with the delicate flavor of roses, perfect for a hot summer day. Enjoy the floral notes in every sip.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 23500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "7 ratings",
                                      ratingCountV2: "7",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "55428367",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11414012",
                                  name: "Banana Milkshake",
                                  category: "Beverages",
                                  description:
                                    "Creamy and refreshing beverage made with ripe bananas blended with milk and a touch of sweetness. Perfect for a quick and delicious treat.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 21000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "9 ratings",
                                      ratingCountV2: "9",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "81074883",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11413989",
                                  name: "Pineapple Milkshake",
                                  category: "Beverages",
                                  description:
                                    "Refreshing blend of tropical pineapple and creamy milk, perfect for a sweet and tangy treat on a hot day. Enjoy the tropical flavors in every sip.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 21500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.3",
                                      ratingCount: "6 ratings",
                                      ratingCountV2: "6",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "55782368",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "52389337",
                        },
                        {
                          title: "Fresh Fruit Juices",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "138172138",
                                  name: "Mosambi Juice",
                                  category: "Beverages",
                                  description:
                                    "Refreshing citrus drink made from freshly squeezed mosambi fruit, perfect for a hot summer day. Enjoy the tangy and sweet flavors in every sip.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/7a842b8d-668e-4509-9bc2-986403da6137_f63cff7c-a98a-45d8-84bb-1657e11ee44d.jpg_compressed",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 14500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.7",
                                      ratingCount: "41 ratings",
                                      ratingCountV2: "41",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "54965774",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11413859",
                                  name: "Kabuli Anar Juice",
                                  category: "Beverages",
                                  description:
                                    "Refreshing juice made from the sweet and tangy seeds of pomegranate, perfect for a burst of energy and hydration. Enjoy the taste of Kabuli Anar in every sip.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/7b51068b-ce26-4062-a6f1-5d3d8786d650_dd32d3f1-eca5-4bdd-82c8-1c15214ddb03.jpg_compressed",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 24000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.9",
                                      ratingCount: "79 ratings",
                                      ratingCountV2: "79",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "55012189",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11413883",
                                  name: "Watermelon Juice",
                                  category: "Beverages",
                                  description:
                                    "Refreshing and hydrating drink made from fresh watermelon, perfect for quenching your thirst on a hot day. Enjoy the sweet and juicy flavors in every sip.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/86cd42b8-bce6-4758-ba1e-6aa37b74179c_7883a2e1-147b-466a-be08-6097889fbad3.jpg_compressed",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 15000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.4",
                                      ratingCount: "11 ratings",
                                      ratingCountV2: "11",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697851",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11413854",
                                  name: "Pineapple Juice",
                                  category: "Beverages",
                                  description:
                                    "Refreshing tropical drink made from freshly squeezed pineapples, perfect for a burst of sweet and tangy flavor. Enjoy a taste of the tropics!",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/005726f2-f67d-4428-bef9-6ca593bf4f3a_e4c7a18d-b94e-4a9b-a41f-e276826622df.jpg_compressed",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 16000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.9",
                                      ratingCount: "96 ratings",
                                      ratingCountV2: "96",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "55059414",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11413896",
                                  name: "Apple Juice",
                                  category: "Beverages",
                                  description:
                                    "Refreshing and sweet beverage made from freshly pressed apples, perfect for a healthy and delicious drink option.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 22000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "13 ratings",
                                      ratingCountV2: "13",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "55059403",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489901",
                                  name: "Fruit Cocktail Juice",
                                  category: "Beverages",
                                  description:
                                    "A refreshing blend of assorted fruits in a deliciously sweet and tangy juice, perfect for a quick and healthy thirst-quencher.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/6e3c026d-4e5c-40e8-8657-900977c08303_0894d8fd-6d65-4545-8994-1baf3f2d53ff.jpg_compressed",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 17000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "14 ratings",
                                      ratingCountV2: "14",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697716",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11413905",
                                  name: "Fat Burner Juice",
                                  category: "Beverages",
                                  description:
                                    "A refreshing blend of fruits and vegetables packed with nutrients to help boost metabolism and aid in weight loss. Perfect for a healthy start to your day.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 27000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.6",
                                      ratingCount: "9 ratings",
                                      ratingCountV2: "9",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "56497004",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11413844",
                                  name: "Orange Juice",
                                  category: "Beverages",
                                  description:
                                    "Refreshing and tangy citrus drink made from freshly squeezed oranges. Perfect for a morning pick-me-up or a healthy dose of Vitamin C.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/8dff5d67-4593-4fed-bc3f-3dc7acfa925d_50ec73ca-5f7e-406c-8552-208de1ed7450.jpg_compressed",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 14500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.7",
                                      ratingCount: "209 ratings",
                                      ratingCountV2: "209",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "55012209",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11413863",
                                  name: "Kohinoor Juice",
                                  category: "Beverages",
                                  description:
                                    "Refreshing blend of tropical fruits, perfect for a hot summer day. Made with fresh ingredients and bursting with flavor. Enjoy a taste of paradise.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/d275f67d-0940-43da-8fb7-aea315c5cf3c_4655d505-39a1-4975-a343-2666530d66cd.jpg_compressed",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 17500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  parentId: "56497012",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11413872",
                                  name: "Grapes Juice",
                                  category: "Beverages",
                                  description:
                                    "Refreshing and sweet juice made from succulent grapes, perfect for a healthy and hydrating drink option. Enjoy the natural goodness of grapes in every sip.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/8/31/f8658cc6-b7c7-47a4-9143-3a92adbd4adc_d1232883-83a6-430d-bcd8-642e8f39814c.JPG",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 16000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "15 ratings",
                                      ratingCountV2: "15",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "56497008",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11413878",
                                  name: "Carrot Juice",
                                  category: "Beverages",
                                  description:
                                    "Freshly squeezed juice made from vibrant orange carrots, packed with vitamins and nutrients. A refreshing and healthy beverage option.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 15000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.7",
                                      ratingCount: "53 ratings",
                                      ratingCountV2: "53",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "55012170",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "64211622",
                                  name: "Lemon Mint Juice",
                                  category: "Beverages",
                                  description:
                                    "Refreshing blend of tangy lemon and cool mint, perfect for a hot summer day. Enjoy the zesty citrus flavor with a hint of refreshing mint.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/2/5cafa824-4c1d-4d44-9fc0-b4d4983e3dd4_5e3bf8e7-88c1-42aa-bf33-dd9d0f582115.JPG",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 13000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.9",
                                      ratingCount: "29 ratings",
                                      ratingCountV2: "29",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "56452053",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11413849",
                                  name: "Ganga Jamuna Juice",
                                  category: "Beverages",
                                  description:
                                    "A refreshing blend of tropical fruits and spices, this vibrant juice is a perfect balance of sweet and tangy flavors, inspired by the Ganga Jamuna river.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 14500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.6",
                                      ratingCount: "91 ratings",
                                      ratingCountV2: "91",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "55012182",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "52389300",
                        },
                        {
                          title: "Signature Milkshakes",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489829",
                                  name: "Fruit Punch Milkshake",
                                  category: "Beverages",
                                  description:
                                    "Refreshing blend of fruits and creamy milk, perfect for a hot summer day. Enjoy the sweet and tangy flavors in every sip.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 32500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  parentId: "88697717",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11413705",
                                  name: "Butterscotch Milkshake",
                                  category: "Beverages",
                                  description:
                                    "Indulge in a creamy blend of rich butterscotch flavor and smooth milk, creating a decadent treat perfect for satisfying your sweet cravings.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 32500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.9",
                                      ratingCount: "3 ratings",
                                      ratingCountV2: "3",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "56496984",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489743",
                                  name: "Watermelon Blossom Milkshake",
                                  category: "Beverages",
                                  description:
                                    "Refreshing milkshake made with fresh watermelon and a hint of floral notes, perfect for a hot summer day.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 32500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  parentId: "88697850",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489745",
                                  name: "Pineapple Blossom Milkshake",
                                  category: "Beverages",
                                  description:
                                    "Indulge in a refreshing blend of tropical pineapple, creamy milk, and delicate blossoms in this delightful milkshake. Perfect for a sweet treat!",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 32500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  parentId: "88697781",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489734",
                                  name: "Pista Blossom Milkshake",
                                  category: "Beverages",
                                  description:
                                    "Indulge in a creamy milkshake infused with the delicate flavor of pistachio blossoms. Perfect for a refreshing and unique treat.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 32500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  parentId: "88697785",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489721",
                                  name: "Grapes Blossom Milkshake",
                                  category: "Beverages",
                                  description:
                                    "Indulge in a creamy milkshake bursting with the sweet and refreshing flavors of fresh grapes, creating a delightful and satisfying beverage.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 32500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  parentId: "88697719",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489731",
                                  name: "Shalimar Blossom Milkshake",
                                  category: "Beverages",
                                  description:
                                    "Indulge in a creamy and refreshing milkshake infused with the delicate flavors of Shalimar Blossom. Perfect for a sweet treat on a hot day.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 32500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  parentId: "88697795",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489863",
                                  name: "Mosambi Blossom Milkshake",
                                  category: "Beverages",
                                  description:
                                    "Refreshing milkshake made with the sweet and tangy flavors of mosambi blossom, perfect for a cool and creamy treat on a hot day.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 32500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  parentId: "88697743",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "52389313",
                        },
                        {
                          title: "Indian Classics",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11413755",
                                  name: "Mango Lassi",
                                  category: "Beverages",
                                  description:
                                    "A refreshing blend of ripe mangoes, yogurt, and a hint of cardamom, perfect for a hot summer day. Enjoy the creamy and tangy flavors in every sip.",
                                  imageId: "228d12884773f1b2cb11cec07e57892a",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 14500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "76 ratings",
                                      ratingCountV2: "76",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "55012198",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11413749",
                                  name: "Kesar Lassi",
                                  category: "Beverages",
                                  description:
                                    "A refreshing blend of yogurt, saffron, and spices, this traditional Indian drink is a creamy and aromatic treat perfect for cooling off on a hot day.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/6/20/d4233f52-f7b7-4251-86de-b0ec287ee3df_55499bff-0a3c-4b97-bea9-3d02622607ec.JPG",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 14500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.8",
                                      ratingCount: "33 ratings",
                                      ratingCountV2: "33",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "55350113",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11413738",
                                  name: "Sweet Lassi",
                                  category: "Beverages",
                                  description:
                                    "Refreshing and creamy yogurt-based drink blended with sugar and flavored with cardamom, perfect for cooling down on a hot day.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 12000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.6",
                                      ratingCount: "108 ratings",
                                      ratingCountV2: "108",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "55059419",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11413982",
                                  name: "Fresh Lime Soda",
                                  category: "Beverages",
                                  description:
                                    "Refreshing drink made with lime juice, soda water, and a hint of sweetness. Perfect for quenching your thirst on a hot day.",
                                  imageId: "jjihm2iruqj1jhai1dti",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 9900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.7",
                                      ratingCount: "83 ratings",
                                      ratingCountV2: "83",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "54965766",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11413761",
                                  name: "Pista Lassi",
                                  category: "Beverages",
                                  description:
                                    "A refreshing blend of yogurt, milk, sugar, and crushed pistachios, creating a creamy and nutty drink perfect for a hot day.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 14500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.1",
                                      ratingCount: "18 ratings",
                                      ratingCountV2: "18",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "56497043",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11413765",
                                  name: "Banana Lassi",
                                  category: "Beverages",
                                  description:
                                    "A refreshing blend of ripe bananas and creamy yogurt, this lassi is a delicious and nutritious drink perfect for a hot day.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 14500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.2",
                                      ratingCount: "5 ratings",
                                      ratingCountV2: "5",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "55896532",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11413732",
                                  name: "Buttermilk",
                                  category: "Beverages",
                                  description:
                                    "Creamy and tangy, this traditional drink is made from the liquid left over after churning butter. Enjoy it as a refreshing beverage.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 8500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.8",
                                      ratingCount: "142 ratings",
                                      ratingCountV2: "142",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "55303465",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11413744",
                                  name: "Salted Lassi",
                                  category: "Beverages",
                                  description:
                                    "Refreshing yogurt-based drink with a perfect balance of saltiness, tanginess, and creaminess. Perfect for cooling down on a hot day.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 11000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.7",
                                      ratingCount: "17 ratings",
                                      ratingCountV2: "17",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "56497046",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "52389325",
                        },
                        {
                          title: "Creamy Milkshakes",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489784",
                                  name: "Dry Fruit Creamy Milkshake",
                                  category: "Beverages",
                                  description:
                                    "Indulge in a rich and creamy milkshake blended with a variety of dry fruits for a delicious and satisfying treat. Perfect for a sweet and nutty craving.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 43500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.6",
                                      ratingCount: "3 ratings",
                                      ratingCountV2: "3",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697710",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489845",
                                  name: "Sitaphal Creamy Milkshake",
                                  category: "Beverages",
                                  description:
                                    "Indulge in a rich and creamy milkshake made with the luscious sweetness of Sitaphal, a perfect blend of flavors to satisfy your dessert cravings.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 39000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  parentId: "88697797",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "52389351",
                        },
                      ],
                      image: "228d12884773f1b2cb11cec07e57892a",
                      categoryId: "52389299",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      title: "Chinese Flavors",
                      categories: [
                        {
                          title: "Chinese Appetizers",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "157868214",
                                  name: "Soyabean Manchurian Dry",
                                  category: "Chinese Flavors",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 44500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  parentId: "94436443",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "157367741",
                                  name: "Mushroom Chilli Dry[750ml]",
                                  category: "Chinese Flavors",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 44900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  parentId: "94136175",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11413694",
                                  name: "Paneer Crispy",
                                  category: "Chinese Flavors",
                                  description:
                                    "Crispy cubes of cottage cheese marinated in a blend of spices and deep-fried to perfection, creating a delicious and crunchy appetizer or snack option.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/373658c3-2c42-4bad-8a79-eaecc941e22e_3a15f4c2-a77d-446c-a7fb-f8fc273dd157.jpg_compressed",
                                  isVeg: 1,
                                  price: 52000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.6",
                                      ratingCount: "45 ratings",
                                      ratingCountV2: "45",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "55651037",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489912",
                                  name: "Paneer Chilli (Dry)",
                                  category: "Chinese Flavors",
                                  description:
                                    "Spicy and flavorful Indo-Chinese dish made with chunks of paneer tossed in a tangy and spicy sauce, perfect as a starter or side dish.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/2268e761-bd36-4c90-9056-353fef9685b7_7e69e9f4-42de-4b82-8210-bae2356a7e6f.jpg_compressed",
                                  isVeg: 1,
                                  price: 50000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.8",
                                      ratingCount: "496 ratings",
                                      ratingCountV2: "496",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "54965777",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11414102",
                                  name: "Veg Crispy",
                                  category: "Chinese Flavors",
                                  description:
                                    "Crispy fried vegetables coated in a flavorful blend of spices, perfect for those who enjoy a crunchy and savory snack. Great for sharing or as a side dish.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/c79fd54e-6a53-46e3-97d5-b3e92d0e1c07_4b98a695-7f18-4c08-a5ad-bbdc9598f77c.jpg_compressed",
                                  isVeg: 1,
                                  price: 45500,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.5",
                                      ratingCount: "131 ratings",
                                      ratingCountV2: "131",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "55012230",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489924",
                                  name: "Paneer Manchurian (Dry)",
                                  category: "Chinese Flavors",
                                  description:
                                    "Delicious Indo-Chinese dish made with cubes of cottage cheese tossed in a spicy and tangy sauce, perfect as a starter or side dish.",
                                  isVeg: 1,
                                  price: 50000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  parentId: "55157202",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489905",
                                  name: "Paneer Schezwan (Dry)",
                                  category: "Chinese Flavors",
                                  description:
                                    "Tender paneer cubes stir-fried with colorful bell peppers and onions in a spicy Schezwan sauce, creating a flavorful and satisfying dish.",
                                  isVeg: 1,
                                  price: 52000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  parentId: "56497036",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489680",
                                  name: "Veg Manchurian (Dry)",
                                  category: "Chinese Flavors",
                                  description:
                                    "Delicious Indo-Chinese dish made with mixed vegetables and spices, shaped into balls and fried until crispy. Served dry with a flavorful sauce.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/1f16093c-2147-45b0-82ff-65872b8760f0_82394af2-07f6-4dcb-9114-f4a517947ac9.jpg_compressed",
                                  isVeg: 1,
                                  price: 39000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.7",
                                      ratingCount: "12 ratings",
                                      ratingCountV2: "12",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697836",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489902",
                                  name: "Veg Lollipop (8 Pcs)",
                                  category: "Chinese Flavors",
                                  description:
                                    "Delicious vegetarian appetizer with a crispy coating and a flavorful filling, perfect for snacking or as a party dish. Enjoy 8 pieces in one serving.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/b45a6614-33e1-4dc2-9245-eaa647cdaa73_501478cf-9103-4ba3-a382-0a4d7a059f79.jpg_compressed",
                                  isVeg: 1,
                                  price: 38000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.1",
                                      ratingCount: "3 ratings",
                                      ratingCountV2: "3",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697835",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "52389306",
                        },
                        {
                          title: "Chinese Gravy",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "157368128",
                                  name: "Mushroom Manchurian Gravy[1000ml]",
                                  category: "Chinese Flavors",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 42900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  parentId: "94136176",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489876",
                                  name: "Paneer Chilli Gravy (1000 Ml)",
                                  category: "Chinese Flavors",
                                  description:
                                    "Delicious chunks of paneer cooked in a spicy and flavorful gravy, perfect for pairing with rice or naan. Enjoy the rich flavors in every bite.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/a1337846-6752-413d-85a5-c1fc1cf0bede_1eeed64a-9432-401c-a5f7-7c6a0960faad.jpg_compressed",
                                  isVeg: 1,
                                  price: 49500,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "3 ratings",
                                      ratingCountV2: "3",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697755",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489873",
                                  name: "Paneer Manchurian Gravy (1000 Ml)",
                                  category: "Chinese Flavors",
                                  description:
                                    "Delicious chunks of paneer cooked in a flavorful and spicy Manchurian gravy, perfect for pairing with steamed rice or noodles. Enjoy this popular Indo-Chinese dish!",
                                  isVeg: 1,
                                  price: 50000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.4",
                                      ratingCount: "4 ratings",
                                      ratingCountV2: "4",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697767",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489886",
                                  name: "Paneer Ginger Gravy (1000 Ml)",
                                  category: "Chinese Flavors",
                                  description:
                                    "Delicious gravy made with chunks of soft paneer cooked in a flavorful ginger-infused sauce. Perfect for pairing with rice or bread for a satisfying meal.",
                                  isVeg: 1,
                                  price: 49500,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  parentId: "88697758",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489916",
                                  name: "Veg Manchurian Gravy (1000 Ml)",
                                  category: "Chinese Flavors",
                                  description:
                                    "Delicious and flavorful vegetable balls in a savory and tangy gravy, perfect for pairing with steamed rice or noodles. Enjoy the authentic Indo-Chinese flavors.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/b5fb6551-c232-4779-94d5-f05415d663fd_a61c2097-08cf-429d-87b7-e0f3e169a887.jpg_compressed",
                                  isVeg: 1,
                                  price: 40500,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.4",
                                      ratingCount: "6 ratings",
                                      ratingCountV2: "6",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697837",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489883",
                                  name: "Paneer Schezwan Gravy (1000 Ml)",
                                  category: "Chinese Flavors",
                                  description:
                                    "Delicious and spicy Schezwan gravy made with chunks of soft paneer, perfect for adding a kick to your favorite dishes. Enjoy the bold flavors!",
                                  isVeg: 1,
                                  price: 50000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  parentId: "88697777",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "52389374",
                        },
                        {
                          title: "Fried Rice",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489798",
                                  name: "Triple Schezwan Fried Rice With Gravy",
                                  category: "Chinese Flavors",
                                  description:
                                    "A delicious combination of fried rice, mixed with a spicy Schezwan sauce, served with a flavorful gravy. Perfect for those who love bold flavors.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/5e8026f6-c574-497f-b4e7-e60c7299f6d8_11eaff94-d940-44c6-9e35-adca5d19d8c4.jpg_compressed",
                                  isVeg: 1,
                                  price: 49000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.5",
                                      ratingCount: "23 ratings",
                                      ratingCountV2: "23",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697819",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489852",
                                  name: "Veg Schezwan Fried Rice (1000 Ml)",
                                  category: "Chinese Flavors",
                                  description:
                                    "A flavorful and spicy combination of mixed vegetables and rice stir-fried in a delicious Schezwan sauce, perfect for a satisfying meal.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/49513673-cae2-48d9-aa09-d7489155c46f_04eb10de-dc11-4957-a762-09a0fc5dc02b.jpg_compressed",
                                  isVeg: 1,
                                  price: 41000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.0",
                                      ratingCount: "14 ratings",
                                      ratingCountV2: "14",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697844",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489854",
                                  name: "Veg Fried Rice (1000 Ml)",
                                  category: "Chinese Flavors",
                                  description:
                                    "A delicious and flavorful combination of mixed vegetables, rice, and aromatic spices, perfect for a satisfying meal. Enjoy this hearty dish in a generous 1000 ml portion.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/6281631a-5a15-456e-a2ee-e8571e41f9ed_cf91a80e-32e1-4fde-9323-146edbb8e239.jpg_compressed",
                                  isVeg: 1,
                                  price: 38000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.8",
                                      ratingCount: "13 ratings",
                                      ratingCountV2: "13",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697826",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489861",
                                  name: "Paneer Schezwan Fried Rice (1000 Ml)",
                                  category: "Chinese Flavors",
                                  description:
                                    "A delicious blend of spicy Schezwan sauce, tender paneer, and flavorful fried rice, perfect for a satisfying meal. Enjoy this dish in a generous 1000 ml portion.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/898677ee-68e5-4909-90bb-7e80203dd2a9_3587bff3-3d82-433c-bf50-29c041d73d66.jpg_compressed",
                                  isVeg: 1,
                                  price: 43000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "3 ratings",
                                      ratingCountV2: "3",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697776",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489862",
                                  name: "Veg Singapore Fried Rice (1000 Ml)",
                                  category: "Chinese Flavors",
                                  description:
                                    "A flavorful and aromatic dish made with long grain rice, mixed vegetables, and a blend of spices, inspired by the vibrant flavors of Singapore. Perfect for a satisfying meal.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/50e3a471-fd04-49df-a531-9961cf86566f_4f377e5a-ac22-40c0-8521-6dd6009a7f4f.jpg_compressed",
                                  isVeg: 1,
                                  price: 42500,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  parentId: "88697846",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489856",
                                  name: "Special Mix Veg Fried Rice (1000 Ml)",
                                  category: "Chinese Flavors",
                                  description:
                                    "Delicious blend of assorted vegetables and rice stir-fried to perfection, creating a flavorful and satisfying meal in a generous 1000 ml portion.",
                                  isVeg: 1,
                                  price: 43000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "3 ratings",
                                      ratingCountV2: "3",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697800",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489869",
                                  name: "Veg Hong Kong Fried Rice (1000 Ml)",
                                  category: "Chinese Flavors",
                                  description:
                                    "A delicious blend of stir-fried vegetables, rice, and savory sauces, this Veg Hong Kong Fried Rice is a popular choice for a flavorful and satisfying meal.",
                                  isVeg: 1,
                                  price: 42500,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  parentId: "88697830",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "52389352",
                        },
                        {
                          title: "Noodles",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489769",
                                  name: "Triple Schezwan Noodles With Gravy",
                                  category: "Chinese Flavors",
                                  description:
                                    "Delicious combination of crispy noodles served with spicy Schezwan gravy, vegetables, and protein. Perfect for those who love bold flavors and textures.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/f26fa204-e8da-4983-9cd8-b27fc64aede5_ccf0c129-6c13-48c5-89e2-833767ca5c3a.jpg_compressed",
                                  isVeg: 1,
                                  price: 49000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "4 ratings",
                                      ratingCountV2: "4",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697820",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489764",
                                  name: "Schezwan Hakka Noodles",
                                  category: "Chinese Flavors",
                                  description:
                                    "Spicy and flavorful noodles tossed in a fiery Schezwan sauce, perfect for those who enjoy a kick of heat in their Asian cuisine.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/4f0b4880-ea5c-4c7d-a28e-43b9fcadb685_4ea02813-db1f-4f6e-ab5f-71f31f3a1819.jpg_compressed",
                                  isVeg: 1,
                                  price: 41000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.9",
                                      ratingCount: "6 ratings",
                                      ratingCountV2: "6",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697793",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489761",
                                  name: "Veg Hakka Noodles (1000 Ml)",
                                  category: "Chinese Flavors",
                                  description:
                                    "Delicious and flavorful noodles tossed with fresh vegetables and aromatic spices, perfect for a satisfying meal. Enjoy the authentic taste of Asia.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/662290b5-07e3-44c0-a0bb-aed27b17c770_409e4233-0e64-4ff1-8835-ff95db524e11.jpg_compressed",
                                  isVeg: 1,
                                  price: 39000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.9",
                                      ratingCount: "23 ratings",
                                      ratingCountV2: "23",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697828",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "52389338",
                        },
                        {
                          title: "Chinese Soups",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11414085",
                                  name: "Veg Manchow Soup",
                                  category: "Chinese Flavors",
                                  description:
                                    "A flavorful and spicy soup filled with assorted vegetables, noodles, and aromatic spices. Perfect for warming up on a chilly day.",
                                  imageId: "nlhtehffotg2hthjkmqt",
                                  isVeg: 1,
                                  price: 26500,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.8",
                                      ratingCount: "222 ratings",
                                      ratingCountV2: "222",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "54965799",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11414087",
                                  name: "Tomato Soup",
                                  category: "Chinese Flavors",
                                  description:
                                    "A warm and comforting soup made with ripe tomatoes, aromatic herbs, and a touch of cream. Perfect for a cozy night in or a light lunch option.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/8/31/f3f5bc75-ff1b-4fd9-95ce-e689d025ea60_050275a3-9b21-4307-a9f4-619f9eb1a8b6.JPG",
                                  isVeg: 1,
                                  price: 26500,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "109 ratings",
                                      ratingCountV2: "109",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "54965793",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489694",
                                  name: "Veg Sweet Corn Soup",
                                  category: "Chinese Flavors",
                                  description:
                                    "A warm and comforting bowl of soup filled with fresh vegetables and sweet corn, perfect for a light and healthy meal. Enjoy the flavors of nature in every spoonful.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/8/31/8ad99713-3dc5-4c48-9c11-64443b54bdb1_006926fd-cb28-4da2-a807-98029c7746ce.JPG",
                                  isVeg: 1,
                                  price: 26500,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "57 ratings",
                                      ratingCountV2: "57",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "55157207",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "52389314",
                        },
                      ],
                      image: "nlhtehffotg2hthjkmqt",
                      categoryId: "52389305",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Falooda",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "11413774",
                              name: "Special Dry Fruit Falooda",
                              category: "Falooda",
                              description:
                                "Indulge in a delightful blend of assorted dry fruits, vermicelli, and sweet syrup in this special falooda, a perfect treat for your taste buds.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/9/15/589e25ce-c641-4365-ad71-2b673654d2c2_a3fe95e0-6cf2-477a-88b5-8f7fd084a2fd.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 40000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "53 ratings",
                                  ratingCountV2: "53",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "55012224",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "11780525",
                              name: "Dilkhush Falooda",
                              category: "Falooda",
                              description:
                                "A delightful combination of vermicelli, basil seeds, jelly, and ice cream, topped with nuts and rose syrup. Perfect for a refreshing treat.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/9/15/2b99cfc4-e876-4c26-a81b-b6ab7ed17843_0d11237a-99b6-4bb6-9eff-8129ec0713c0.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 45000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "6 ratings",
                                  ratingCountV2: "6",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "57023412",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "138172098",
                              name: "Special Kulfi Falooda",
                              category: "Falooda",
                              description:
                                "Indulge in a delightful combination of creamy kulfi and sweet falooda, topped with nuts and rose syrup for a special treat. Perfect for a hot day!",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/9/15/b21bfe9e-b773-44dc-833f-2ac259b306ac_b53e4477-0ed4-4ce5-b1b7-97ba7402d11a.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 40500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "4 ratings",
                                  ratingCountV2: "4",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "81074990",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "11413795",
                              name: "Kesar Falooda",
                              category: "Falooda",
                              description:
                                "A delightful dessert with layers of vermicelli, basil seeds, nuts, and rose syrup, topped with saffron-infused milk and ice cream. Perfect for a sweet treat!",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/9/15/c82cbdf3-c143-4af4-a6de-d0e3910faeb6_559c762c-aea1-4b48-adbf-346bbf7c0b4d.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 36000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "28 ratings",
                                  ratingCountV2: "28",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "55012191",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "11413813",
                              name: "Royal Falooda",
                              category: "Falooda",
                              description:
                                "Indulge in a decadent dessert with layers of vermicelli, basil seeds, rose syrup, and ice cream topped with nuts and fruits in a Royal Falooda.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/9/15/f26a41a1-e5c8-45a4-9e47-9341e8584cf9_8f592e03-9dae-494c-9596-04aa50a455b2.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 36000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "127 ratings",
                                  ratingCountV2: "127",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "55012221",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "11413789",
                              name: "Badam Pista Falooda",
                              category: "Falooda",
                              description:
                                "A delightful combination of crunchy badam and pista, mixed with silky falooda noodles and topped with a sweet syrup. Perfect for a refreshing treat.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/9/15/1f95cbf8-8600-4648-a139-8196ffce8634_b8c8dfcd-2b6b-461a-b146-b4c8d3608e67.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 36500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "7 ratings",
                                  ratingCountV2: "7",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "56650851",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "11780526",
                              name: "Maharaja Falooda",
                              category: "Falooda",
                              description:
                                "Indulge in a royal treat with layers of vermicelli, basil seeds, jelly, and ice cream topped with nuts and rose syrup in a Maharaja Falooda.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/9/15/e0c06bb4-675d-48a0-8b0f-e61913c12ec4_3803cce3-c1ee-4139-96fb-381d95e9763a.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 38000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              parentId: "81074929",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "11413820",
                              name: "Kashmiri Falooda",
                              category: "Falooda",
                              description:
                                "A traditional dessert from Kashmir, this sweet and refreshing treat is made with vermicelli, rose syrup, basil seeds, and ice cream. Perfect for a hot summer day.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/9/15/694559d4-bece-46ae-a5e3-6d50370d3e38_18666ad2-468d-4275-823f-6cde80e8e373.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 36000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "5 ratings",
                                  ratingCountV2: "5",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "61954643",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "11413802",
                              name: "Mango Falooda",
                              category: "Falooda",
                              description:
                                "A delightful combination of sweet mangoes, creamy ice cream, vermicelli noodles, and rose syrup, creating a refreshing and indulgent dessert experience.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/9/15/839089e4-93ae-4193-ae22-d2e40555610e_e01a208d-fd36-4d49-a73b-2fb41cbfcbfc.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 36000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "36 ratings",
                                  ratingCountV2: "36",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "55257347",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "11413768",
                              name: "Strawberry Falooda",
                              category: "Falooda",
                              description:
                                "A refreshing dessert made with layers of strawberry-flavored milk, vermicelli, basil seeds, and ice cream, topped with nuts and rose syrup.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/9/15/dbba71fe-29a2-44e4-bd74-2cfdaf65ec33_b3db8ef0-0f49-4b09-a6be-b3ff9df52235.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 36000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "13 ratings",
                                  ratingCountV2: "13",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "56267794",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "11413825",
                              name: "Pineapple Falooda",
                              category: "Falooda",
                              description:
                                "A refreshing and tropical twist on the classic falooda dessert, featuring juicy pineapple chunks mixed with creamy milk, vermicelli noodles, and sweet basil seeds. Perfect for a hot summer day.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/9/19/01fc76e5-22ee-46c8-b799-3ce16df0ed1b_43fb850a-0e8e-4448-a1f9-0b636220d5d0.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 36000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "59608314",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "11413832",
                              name: "Thandai Falooda",
                              category: "Falooda",
                              description:
                                "A refreshing and indulgent dessert combining the rich flavors of thandai with the delightful texture of falooda, perfect for a hot summer day.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/9/15/95fc5517-2d92-470a-8660-96bac72939ab_adff0db8-df7e-43eb-87e4-02d23d2ff8d7.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 36000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "2.0",
                                  ratingCount: "17 ratings",
                                  ratingCountV2: "17",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#FFF0CD", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_low",
                                  ratingTextColor: "rating_low",
                                  ratingCountTextColor: "rating_low",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "57703722",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "11413807",
                              name: "Orange Falooda",
                              category: "Falooda",
                              description:
                                "A refreshing and colorful dessert made with layers of orange-flavored jelly, vermicelli, basil seeds, and topped with creamy milk and ice cream.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/9/19/072efa51-f6ea-48fc-8dd1-00d4ca42028e_672774be-ced9-4e19-bf13-d11128eceffb.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 36000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              parentId: "61954659",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image:
                        "FOOD_CATALOG/IMAGES/CMS/2024/9/15/589e25ce-c641-4365-ad71-2b673654d2c2_a3fe95e0-6cf2-477a-88b5-8f7fd084a2fd.jpg_compressed",
                      categoryId: "52389311",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Pav Bhaji",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "151415362",
                              name: "Masala Pav",
                              category: "Pav Bhaji",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/9/25/ddf63a55-8381-4c66-b85a-2c9f21dbd9a2_9c6c396c-b766-4b55-a048-4427a604c584.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 19500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "20 ratings",
                                  ratingCountV2: "20",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "89929543",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "11413681",
                              name: "Pav Bhaji",
                              category: "Pav Bhaji",
                              description:
                                "A popular Indian street food, consisting of a spicy vegetable curry (bhaji) served with buttered bread rolls (pav) (2 Pcs). Perfect for a flavorful and satisfying meal.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/9/15/db3c9cc7-bd40-4242-96a3-4cfe626737ec_d528f578-e429-4361-a9d8-ba4eeea281a4.jpg_compressed",
                              isVeg: 1,
                              price: 31000,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                "Next available at 11 am, today",
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "2686 ratings",
                                  ratingCountV2: "2.7K+",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "54965781",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "11413706",
                              name: "Cheese Pav Bhaji",
                              category: "Pav Bhaji",
                              description:
                                "A delicious blend of mashed vegetables cooked with a medley of spices, topped with a generous amount of melted cheese, served with buttered pav buns (2 Pcs).",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/9/15/69411e7a-7e08-44a6-95cc-3c0cc4f11320_74558e75-71d1-47f6-a6eb-e82c23469850.jpg_compressed",
                              isVeg: 1,
                              price: 39500,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                "Next available at 11 am, today",
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.9",
                                  ratingCount: "226 ratings",
                                  ratingCountV2: "226",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "55012173",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "11413735",
                              name: "Sadguru Special Dry Fruit Pav Bhaji",
                              category: "Pav Bhaji",
                              description:
                                "A delectable blend of mixed dry fruits and vegetables cooked to perfection, Sadguru Special Dry Fruit Pav Bhaji is a unique twist on the classic Indian street food favorite, served with buttered pav buns (2 Pcs).",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/9/15/20380b08-2358-49f9-92dc-19d842b21dc7_ff012693-ab8b-49ca-a3a6-c71704522cee.jpg_compressed",
                              isVeg: 1,
                              price: 45000,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                "Next available at 11 am, today",
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "26 ratings",
                                  ratingCountV2: "26",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "56497045",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "11413695",
                              name: "Paneer Pav Bhaji",
                              category: "Pav Bhaji",
                              description:
                                "A delicious blend of soft paneer and mixed vegetables cooked in a spicy tomato-based gravy, served with buttered pav buns (2 Pcs). Perfect for a satisfying meal.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/9/15/fb51bb19-659e-440a-a6de-3f70676746da_db3aef89-b937-404b-85f6-ff087b9e9083.jpg_compressed",
                              isVeg: 1,
                              price: 39500,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                "Next available at 11 am, today",
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "30 ratings",
                                  ratingCountV2: "30",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "55526196",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "11413688",
                              name: "Jain Pav Bhaji",
                              category: "Pav Bhaji",
                              description:
                                "A delicious and flavorful Indian street food dish made with mixed vegetables and spices, served with buttered buns (2 Pcs). Perfect for vegetarians following a Jain diet.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/9/15/2eef48a0-684d-4f77-bf20-9d28ea9ea98a_5dec0558-7d2c-4415-bb0c-47cd07e0e32f.jpg_compressed",
                              isVeg: 1,
                              price: 32500,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                "Next available at 11 am, today",
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "81 ratings",
                                  ratingCountV2: "81",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "55106641",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "150212414",
                              name: "Extra Pav(2 Picecs)",
                              category: "Pav Bhaji",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/9/25/7df985f5-cf01-4e31-8f19-3de8d28f1e7f_ecb02516-a5ab-4be3-bf32-a72f460c3730.jpg",
                              isVeg: 1,
                              price: 5000,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                "Next available at 11 am, today",
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "131 ratings",
                                  ratingCountV2: "131",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "89094204",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image:
                        "FOOD_CATALOG/IMAGES/CMS/2024/9/15/db3c9cc7-bd40-4242-96a3-4cfe626737ec_d528f578-e429-4361-a9d8-ba4eeea281a4.jpg_compressed",
                      categoryId: "52389331",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      title: "Desserts",
                      categories: [
                        {
                          title: "Super Cream Desserts",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489719",
                                  name: "Dry Fruits With Cream",
                                  category: "Desserts",
                                  description:
                                    "A delightful combination of assorted dry fruits mixed with a rich and creamy base, creating a decadent and indulgent treat for any occasion.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/333a1608-adfd-4189-b58f-d6c48b63d4fd_c2c3912e-0e29-4f55-8dc6-d43374611d51.jpg_compressed",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 50800,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  parentId: "88697712",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489720",
                                  name: "Sitaphal With Cream",
                                  category: "Desserts",
                                  description:
                                    "Creamy Sitaphal dessert made with fresh custard apple pulp, topped with a dollop of rich cream for a decadent and indulgent treat.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/556ecf26-330a-49d5-bd53-f1836c48a2ba_43eb23d6-34a6-4d19-9b7d-1b70c5d31524.jpg_compressed",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 40700,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "4 ratings",
                                      ratingCountV2: "4",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697799",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489725",
                                  name: "Mixed Fruits With Cream",
                                  category: "Desserts",
                                  description:
                                    "A delightful combination of assorted fruits topped with a luscious cream, creating a refreshing and indulgent treat for your taste buds.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/5cbd7c96-9525-4422-a278-dac6ca2f6e36_ca9ce6bf-7200-482c-b7cf-08b229816939.jpg_compressed",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 36900,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "4 ratings",
                                      ratingCountV2: "4",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697742",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "52389296",
                        },
                        {
                          title: "House Special Desserts",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489813",
                                  name: "Mixed Fruit Salad Jelly With Vanilla Ice Cream",
                                  category: "Desserts",
                                  description:
                                    "A delightful combination of mixed fruit salad jelly served with a scoop of creamy vanilla ice cream, creating a refreshing and satisfying dessert.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 30000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "4 ratings",
                                      ratingCountV2: "4",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697740",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489779",
                                  name: "Mixed Fruit Salad With Vanilla Ice Cream",
                                  category: "Desserts",
                                  description:
                                    "A refreshing combination of assorted fruits topped with a scoop of creamy vanilla ice cream, perfect for a light and satisfying dessert.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 27000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "12 ratings",
                                      ratingCountV2: "12",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697741",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11413692",
                                  name: "Fruit Salad",
                                  category: "Desserts",
                                  description:
                                    "A refreshing mix of assorted fruits, perfect for a light and healthy snack or side dish. Enjoy the natural sweetness and vibrant colors in every bite.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 19500,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.5",
                                      ratingCount: "106 ratings",
                                      ratingCountV2: "106",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "55012181",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489811",
                                  name: "Fruit Salad With Jelly",
                                  category: "Desserts",
                                  description:
                                    "A refreshing mix of assorted fruits topped with colorful and wobbly jelly, perfect for a light and healthy dessert option.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 23000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.9",
                                      ratingCount: "26 ratings",
                                      ratingCountV2: "26",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "57911311",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11413703",
                                  name: "Plain Jelly",
                                  category: "Desserts",
                                  description:
                                    "Smooth and sweet, this translucent gelatin dessert is a simple yet satisfying treat. Enjoy the wobbly texture and burst of fruity flavor in every bite.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 16000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.8",
                                      ratingCount: "5 ratings",
                                      ratingCountV2: "5",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "57249774",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489809",
                                  name: "Orange Jelly With Vanilla Ice Cream",
                                  category: "Desserts",
                                  description:
                                    "Delight your taste buds with a refreshing combination of tangy orange jelly paired with creamy vanilla ice cream. Perfect for a sweet and citrusy treat.",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 24000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  parentId: "88697750",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "52389327",
                        },
                      ],
                      image:
                        "FOOD_CATALOG/IMAGES/CMS/2024/9/15/333a1608-adfd-4189-b58f-d6c48b63d4fd_c2c3912e-0e29-4f55-8dc6-d43374611d51.jpg_compressed",
                      categoryId: "52389295",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Desi Sweets",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "149489938",
                              name: "Kaju Katli [500 Grams]",
                              category: "Desi Sweets",
                              description:
                                "Delicious Indian sweet made with cashews, sugar, and ghee. Perfect for celebrations or as a gift. Each box contains 500 grams of this delectable treat.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/9/15/f86df39d-e426-4b5b-ad31-4de12d8ed182_76907531-d7f3-4d0f-b261-f5a69bab26e8.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 60000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              parentId: "88697725",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "149489931",
                              name: "Kandi Peda [500 Grams]",
                              category: "Desi Sweets",
                              description:
                                "Delicious Indian sweet made with khoya, sugar, and flavored with cardamom. Perfect for satisfying your sweet cravings in every bite.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/9/15/0df86955-30fd-4174-ae99-2e07e4c5a137_d2221a37-6c06-4a9f-8b5e-e6d700c2dfff.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 42000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              parentId: "88697727",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "149489831",
                              name: "Rasmalai [2 Pieces]",
                              category: "Desi Sweets",
                              description:
                                "Delicious Indian dessert made with soft, spongy cottage cheese balls soaked in sweet, creamy milk, flavored with cardamom and garnished with nuts.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/9/15/96cb40fc-41ce-47d0-819c-2889bd7b88da_f9e3b5f2-b8ef-4f3d-9278-835e5a2cd5c4.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 10000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "20 ratings",
                                  ratingCountV2: "20",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "81682469",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "149489894",
                              name: "Malai Sandwich [2 Piece]",
                              category: "Desi Sweets",
                              description:
                                "Delicious sandwich filled with creamy malai filling, perfect for a quick snack or light meal. Enjoy the rich flavors in every bite.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/9/15/f7a73c79-832d-427d-a9a1-a0af614eed73_39ee7f0c-02a8-4098-b9ea-aaec74163774.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 13000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "10 ratings",
                                  ratingCountV2: "10",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "89606812",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "149489864",
                              name: "Gulab Jamun [2 Pieces]",
                              category: "Desi Sweets",
                              description:
                                "Soft, spongy dessert soaked in sweet syrup, perfect for satisfying your sweet tooth cravings. Enjoy two pieces of this indulgent treat.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/9/15/1a49d9be-42a3-43ba-b3dc-2142ef5c3ecc_b86b681d-bfdf-47f0-ad3a-b44a774753c6.jpg_compressed",
                              inStock: 1,
                              isVeg: 1,
                              price: 8000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "36 ratings",
                                  ratingCountV2: "36",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "81682461",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "149489746",
                              name: "Mango malai sandwich [1 Piece]",
                              category: "Desi Sweets",
                              description:
                                "Delicious Indian dessert made with juicy mangoes and creamy rasmalai, perfect for satisfying your sweet cravings in just one piece.",
                              inStock: 1,
                              isVeg: 1,
                              price: 12000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              parentId: "87835933",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image:
                        "FOOD_CATALOG/IMAGES/CMS/2024/9/15/f86df39d-e426-4b5b-ad31-4de12d8ed182_76907531-d7f3-4d0f-b261-f5a69bab26e8.jpg_compressed",
                      categoryId: "52389333",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      title: "Comfort Food Favorites",
                      categories: [
                        {
                          title: "Pizzas",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489703",
                                  name: 'Veg Tandoori Pizza (9")',
                                  category: "Comfort Food Favorites",
                                  description:
                                    'Delicious 9" pizza topped with a medley of fresh vegetables and marinated in flavorful tandoori spices, baked to perfection in a traditional oven.',
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/26cdcbda-902c-498f-b642-5ec51bbb8a67_c3841473-06e9-4572-a3a1-38ecf9a4c95d.jpg_compressed",
                                  isVeg: 1,
                                  price: 45500,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  parentId: "88697847",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489700",
                                  name: 'Veg Sadguru Special Pizza (9")',
                                  category: "Comfort Food Favorites",
                                  description:
                                    'Delicious 9" pizza topped with a variety of fresh vegetables and special seasonings, created by the renowned chef. Perfect for a satisfying meal.',
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/bde23784-715f-416d-9784-e2108ebd0d45_3d4de8c0-32ec-4294-b7f8-8a0d6db79d7c.jpg_compressed",
                                  isVeg: 1,
                                  price: 44000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.8",
                                      ratingCount: "6 ratings",
                                      ratingCountV2: "6",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697843",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489698",
                                  name: 'Mushroom Masala Pizza (9")',
                                  category: "Comfort Food Favorites",
                                  description:
                                    'Delicious 9" pizza topped with a flavorful blend of mushrooms and masala spices, perfect for a satisfying and savory meal.',
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/8afd8207-b099-4fd6-ae05-8d4293b6bfd5_8efb73e9-7e9d-4ea1-9266-2de04c17d08f.jpg_compressed",
                                  isVeg: 1,
                                  price: 43000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  parentId: "88697747",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489908",
                                  name: 'Paneer Tawa Pizza (9")',
                                  category: "Comfort Food Favorites",
                                  description:
                                    'Delicious 9" pizza topped with chunks of paneer, bell peppers, onions, and a blend of spices, cooked on a tawa for a unique and flavorful twist.',
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/19/d9f387fa-d048-4c6d-9792-be164ee12c0f_3d4d0510-6fe7-4236-aec4-842ecd43ab5d.jpg",
                                  isVeg: 1,
                                  price: 40500,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  parentId: "88697778",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489677",
                                  name: 'Dry Fruit Pizza (9")',
                                  category: "Comfort Food Favorites",
                                  description:
                                    'A delicious 9" pizza topped with a variety of dried fruits, nuts, and seeds, creating a unique and flavorful twist on the classic pizza.',
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/a428e30c-9acd-4484-920d-74973bb3e261_c00fc10c-88d5-465a-b60f-98c0b848b761.jpg_compressed",
                                  isVeg: 1,
                                  price: 40500,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  parentId: "88697711",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489691",
                                  name: 'Mushroom Pizza (9")',
                                  category: "Comfort Food Favorites",
                                  description:
                                    'Delicious 9" pizza topped with savory mushrooms, gooey cheese, and flavorful tomato sauce. Perfect for a satisfying and indulgent meal.',
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/7571a57d-f4e8-46c1-bb42-0dc30ab2f5fa_e14ee151-4ee4-468f-b39c-cb6430356d0b.jpg_compressed",
                                  isVeg: 1,
                                  price: 36000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "3 ratings",
                                      ratingCountV2: "3",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697748",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489689",
                                  name: 'Veg Pizza (9")',
                                  category: "Comfort Food Favorites",
                                  description:
                                    'Delicious 9" pizza topped with a variety of fresh vegetables, gooey cheese, and flavorful tomato sauce. Perfect for a satisfying and tasty meal.',
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/36ef5e1d-fd9a-4d7e-af5a-aaf92cb04a74_c2882d9a-b155-444f-bcb6-2fdb460dfa2c.jpg_compressed",
                                  isVeg: 1,
                                  price: 31000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.3",
                                      ratingCount: "37 ratings",
                                      ratingCountV2: "37",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697841",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489692",
                                  name: 'Cheese Pizza (Only Cheese) (9")',
                                  category: "Comfort Food Favorites",
                                  description:
                                    'Delicious 9" pizza topped with gooey melted cheese, perfect for cheese lovers. Enjoy a classic favorite with a crispy crust and savory cheese blend.',
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/fbc48d6f-2aa9-4275-91ce-b026c366ad76_59a02af8-cdad-4030-8ba1-e46e4db0c9e3.jpg_compressed",
                                  isVeg: 1,
                                  price: 35000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.1",
                                      ratingCount: "6 ratings",
                                      ratingCountV2: "6",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697696",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489681",
                                  name: 'Veg Mexican Pizza (9")',
                                  category: "Comfort Food Favorites",
                                  description:
                                    'A delicious 9" pizza topped with a medley of fresh vegetables, zesty Mexican spices, and gooey melted cheese. Perfect for a fiesta in your mouth!',
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/140bc80a-22d2-41a7-b8f1-a1774c04b6a4_6c231201-9f81-4b80-ad85-98752bd50d2b.jpg_compressed",
                                  isVeg: 1,
                                  price: 36000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  parentId: "88697838",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489679",
                                  name: 'Corn Pizza (9")',
                                  category: "Comfort Food Favorites",
                                  description:
                                    'Delicious 9" pizza topped with sweet corn kernels, gooey cheese, and savory tomato sauce. Perfect for a unique twist on a classic favorite.',
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/5132dcc9-d8c2-4d39-90b7-afd644c33a8b_87a2204d-8fc8-45e5-b4f7-eadd3a0685b4.jpg_compressed",
                                  isVeg: 1,
                                  price: 35000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  parentId: "88697701",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489695",
                                  name: 'Veg Pineapple Pizza (9")',
                                  category: "Comfort Food Favorites",
                                  description:
                                    'Delicious 9" pizza topped with a perfect blend of vegetables and sweet pineapple chunks. A flavorful and satisfying vegetarian option.',
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/a16a7bb1-11ae-4abd-91be-1c4a3c59ef6c_a78b0a05-aa32-4cb3-862b-d58a81720dc6.jpg_compressed",
                                  isVeg: 1,
                                  price: 34000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  parentId: "88697840",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489693",
                                  name: 'Veg Washington Pizza (9")',
                                  category: "Comfort Food Favorites",
                                  description:
                                    'Delicious 9" pizza topped with fresh vegetables and gooey cheese, inspired by the flavors of Washington state. Perfect for a satisfying meal.',
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/16/aa713727-66e3-4e54-b744-2870ef153fd9_a22c392e-8f99-474a-8f2c-ed665916dbf0.jpg",
                                  isVeg: 1,
                                  price: 34000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  parentId: "88697849",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489688",
                                  name: 'Jain Pizza (9")',
                                  category: "Comfort Food Favorites",
                                  description:
                                    'Delicious 9" pizza made with Jain ingredients, perfect for those following a vegetarian diet. Enjoy a flavorful and satisfying meal without any compromise.',
                                  isVeg: 1,
                                  price: 31000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  parentId: "88697721",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489702",
                                  name: 'Paneer Matar Pizza (9")',
                                  category: "Comfort Food Favorites",
                                  description:
                                    'Delicious 9" pizza topped with chunks of paneer and fresh green peas, perfect for a satisfying and flavorful meal.',
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/c902a3b0-d1bf-4374-b3e8-8f40ef52ac04_1c28b573-d021-468d-aeed-3ba5f80ec139.jpg_compressed",
                                  isVeg: 1,
                                  price: 43000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  parentId: "88697770",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "52389303",
                        },
                        {
                          title: "Sandwiches",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489841",
                                  name: "Veg Tandoori Sandwich",
                                  category: "Comfort Food Favorites",
                                  description:
                                    "A delicious combination of grilled vegetables and tangy spices, sandwiched between two slices of bread. Perfect for a quick and satisfying meal.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/753928e6-a081-4c32-b124-2ab5805afe8d_2ccf0324-6f96-4b06-9fb7-9555ca95465c.jpg_compressed",
                                  isVeg: 1,
                                  price: 38500,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  parentId: "88697848",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "138172050",
                                  name: "Veg Cheese Grilled Sandwich",
                                  category: "Comfort Food Favorites",
                                  description:
                                    "A delicious combination of vegetables and gooey cheese sandwiched between crispy grilled bread slices, perfect for a quick and satisfying meal.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/373e99b1-505f-42ab-8a17-66d63737fc9d_e04898fd-b73e-4e8b-a9b6-35bd50ea202d.jpg_compressed",
                                  isVeg: 1,
                                  price: 33000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.6",
                                      ratingCount: "46 ratings",
                                      ratingCountV2: "46",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "81075005",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489866",
                                  name: "Cheese Chilli Garlic Toast (8 Pcs)",
                                  category: "Comfort Food Favorites",
                                  description:
                                    "Deliciously cheesy and spicy garlic toast with a hint of chili flavor. Perfect for a quick and tasty snack or appetizer. Enjoy 8 pieces in one pack.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/d6e847e2-72bb-4528-9c3e-d3b0c64d4a2c_9a75ffa1-319a-462e-9d50-31d33db0d1b4.jpg_compressed",
                                  isVeg: 1,
                                  price: 28500,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.8",
                                      ratingCount: "9 ratings",
                                      ratingCountV2: "9",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697694",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489888",
                                  name: "Veg Grilled Sandwich",
                                  category: "Comfort Food Favorites",
                                  description:
                                    "A delicious sandwich filled with a variety of vegetables and grilled to perfection, making it a satisfying and healthy meal option. Perfect for any time of day.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/d21ce649-ab4d-4a12-b778-5c26ab6990ce_64c0de47-976a-4869-9ea9-98c45d7e5b27.jpg_compressed",
                                  isVeg: 1,
                                  price: 25000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.7",
                                      ratingCount: "14 ratings",
                                      ratingCountV2: "14",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697827",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "138172056",
                                  name: "Mix Veg Sandwich",
                                  category: "Comfort Food Favorites",
                                  description:
                                    "A delicious sandwich filled with a variety of fresh vegetables, perfect for a quick and satisfying meal on the go. Enjoy the crunchy and flavorful bites!",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/32ae2080-bf5e-4ad8-8b04-76a665ba8f79_cea5836b-cb6f-4e3f-abac-ec14dec4fb07.jpg_compressed",
                                  isVeg: 1,
                                  price: 14500,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "3.5",
                                      ratingCount: "10 ratings",
                                      ratingCountV2: "10",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#D9EFEC", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_medium",
                                      ratingTextColor: "rating_medium",
                                      ratingCountTextColor: "rating_medium",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "81074941",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "52389336",
                        },
                        {
                          title: "Burgers",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489892",
                                  name: "Veg Cheese Burger (Only Cheese)",
                                  category: "Comfort Food Favorites",
                                  description:
                                    "A delicious burger filled with gooey melted cheese, perfect for all the cheese lovers out there. Enjoy the cheesy goodness in every bite!",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/49815c69-63d0-41c0-9888-c59b70014f38_09db767d-d56f-45ec-b005-a290fc35798a.jpg_compressed",
                                  isVeg: 1,
                                  price: 24000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "1.9",
                                      ratingCount: "3 ratings",
                                      ratingCountV2: "3",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#FFF0CD", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_low",
                                      ratingTextColor: "rating_low",
                                      ratingCountTextColor: "rating_low",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697822",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11413830",
                                  name: "Veg Burger",
                                  category: "Comfort Food Favorites",
                                  description:
                                    "A delicious veg patty sandwiched between two soft buns, topped with fresh vegetables and savory sauces.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/5a46ccda-caea-4da0-b6ad-422cb09f3e3c_ab4f66e8-5fcb-4525-b028-383045897328.jpg_compressed",
                                  isVeg: 1,
                                  price: 21000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.6",
                                      ratingCount: "126 ratings",
                                      ratingCountV2: "126",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "81075004",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "52389376",
                        },
                      ],
                      image:
                        "FOOD_CATALOG/IMAGES/CMS/2024/9/15/49815c69-63d0-41c0-9888-c59b70014f38_09db767d-d56f-45ec-b005-a290fc35798a.jpg_compressed",
                      categoryId: "52389302",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      title: "Rice, Biryani & Accompaniments",
                      categories: [
                        {
                          title: "Biryani",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489724",
                                  name: "Spicy Paneer Tikka Biryani (750 Ml)",
                                  category: "Rice, Biryani & Accompaniments",
                                  description:
                                    "A flavorful blend of marinated paneer pieces, aromatic basmati rice, and a medley of spices, all cooked to perfection in a spicy biryani sauce.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/582a6d9f-df47-4f4c-856a-4990cd0d33aa_970cda06-26d3-46df-9a91-47e46aa3d938.jpg_compressed",
                                  isVeg: 1,
                                  price: 53500,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.1",
                                      ratingCount: "9 ratings",
                                      ratingCountV2: "9",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697805",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489736",
                                  name: "Paneer Biryani (750 Ml)",
                                  category: "Rice, Biryani & Accompaniments",
                                  description:
                                    "Aromatic basmati rice cooked with succulent cubes of cottage cheese, fragrant spices, and fresh herbs, all layered together in a deliciously satisfying meal.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/dae039ec-7e99-447b-bfa6-2e3be328e4a1_8d324cb7-2c50-4632-977c-dc449519ac25.jpg_compressed",
                                  isVeg: 1,
                                  price: 47500,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "3 ratings",
                                      ratingCountV2: "3",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697753",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489705",
                                  name: "Sadguru Special Biryani (1000 Ml)",
                                  category: "Rice, Biryani & Accompaniments",
                                  description:
                                    "Indulge in a flavorful and aromatic biryani dish with a generous portion size of 1000 ml, specially crafted by Sadguru for a truly satisfying meal experience.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/caef02a3-3f5c-4269-be3c-445956ecc1e5_2aa3f9da-07f9-42fa-9f1b-6702bc1c474d.jpg_compressed",
                                  isVeg: 1,
                                  price: 43500,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.4",
                                      ratingCount: "11 ratings",
                                      ratingCountV2: "11",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697791",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489707",
                                  name: "Lucknowi Veg Biryani (750 Ml)",
                                  category: "Rice, Biryani & Accompaniments",
                                  description:
                                    "Aromatic basmati rice cooked with Lucknowi spices, mixed vegetables, and garnished with fried onions and fresh herbs. Served in a 750 ml container.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/2e8f34df-7c02-4331-9eba-04e68ddb712a_074f75ee-e0f9-480f-a02d-c0ea91134b10.jpg_compressed",
                                  isVeg: 1,
                                  price: 43000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  parentId: "88697731",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489730",
                                  name: "Mushroom Biryani (750 Ml)",
                                  category: "Rice, Biryani & Accompaniments",
                                  description:
                                    "Aromatic basmati rice cooked with a blend of spices, caramelized onions, and tender mushrooms in a rich and flavorful biryani sauce. Enjoy this hearty dish in a 750 ml serving.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/5bf261cb-60e3-448a-a9d0-021ecc45d7f6_1b2f0b9b-05b2-433d-b237-41baadbedb1f.jpg_compressed",
                                  isVeg: 1,
                                  price: 43000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  parentId: "88697744",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489723",
                                  name: "Spicy Kolhapuri Biryani (750 Ml)",
                                  category: "Rice, Biryani & Accompaniments",
                                  description:
                                    "A flavorful and aromatic rice dish cooked with a blend of spices and vegetables, originating from the city of Kolhapur. Perfect for those who enjoy a spicy kick in their biryani.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/3ab45bd6-094b-4f50-9082-15d987b68151_042609ac-944f-4909-993f-aa21f69d26fc.jpg_compressed",
                                  isVeg: 1,
                                  price: 39000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  parentId: "88697802",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489718",
                                  name: "Spicy Hyderabadi Biryani (750 Ml)",
                                  category: "Rice, Biryani & Accompaniments",
                                  description:
                                    "Aromatic basmati rice cooked with tender meat, fragrant spices, and fiery chili peppers in a rich and flavorful Hyderabadi style biryani.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2024/9/15/2b5b6c92-8c49-4bf1-93ba-589e80ed7e4a_2ba12fb4-abc3-4c47-a140-71fe50a2d64b.jpg_compressed",
                                  isVeg: 1,
                                  price: 39000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "3 ratings",
                                      ratingCountV2: "3",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697801",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489741",
                                  name: "Veg Biryani (750 Ml)",
                                  category: "Rice, Biryani & Accompaniments",
                                  description:
                                    "Aromatic basmati rice cooked with assorted vegetables, herbs, and spices, creating a flavorful and satisfying meal in a convenient 750 ml portion.",
                                  isVeg: 1,
                                  price: 36500,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.6",
                                      ratingCount: "19 ratings",
                                      ratingCountV2: "19",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697821",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "52389322",
                        },
                        {
                          title: "Rice",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489737",
                                  name: "Paneer Pulao (750 Ml)",
                                  category: "Rice, Biryani & Accompaniments",
                                  description:
                                    "Aromatic basmati rice cooked with succulent cubes of paneer, fragrant spices, and fresh vegetables, creating a flavorful and satisfying meal in a convenient 750 ml pack.",
                                  isVeg: 1,
                                  price: 47500,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  parentId: "88697774",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489756",
                                  name: "Tawa Pulao (750 Ml)",
                                  category: "Rice, Biryani & Accompaniments",
                                  description:
                                    "A delicious and aromatic rice dish cooked on a hot griddle with a mix of vegetables, spices, and herbs, perfect for a satisfying meal.",
                                  isVeg: 1,
                                  price: 36000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.7",
                                      ratingCount: "19 ratings",
                                      ratingCountV2: "19",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697818",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489732",
                                  name: "Dal Khichdi (750 Ml)",
                                  category: "Rice, Biryani & Accompaniments",
                                  description:
                                    "A comforting and nutritious Indian dish made with lentils, rice, and spices, perfect for a hearty meal. Enjoy this flavorful and wholesome meal in a generous serving size.",
                                  isVeg: 1,
                                  price: 34000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.8",
                                      ratingCount: "54 ratings",
                                      ratingCountV2: "54",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697706",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489752",
                                  name: "Veg Pulao (750 Ml)",
                                  category: "Rice, Biryani & Accompaniments",
                                  description:
                                    "A flavorful and aromatic rice dish cooked with assorted vegetables, herbs, and spices. Perfect for a satisfying and wholesome meal.",
                                  isVeg: 1,
                                  price: 31000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.5",
                                      ratingCount: "22 ratings",
                                      ratingCountV2: "22",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697842",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489747",
                                  name: "Jeera Rice (750 Ml)",
                                  category: "Rice, Biryani & Accompaniments",
                                  description:
                                    "Fragrant basmati rice cooked with cumin seeds and aromatic spices, perfect as a side dish to complement any Indian meal. Enjoy the flavorful Jeera Rice!",
                                  isVeg: 1,
                                  price: 31000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.9",
                                      ratingCount: "17 ratings",
                                      ratingCountV2: "17",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697722",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489750",
                                  name: "Curd Rice (750 Ml)",
                                  category: "Rice, Biryani & Accompaniments",
                                  description:
                                    "Creamy and tangy rice dish made with yogurt, tempered with mustard seeds, curry leaves, and green chilies. Perfect comfort food for any meal.",
                                  isVeg: 1,
                                  price: 30000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  parentId: "88697702",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489766",
                                  name: "Steamed Rice (750 Ml)",
                                  category: "Rice, Biryani & Accompaniments",
                                  description:
                                    "Fluffy and perfectly cooked steamed rice served in a generous portion of 750 ml. Ideal as a side dish or base for your favorite stir-fries and curries.",
                                  isVeg: 1,
                                  price: 28000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  parentId: "88697813",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "52389326",
                        },
                        {
                          title: "Accompaniments",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489709",
                                  name: "Vegetable Raita (500 Ml)",
                                  category: "Rice, Biryani & Accompaniments",
                                  description:
                                    "Creamy yogurt mixed with a variety of fresh vegetables, herbs, and spices, creating a refreshing and flavorful side dish perfect for pairing with spicy Indian dishes.",
                                  isVeg: 1,
                                  price: 17000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "4.1",
                                      ratingCount: "5 ratings",
                                      ratingCountV2: "5",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "88697824",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489714",
                                  name: "Boondi Raita (500 Ml)",
                                  category: "Rice, Biryani & Accompaniments",
                                  description:
                                    "Creamy yogurt mixed with crispy chickpea flour pearls, flavored with aromatic spices. Perfect as a refreshing side dish to complement any meal.",
                                  isVeg: 1,
                                  price: 17000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  parentId: "88697691",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489712",
                                  name: "Pineapple Raita (500 Ml)",
                                  category: "Rice, Biryani & Accompaniments",
                                  description:
                                    "Creamy yogurt mixed with chunks of sweet pineapple, flavored with aromatic spices. Perfect as a refreshing side dish or accompaniment to spicy Indian meals.",
                                  isVeg: 1,
                                  price: 17000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  parentId: "88697782",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "11414081",
                                  name: "Veg Salad",
                                  category: "Rice, Biryani & Accompaniments",
                                  description:
                                    "A refreshing mix of crisp vegetables, tossed in a light vinaigrette dressing. Packed with nutrients and bursting with flavor, perfect for a healthy meal.",
                                  isVeg: 1,
                                  price: 12000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "23 ratings",
                                      ratingCountV2: "23",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  parentId: "55303478",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489687",
                                  name: "Fried Papad (1 Pcs)",
                                  category: "Rice, Biryani & Accompaniments",
                                  description:
                                    "Crispy and flavorful, these fried papads are the perfect accompaniment to any meal. Enjoy the crunchy texture and delicious spices in every bite.",
                                  isVeg: 1,
                                  price: 6000,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  parentId: "88770193",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "149489716",
                                  name: "Roasted Papad (1 Pcs)",
                                  category: "Rice, Biryani & Accompaniments",
                                  description:
                                    "Crispy and flavorful, these roasted papads are the perfect accompaniment to any meal. Enjoy the crunchy texture and delicious spices in every bite.",
                                  isVeg: 1,
                                  price: 4500,
                                  variants: {},
                                  variantsV2: {},
                                  nextAvailableAtMessage:
                                    "Next available at 11 am, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  parentId: "88770194",
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "52389310",
                        },
                      ],
                      image:
                        "FOOD_CATALOG/IMAGES/CMS/2024/9/15/582a6d9f-df47-4f4c-856a-4990cd0d33aa_970cda06-26d3-46df-9a91-47e46aa3d938.jpg_compressed",
                      categoryId: "52389309",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Snacks",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "149489733",
                              name: "Chole Bhature",
                              category: "Snacks",
                              description:
                                "A popular North Indian dish consisting of spicy chickpea curry (chole) served with deep-fried bread (bhature) (2 Pcs). Enjoy the perfect blend of flavors and textures.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/9/15/b10ef227-c59c-42c5-9e51-744bf517b2e8_b6900095-f6c4-40a8-a679-24ba292932e3.jpg_compressed",
                              isVeg: 1,
                              price: 43000,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                "Next available at 11 am, today",
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "11 ratings",
                                  ratingCountV2: "11",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "88697699",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "149489757",
                              name: "Paneer Pakoda (8 Pcs)",
                              category: "Snacks",
                              description:
                                "Crispy and flavorful snack made with chunks of paneer coated in a spiced gram flour batter, perfect for enjoying with a cup of tea on a rainy day.",
                              isVeg: 1,
                              price: 50000,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                "Next available at 11 am, today",
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              parentId: "88697772",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "149489696",
                              name: "Paneer Finger (8 Pcs)",
                              category: "Snacks",
                              description:
                                "Delicious appetizer made with marinated paneer, coated in a crispy breadcrumb crust. Perfect for snacking or as a side dish.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/9/15/dc3743f0-aebd-4f60-8745-dbbbb7f0bb11_ccae1d01-a9d9-45e4-842c-54b549bfb76c.jpg_compressed",
                              isVeg: 1,
                              price: 48000,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                "Next available at 11 am, today",
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "88697757",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "64211721",
                              name: "Paneer Popcorn",
                              category: "Snacks",
                              description:
                                "Crispy bites of paneer coated in a flavorful blend of spices, perfect for snacking or as a delicious appetizer. Enjoy the crunchy texture and savory taste.",
                              isVeg: 1,
                              price: 48000,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                "Next available at 11 am, today",
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              parentId: "55059413",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "149489744",
                              name: "Veg Fingers (8 Pcs)",
                              category: "Snacks",
                              description:
                                "Crispy and flavorful appetizer made with a blend of vegetables and spices, perfect for snacking or as a side dish. Enjoy 8 pieces in one serving.",
                              isVeg: 1,
                              price: 38000,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                "Next available at 11 am, today",
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              parentId: "88697825",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "149489699",
                              name: "Veg Omelette Toast Sandwich",
                              category: "Snacks",
                              description:
                                "A delicious combination of fluffy omelette and fresh vegetables sandwiched between crispy toast slices, perfect for a satisfying and wholesome meal.",
                              isVeg: 1,
                              price: 16000,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                "Next available at 11 am, today",
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "4 ratings",
                                  ratingCountV2: "4",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "88697839",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "149489753",
                              name: "French Fries",
                              category: "Snacks",
                              description:
                                "Crispy and golden potato sticks, perfect for snacking or as a side dish. Best enjoyed with ketchup or your favorite dipping sauce. Bon appetit!",
                              isVeg: 1,
                              price: 13000,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                "Next available at 11 am, today",
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "88697714",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "149489701",
                              name: "Mushroom Finger (8 Pcs)",
                              category: "Snacks",
                              description:
                                "Delicious appetizer made with fresh mushrooms, coated in a crispy batter and fried to perfection. Perfect for sharing with friends and family.",
                              isVeg: 1,
                              price: 50000,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                "Next available at 11 am, today",
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              parentId: "88697745",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image:
                        "FOOD_CATALOG/IMAGES/CMS/2024/9/15/b10ef227-c59c-42c5-9e51-744bf517b2e8_b6900095-f6c4-40a8-a679-24ba292932e3.jpg_compressed",
                      categoryId: "52389315",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Indian Breads",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "11414067",
                              name: "Garlic Cheese Naan",
                              category: "Indian Breads",
                              description:
                                "Soft and fluffy naan bread infused with aromatic garlic and oozing with melted cheese, a perfect accompaniment to any Indian meal.",
                              isVeg: 1,
                              price: 17500,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                "Next available at 11 am, today",
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.8",
                                  ratingCount: "43 ratings",
                                  ratingCountV2: "43",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "81074915",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "64211705",
                              name: "Cheese Naan",
                              category: "Indian Breads",
                              description:
                                "Soft and fluffy naan bread stuffed with gooey melted cheese, perfect for dipping in savory curries or enjoying on its own. A delicious twist on a classic favorite.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/9/2/ffae3ef0-7a1c-4251-8fbd-a1e76aae847e_9e1d45dc-e147-41e5-9563-f8201d0741ea.JPG",
                              isVeg: 1,
                              price: 17000,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                "Next available at 11 am, today",
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "4 ratings",
                                  ratingCountV2: "4",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "55827542",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "64211718",
                              name: "Cheese Garlic Kulcha",
                              category: "Indian Breads",
                              description:
                                "Soft and fluffy kulcha filled with a delicious blend of melted cheese and aromatic garlic, perfect for pairing with your favorite curry or enjoying on its own.",
                              isVeg: 1,
                              price: 17500,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                "Next available at 11 am, today",
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.9",
                                  ratingCount: "6 ratings",
                                  ratingCountV2: "6",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "55827541",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "11414074",
                              name: "Cheese Kulcha",
                              category: "Indian Breads",
                              description:
                                "Soft and fluffy bread stuffed with gooey cheese, perfect for dipping in spicy curries or enjoying on its own. A delicious twist on traditional kulcha.",
                              isVeg: 1,
                              price: 16500,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                "Next available at 11 am, today",
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "4 ratings",
                                  ratingCountV2: "4",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "54965758",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "11414066",
                              name: "Garlic Naan",
                              category: "Indian Breads",
                              description:
                                "Soft and fluffy Indian bread infused with aromatic garlic, perfect for scooping up delicious curries and sauces. Enjoy this flavorful side dish with your meal.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/8/31/29b43c30-8f67-4217-9e0d-9ffc860aec55_a22bc31c-b00f-4d6a-9383-c9dcae2a5b81.JPG",
                              isVeg: 1,
                              price: 5000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "47424193",
                                    name: "Preparation type",
                                    variations: [
                                      {
                                        name: "Plain",
                                        default: 1,
                                        id: "150142218",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Butter",
                                        price: 3000,
                                        id: "150142219",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              nextAvailableAtMessage:
                                "Next available at 11 am, today",
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "145 ratings",
                                  ratingCountV2: "145",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "55303467",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "11414064",
                              name: "Naan",
                              category: "Indian Breads",
                              description:
                                "Soft and fluffy Indian bread, perfect for scooping up flavorful curries and sauces. Enjoy this traditional accompaniment to your favorite dishes.",
                              imageId: "cmsloxr3bx6cgilkkgyi",
                              isVeg: 1,
                              price: 4000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "47424188",
                                    name: "Preparation type",
                                    variations: [
                                      {
                                        name: "Plain",
                                        default: 1,
                                        id: "150142208",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Butter",
                                        price: 2000,
                                        id: "150142209",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              nextAvailableAtMessage:
                                "Next available at 11 am, today",
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "370 ratings",
                                  ratingCountV2: "370",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "55106643",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "11414058",
                              name: "Paratha",
                              category: "Indian Breads",
                              description:
                                "A flaky, Indian flatbread that is perfect for breakfast or as a side dish to accompany your favorite curry. Enjoy it hot off the griddle!",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/8/31/7261a050-5e2f-43d7-8d45-c3d1793893b6_44240be4-a1ca-41c0-a64b-cb6aeb192988.JPG",
                              isVeg: 1,
                              price: 3200,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "47424189",
                                    name: "Preparation type",
                                    variations: [
                                      {
                                        name: "Plain",
                                        default: 1,
                                        id: "150142210",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Butter",
                                        price: 1300,
                                        id: "150142211",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              nextAvailableAtMessage:
                                "Next available at 11 am, today",
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "118 ratings",
                                  ratingCountV2: "118",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "55303472",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "11414055",
                              name: "Makai Roti",
                              category: "Indian Breads",
                              description:
                                "A traditional Indian flatbread made with maize flour, perfect for pairing with spicy curries or enjoying on its own. Best served hot and fresh.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/8/31/c5a2a513-89ea-4f2f-a51d-72511e915417_9f4b64d4-7c2d-474f-bb3b-3a6356e7174c.JPG",
                              isVeg: 1,
                              price: 4000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "47424190",
                                    name: "Preparation type",
                                    variations: [
                                      {
                                        name: "Plain",
                                        default: 1,
                                        id: "150142212",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Butter",
                                        price: 1000,
                                        id: "150142213",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              nextAvailableAtMessage:
                                "Next available at 11 am, today",
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "166 ratings",
                                  ratingCountV2: "166",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "55477639",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "11414070",
                              name: "Kulcha",
                              category: "Indian Breads",
                              description:
                                "Soft and fluffy Indian bread, perfect for scooping up flavorful curries and chutneys. Enjoy this traditional dish with a side of spicy pickle.",
                              isVeg: 1,
                              price: 3200,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "47424187",
                                    name: "Preparation type",
                                    variations: [
                                      {
                                        name: "Plain",
                                        default: 1,
                                        id: "150142206",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Butter",
                                        price: 1800,
                                        id: "150142207",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              nextAvailableAtMessage:
                                "Next available at 11 am, today",
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.9",
                                  ratingCount: "169 ratings",
                                  ratingCountV2: "169",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "54965769",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "138172126",
                              name: "Missi Roti",
                              category: "Indian Breads",
                              description:
                                "A traditional Indian flatbread made with a blend of whole wheat flour, gram flour, and spices. Perfect for pairing with curries or enjoying on its own.",
                              isVeg: 1,
                              price: 4000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "47424186",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Plain",
                                        default: 1,
                                        id: "150142204",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Butter",
                                        price: 1000,
                                        id: "150142205",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              nextAvailableAtMessage:
                                "Next available at 11 am, today",
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "2.9",
                                  ratingCount: "6 ratings",
                                  ratingCountV2: "6",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#FFF0CD", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_low",
                                  ratingTextColor: "rating_low",
                                  ratingCountTextColor: "rating_low",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "81074939",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "149489927",
                              name: "Jowar Roti",
                              category: "Indian Breads",
                              description:
                                "A traditional Indian flatbread made from sorghum flour, Jowar Roti is a gluten-free and nutritious alternative to wheat roti. Enjoy with your favorite curry or dal.",
                              isVeg: 1,
                              price: 4000,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                "Next available at 11 am, today",
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "6 ratings",
                                  ratingCountV2: "6",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "88697723",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "11414073",
                              name: "Garlic Kulcha",
                              category: "Indian Breads",
                              description:
                                "Soft and fluffy Indian bread infused with aromatic garlic, perfect for pairing with spicy curries or enjoying on its own. A must-try for garlic lovers!",
                              isVeg: 1,
                              price: 5000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "47424192",
                                    name: "Preparation type",
                                    variations: [
                                      {
                                        name: "Plain",
                                        default: 1,
                                        id: "150142216",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Butter",
                                        price: 3000,
                                        id: "150142217",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              nextAvailableAtMessage:
                                "Next available at 11 am, today",
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "10 ratings",
                                  ratingCountV2: "10",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "55827543",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "138172130",
                              name: "Tandoori Roti",
                              category: "Indian Breads",
                              description:
                                "A traditional Indian flatbread cooked in a tandoor oven, perfect for scooping up flavorful curries and dishes. Enjoy the crispy, charred edges!",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/8/31/bdbc3e7d-89e1-4403-8e73-abfa62760501_5156f9e9-02fe-4edc-b4a3-de3c11909dc8.JPG",
                              isVeg: 1,
                              price: 2500,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "47424185",
                                    name: "Preparation type",
                                    variations: [
                                      {
                                        name: "Plain",
                                        default: 1,
                                        id: "150142202",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Butter",
                                        price: 1500,
                                        id: "150142203",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              nextAvailableAtMessage:
                                "Next available at 11 am, today",
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "97 ratings",
                                  ratingCountV2: "97",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "54965790",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "11414072",
                              name: "Onion Kulcha",
                              category: "Indian Breads",
                              description:
                                "Soft and fluffy Indian bread stuffed with a savory mixture of onions and spices, perfect for pairing with creamy curries or enjoying on its own.",
                              isVeg: 1,
                              price: 4000,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                "Next available at 11 am, today",
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "9 ratings",
                                  ratingCountV2: "9",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "55390962",
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image:
                        "FOOD_CATALOG/IMAGES/CMS/2024/9/2/ffae3ef0-7a1c-4251-8fbd-a1e76aae847e_9e1d45dc-e147-41e5-9563-f8201d0741ea.JPG",
                      categoryId: "52389329",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo",
                      type: "FSSAI",
                      imageId: "fssai_final_edss9i",
                      text: ["License No. 11517007000355"],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress",
                      name: "Sadguru Veg Diet - Station",
                      area: "Near Chembur Station",
                      completeAddress:
                        "Janata Market, Near Chembur Station, Chembur, Mumbai",
                    },
                  },
                },
              ],
            },
          },
        },
      },
    ],
    firstOffsetRequest: true,
    isQCLink: false,
  },
  tid: "7f8ba55c-ff2f-4f3d-a5be-2d2246709252",
  sid: "nbk6b9f7-404f-49e7-b01e-70353e85f6c4",
  deviceId: "d144967a-016d-c6d6-a9de-160d1ba2eae9",
  csrfToken: "NOVkQKGob7Xp-1RAQFxUBROUUVmVsArHcVTj9i9g",
};
