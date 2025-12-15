import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Button } from "@mui/material";
import { IoCloseSharp } from "react-icons/io5";
import { FaRegSquarePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FiMinusSquare } from "react-icons/fi";

const Sidebar = (props) => {
  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);

  const toggleDrawer = (newOpen) => {
    props.setOpenSideBar(newOpen);
  };

  const openSubmenu = (index) => {
    if (submenuIndex === index) {
      setSubmenuIndex(null);
      setInnerSubmenuIndex(null);
    } else {
      setSubmenuIndex(index);
      setInnerSubmenuIndex(null);
    }
  };

  const openInnerSubmenu = (index) => {
    if (innerSubmenuIndex === index) {
      setInnerSubmenuIndex(null);
    } else {
      setInnerSubmenuIndex(index);
    }
  };

  // Category data structure for better organization
  const categories = [
    {
      name: "Fashion",
      submenu: [
        {
          name: "Men",
          items: [
            "Shirts",
            "T-Shirts",
            "Jeans",
            "Trousers",
            "Jackets",
            "Suits",
          ],
        },
        {
          name: "Women",
          items: ["Dresses", "Tops", "Skirts", "Jeans", "Kurtas", "Sarees"],
        },
        {
          name: "Kids",
          items: [
            "Boys Clothing",
            "Girls Clothing",
            "Infants",
            "School Wear",
            "Party Wear",
          ],
        },
      ],
    },
    {
      name: "Electronics",
      submenu: [
        {
          name: "Mobiles",
          items: ["Smartphones", "Feature Phones", "Accessories", "Tablets"],
        },
        {
          name: "Laptops",
          items: [
            "Gaming Laptops",
            "Ultrabooks",
            "Business Laptops",
            "Accessories",
          ],
        },
        {
          name: "Home Appliances",
          items: [
            "TVs",
            "Refrigerators",
            "Washing Machines",
            "ACs",
            "Microwaves",
          ],
        },
      ],
    },
    {
      name: "Bags",
      submenu: [
        {
          name: "Handbags",
          items: ["Tote Bags", "Clutches", "Satchels", "Shoulder Bags"],
        },
        {
          name: "Backpacks",
          items: [
            "School Backpacks",
            "Laptop Backpacks",
            "Travel Backpacks",
            "Mini Backpacks",
          ],
        },
        {
          name: "Travel Bags",
          items: ["Suitcases", "Duffel Bags", "Weekenders", "Carry-ons"],
        },
      ],
    },
    {
      name: "Footwear",
      submenu: [
        {
          name: "Men's Footwear",
          items: [
            "Formal Shoes",
            "Casual Shoes",
            "Sports Shoes",
            "Sandals",
            "Slippers",
          ],
        },
        {
          name: "Women's Footwear",
          items: ["Heels", "Flats", "Wedges", "Boots", "Sports Shoes"],
        },
        {
          name: "Kids Footwear",
          items: ["School Shoes", "Casual Shoes", "Sandals", "Sneakers"],
        },
      ],
    },
    {
      name: "Groceries",
      submenu: [
        {
          name: "Food Grains",
          items: ["Rice", "Wheat", "Pulses", "Flours", "Cereals"],
        },
        {
          name: "Dairy & Bakery",
          items: ["Milk", "Cheese", "Butter", "Bread", "Eggs"],
        },
        {
          name: "Beverages",
          items: ["Tea", "Coffee", "Juices", "Soft Drinks", "Energy Drinks"],
        },
      ],
    },
    {
      name: "Beauty",
      submenu: [
        {
          name: "Makeup",
          items: ["Lipstick", "Foundation", "Eyeshadow", "Mascara", "Blush"],
        },
        {
          name: "Skincare",
          items: [
            "Face Wash",
            "Moisturizer",
            "Sunscreen",
            "Serums",
            "Face Masks",
          ],
        },
        {
          name: "Hair Care",
          items: [
            "Shampoo",
            "Conditioner",
            "Hair Oil",
            "Styling Products",
            "Color",
          ],
        },
      ],
    },
    {
      name: "Wellness",
      submenu: [
        {
          name: "Vitamins & Supplements",
          items: ["Multivitamins", "Protein", "Omega-3", "Calcium", "Iron"],
        },
        {
          name: "Personal Care",
          items: ["Oral Care", "Deodorants", "Feminine Hygiene", "Shaving"],
        },
        {
          name: "Medical Supplies",
          items: [
            "First Aid",
            "Thermometers",
            "Blood Pressure",
            "Masks",
            "Sanitizers",
          ],
        },
      ],
    },
    {
      name: "Jewellery",
      submenu: [
        {
          name: "Gold",
          items: ["Necklaces", "Earrings", "Bangles", "Rings", "Pendants"],
        },
        {
          name: "Silver",
          items: [
            "Silver Necklaces",
            "Silver Earrings",
            "Silver Rings",
            "Silver Bracelets",
          ],
        },
        {
          name: "Fashion Jewellery",
          items: [
            "Costume Necklaces",
            "Statement Earrings",
            "Beaded Bracelets",
            "Brooches",
          ],
        },
      ],
    },
  ];

  const DrawerList = (
    <Box sx={{ width: 280 }} role="presentation" className="categoryPanel">
      {/* Menu Heading */}
      <h3 className="p-3 text-[20px] font-medium flex items-center justify-between">
        Product Categories
        <IoCloseSharp
          onClick={() => toggleDrawer(false)}
          className="cursor-pointer text-[20px]"
        />
      </h3>

      {/* Category List */}
      <div className="scroll max-h-[calc(100vh-80px)] overflow-y-auto">
        <ul className="w-full">
          {/* Map through categories */}
          {categories.map((category, categoryIndex) => (
            <li
              key={categoryIndex}
              className="list-none flex items-center relative flex-col border-b border-gray-100"
            >
              <Link to="/" className="w-full">
                <Button
                  sx={{
                    justifyContent: "flex-start",
                    textTransform: "none",
                    width: "100%",
                    fontSize: "16px",
                    fontWeight: "500",
                    textAlign: "left",
                    padding: "12px 16px",
                    color: "black",
                    "&:hover": { backgroundColor: "rgba(0,0,0,0.05)" },
                  }}
                >
                  {category.name}
                </Button>
              </Link>

              {/* Plus/Minus icon for submenu */}
              {submenuIndex === categoryIndex ? (
                <FiMinusSquare
                  className="absolute top-3 right-3 text-gray-400 hover:text-black cursor-pointer"
                  size={18}
                  onClick={() => openSubmenu(categoryIndex)}
                />
              ) : (
                <FaRegSquarePlus
                  className="absolute top-3 right-3 text-gray-400 hover:text-black cursor-pointer"
                  size={18}
                  onClick={() => openSubmenu(categoryIndex)}
                />
              )}

              {/* Submenu Section */}
              {submenuIndex === categoryIndex && (
                <ul className="submenu w-full pl-4 bg-gray-50">
                  {category.submenu.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      className="list-none relative border-t border-gray-100 first:border-t-0"
                    >
                      <Link to="/" className="w-full">
                        <Button
                          sx={{
                            justifyContent: "flex-start",
                            textTransform: "none",
                            width: "100%",
                            fontSize: "15px",
                            fontWeight: "500",
                            textAlign: "left",
                            padding: "10px 16px",
                            color: "black",
                            "&:hover": { backgroundColor: "rgba(0,0,0,0.05)" },
                          }}
                        >
                          {subItem.name}
                        </Button>
                      </Link>

                      {/* Plus/Minus icon for inner submenu */}
                      {innerSubmenuIndex === categoryIndex * 10 + subIndex ? (
                        <FiMinusSquare
                          className="absolute top-3 right-3 text-gray-400 hover:text-black cursor-pointer"
                          size={16}
                          onClick={() =>
                            openInnerSubmenu(categoryIndex * 10 + subIndex)
                          }
                        />
                      ) : (
                        <FaRegSquarePlus
                          className="absolute top-3 right-3 text-gray-400 hover:text-black cursor-pointer"
                          size={16}
                          onClick={() =>
                            openInnerSubmenu(categoryIndex * 10 + subIndex)
                          }
                        />
                      )}

                      {/* Inner Submenu Items */}
                      {innerSubmenuIndex === categoryIndex * 10 + subIndex && (
                        <ul className="inner_submenu w-full pl-6 bg-white">
                          {subItem.items.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="list-none relative border-t border-gray-100 first:border-t-0"
                            >
                              <Link
                                to="/"
                                className="link w-full text-left justify-start px-3 py-2 transition text-[14px] text-gray-700 hover:text-black hover:bg-gray-100 block"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Box>
  );

  return (
    <Drawer open={props.isOpenSideBar} onClose={() => toggleDrawer(false)}>
      {DrawerList}
    </Drawer>
  );
};

export default Sidebar;
