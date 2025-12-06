import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/SHTlogo.png";
import Search from "../Search/Search";

const Header = () => {
  return (
    <header>
      {/* Top-strip Header */}
      <div className="top-strip py-2 border-t border-b border-gray-200">
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
      <div className="header py-2">
        <div className="container flex items-center justify-between">
          <div className="col1 w-[25%]">
            <Link to={"/"}>
              <img
                src={logo}
                alt="Mega Platform"
                className="w-full" // 2rem = 32px
              />
            </Link>
          </div>

          <div className="col2 w-[45%]">
            <Search />
          </div>

          <div className="col3 w-[30%]"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
