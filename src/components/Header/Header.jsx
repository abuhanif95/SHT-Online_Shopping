import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/SHTlogo.png";
import Search from "../Search/Search";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { IoIosGitCompare } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import Navigation from "./Navigation/Navigation";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    border: `2px solid ${theme.palette.background.paper || "#fff"}`,
    padding: "0 4px",
    backgroundColor: "#f33f33", // Your primary color
    color: "white",
  },
}));

const Header = () => {
  return (
    <header>
      {/* Top-strip Header */}
      <div className="top-strip py-3 border-t border-b border-gray-300">
        <div className="container">
          <div className="flex item-center justify-between">
            <div className="col1 w-[50%]">
              <p className="text-[16px] font-medium">
                💫 Your Season, Your Style:
                <span className="font-bold text-primary"> 50%</span> off new
                arrivals
              </p>
            </div>

            <div className="col2 flex items-center justify-end">
              <ul className="flex items-center gap-3">
                {/* Help Center */}
                <li className="list-none">
                  <Link
                    to="/help-center"
                    className="text-[14px] link font-medium transition"
                  >
                    Help Center
                  </Link>
                </li>

                {/*Order Tracking*/}
                <li className="list-none">
                  <Link
                    to="/order-tracking"
                    className="text-[14px] link font-medium transition"
                  >
                    Order Tracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom-strip Header */}
      <div className="header py-1 border-b border-gray-300 ">
        <div className="container flex items-center justify-between">
          {/* Logo Section */}
          <div className="col1 w-[25%]">
            <Link to={"/"}>
              <img
                src={logo}
                alt="Mega Platform"
                className="h-20" // 2rem = 32px
              />
            </Link>
          </div>

          {/* Search Section */}
          <div className="col2 w-[40%] mx-3">
            <Search />
          </div>

          {/* Login/SignUp and Cart-wishlist Section */}
          <div className="col3 w-[35%] flex items-center">
            <ul className="flex items-center w-full justify-end gap-3">
              {/* Login and SignUp section */}
              <li className="list-none">
                <div className="flex gap-2">
                  {/* Login Button */}
                  <Link
                    to="/login"
                    className="px-4 py-2 text-[16px] font-medium text-center border border-gray-300 rounded-lg text-gray-700 hover:border-primary hover:text-primary transition-colors"
                  >
                    Login
                  </Link>

                  {/* SignUp Button */}
                  <Link
                    to="/signup"
                    className="px-2 py-2 text-[16px] text-center bg-primary text-white rounded-lg hover:bg-[#d32f2f] transition-colors font-medium shadow-sm"
                  >
                    SignUp
                  </Link>
                </div>
              </li>

              {/* Compare Icon with Badge */}
              <li>
                <Tooltip title="Compare" placement="top">
                  <IconButton aria-label="compare">
                    <StyledBadge
                      badgeContent={4}
                      color="secondary"
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                    >
                      <IoIosGitCompare />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>

              {/* Wishlist Icon with Badge */}
              <li>
                <Tooltip title="Wishlist" placement="top">
                  <IconButton aria-label="wishlist">
                    <StyledBadge
                      badgeContent={3}
                      color="secondary"
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                    >
                      <FaRegHeart />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>

              {/* Cart Icon with Badge */}
              <li>
                <Tooltip title="Cart" placement="top">
                  <IconButton aria-label="cart">
                    <StyledBadge
                      badgeContent={7}
                      color="secondary"
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                    >
                      <MdOutlineShoppingCart />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <Navigation />
    </header>
  );
};

export default Header;
