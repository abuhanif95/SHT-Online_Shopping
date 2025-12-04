import React from "react";

const Header = () => {
  return (
    <header>
      <div className="top-strip py-2">
        <div className="container">
          <div className="flex item-center justify-between">
            <div className="col1 w-[50%]">
              <p className="text-[15px] font-normal">
                💫 Your Season, Your Style:
                <span className="font-bold text-primary">50%</span> off new
                arrivals
              </p>
            </div>

            <div className="col2 flex items-center justify-end">
              <ul>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
