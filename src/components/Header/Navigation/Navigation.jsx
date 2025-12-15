import Button from "@mui/material/Button";
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TbTruckDelivery } from "react-icons/tb";
import Sidebar from "./Sidebar";
import "../Navigation/Navigation.css";

const Navigation = () => {
  const [isOpenSideBar, setOpenSideBar] = useState(false);

  const openSideBar = () => {
    setOpenSideBar(true);
  };

  return (
    <>
      <nav className="py-1">
        <div className="container flex items-center justify-end gap-6">
          {/* ============== CATEGORIES BUTTON COLUMN ============== */}
          <div className="col_1 w-[20%]">
            <Button
              className="text-black! w-full text-[16px]! gap-2"
              onClick={openSideBar}
            >
              <RiMenu2Fill size={17} strokeWidth={1.5} /> Product Categories
              <LiaAngleDownSolid size={17} strokeWidth={1.5} />
            </Button>
          </div>

          {/* ============== MAIN NAVIGATION MENU COLUMN ============== */}
          <div className="col_2 w-[65%]">
            <ul className="flex items-center gap-3 nav">
              {/* ============== HOME SECTION ============== */}
              <li className="list-none">
                <Link
                  to="/"
                  className="link transition text-[15px] font-medium"
                >
                  <Button className="link transition font-medium! text-[rgba(0,0,0,0.9)]! hover:text-primary!">
                    Home
                  </Button>
                </Link>
              </li>

              {/* ============== FASHION SECTION ============== */}
              <li className="list-none relative">
                <Link
                  to="/"
                  className="link transition text-[15px] font-medium"
                >
                  <Button className="link transition font-medium! text-[rgba(0,0,0,0.9)]! hover:text-primary!">
                    Fashion
                  </Button>
                </Link>

                {/* Fashion Submenu */}
                <div className="submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                  <ul>
                    {/* ========== FASHION - MEN SECTION ========== */}
                    <li className="list-none w-full relative">
                      <Link to="/" className="w-full">
                        <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                          Men
                        </Button>
                        {/* Men's Inner Submenu */}
                        <div className="submenu absolute top-[0%] left-full min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                          <ul>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Shirt
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  T-Shirt
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Jeans
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Trousers
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Jackets
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Suits
                                </Button>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </li>

                    {/* ========== FASHION - WOMEN SECTION ========== */}
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                          Women
                        </Button>
                        {/* Women's Inner Submenu */}
                        <div className="submenu absolute top-[0%] left-full min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                          <ul>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Dress
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Tops
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Skirts
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Jeans
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Kurtas
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Sarees
                                </Button>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </li>

                    {/* ========== FASHION - KIDS SECTION ========== */}
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                          Kids
                        </Button>
                        {/* Kids Inner Submenu */}
                        <div className="submenu absolute top-[0%] left-full min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                          <ul>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Boys Clothings
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Girls Clothings
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Infants
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  School Wear
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Party Wear
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Toys
                                </Button>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              {/* ============== ELECTRONICS SECTION ============== */}

              <li className="list-none relative">
                <Link
                  to="/"
                  className="link transition text-[15px] font-medium"
                >
                  <Button className="link transition font-medium! text-[rgba(0,0,0,0.9)]! hover:text-primary!">
                    Electronics
                  </Button>
                </Link>
                <div className="submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                  <ul>
                    {/* ========== ELECTRONICS - MOBILES SECTION ========== */}
                    <li className="list-none w-full relative">
                      <Link to="/" className="w-full">
                        <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                          Mobiles
                        </Button>
                        {/* Mobiles Inner Submenu */}
                        <div className="submenu absolute top-[0%] left-full min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                          <ul>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Smartphones
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Tablets
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Accessories
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Smart Watches
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Headphones
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Power Banks
                                </Button>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </li>

                    {/* ========== ELECTRONICS - LAPTOPS SECTION ========== */}
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                          Laptops
                        </Button>
                        {/* Laptops Inner Submenu */}
                        <div className="submenu absolute top-[0%] left-full min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                          <ul>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Gaming Laptops
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Ultrabooks
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Business Laptops
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Accessories
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Monitors
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Keyboards
                                </Button>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </li>

                    {/* ========== ELECTRONICS - HOME APPLIANCES SECTION ========== */}
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                          Home Appliances
                        </Button>
                        {/* Home Appliances Inner Submenu */}
                        <div className="submenu absolute top-[0%] left-full min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                          <ul>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  TVs
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Refrigerators
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Washing Machines
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  ACs
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Microwaves
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Fans
                                </Button>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              {/* ============== BAGS SECTION ============== */}

              <li className="list-none relative">
                <Link
                  to="/"
                  className="link transition text-[15px] font-medium"
                >
                  <Button className="link transition font-medium! text-[rgba(0,0,0,0.9)]! hover:text-primary!">
                    Bags
                  </Button>
                </Link>
                <div className="submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                  <ul>
                    {/* ========== BAGS - HANDBAGS SECTION ========== */}
                    <li className="list-none w-full relative">
                      <Link to="/" className="w-full">
                        <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                          Handbags
                        </Button>
                        {/* Handbags Inner Submenu */}
                        <div className="submenu absolute top-[0%] left-full min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                          <ul>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Tote Bags
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Clutches
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Satchels
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Shoulder Bags
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Crossbody Bags
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Hobo Bags
                                </Button>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </li>

                    {/* ========== BAGS - BACKPACKS SECTION ========== */}
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                          Backpacks
                        </Button>
                        {/* Backpacks Inner Submenu */}
                        <div className="submenu absolute top-[0%] left-full min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                          <ul>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  School Backpacks
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Laptop Backpacks
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Travel Backpacks
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Mini Backpacks
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Hiking Backpacks
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Sport Backpacks
                                </Button>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </li>

                    {/* ========== BAGS - TRAVEL BAGS SECTION ========== */}
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                          Travel Bags
                        </Button>
                        {/* Travel Bags Inner Submenu */}
                        <div className="submenu absolute top-[0%] left-full min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                          <ul>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Suitcases
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Duffel Bags
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Weekenders
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Carry-ons
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Garment Bags
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Trolley Bags
                                </Button>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              {/* ============== FOOTWEAR SECTION ============== */}
              <li className="list-none relative">
                <Link
                  to="/"
                  className="link transition text-[15px] font-medium"
                >
                  <Button className="link transition font-medium! text-[rgba(0,0,0,0.9)]! hover:text-primary!">
                    Footwear
                  </Button>
                </Link>
                <div className="submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                  <ul>
                    {/* ========== FOOTWEAR - MEN'S FOOTWEAR SECTION ========== */}
                    <li className="list-none w-full relative">
                      <Link to="/" className="w-full">
                        <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                          Men's Footwear
                        </Button>
                        {/* Men's Footwear Inner Submenu */}
                        <div className="submenu absolute top-[0%] left-full min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                          <ul>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Formal Shoes
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Casual Shoes
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Sports Shoes
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Sandals
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Slippers
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Boots
                                </Button>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </li>

                    {/* ========== FOOTWEAR - WOMEN'S FOOTWEAR SECTION ========== */}
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                          Women's Footwear
                        </Button>
                        {/* Women's Footwear Inner Submenu */}
                        <div className="submenu absolute top-[0%] left-full min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                          <ul>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Heels
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Flats
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Wedges
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Boots
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Sports Shoes
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Loafers
                                </Button>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </li>

                    {/* ========== FOOTWEAR - KIDS FOOTWEAR SECTION ========== */}
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                          Kids Footwear
                        </Button>
                        {/* Kids Footwear Inner Submenu */}
                        <div className="submenu absolute top-[0%] left-full min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                          <ul>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  School Shoes
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Casual Shoes
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Sandals
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Sneakers
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Crocs
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Slippers
                                </Button>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              {/* ============== GROCERIES SECTION ============== */}
              <li className="list-none relative">
                <Link
                  to="/"
                  className="link transition text-[15px] font-medium"
                >
                  <Button className="link transition font-medium! text-[rgba(0,0,0,0.9)]! hover:text-primary!">
                    Groceries
                  </Button>
                </Link>
                <div className="submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                  <ul>
                    {/* ========== GROCERIES - FOOD GRAINS SECTION ========== */}
                    <li className="list-none w-full relative">
                      <Link to="/" className="w-full">
                        <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                          Food Grains
                        </Button>
                        {/* Food Grains Inner Submenu */}
                        <div className="submenu absolute top-[0%] left-full min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                          <ul>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Rice
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Wheat
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Pulses
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Flours
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Cereals
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Spices
                                </Button>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </li>

                    {/* ========== GROCERIES - DAIRY & BAKERY SECTION ========== */}
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                          Dairy & Bakery
                        </Button>
                        {/* Dairy & Bakery Inner Submenu */}
                        <div className="submenu absolute top-[0%] left-full min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                          <ul>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Milk
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Cheese
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Butter
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Bread
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Eggs
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Yogurt
                                </Button>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </li>

                    {/* ========== GROCERIES - BEVERAGES SECTION ========== */}
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                          Beverages
                        </Button>
                        {/* Beverages Inner Submenu */}
                        <div className="submenu absolute top-[0%] left-full min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                          <ul>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Tea
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Coffee
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Juices
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Soft Drinks
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Energy Drinks
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Water
                                </Button>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              {/* ============== BEAUTY SECTION ============== */}
              <li className="list-none relative">
                <Link
                  to="/"
                  className="link transition text-[15px] font-medium"
                >
                  <Button className="link transition font-medium! text-[rgba(0,0,0,0.9)]! hover:text-primary!">
                    Beauty
                  </Button>
                </Link>
                <div className="submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                  <ul>
                    {/* ========== BEAUTY - MAKEUP SECTION ========== */}
                    <li className="list-none w-full relative">
                      <Link to="/" className="w-full">
                        <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                          Makeup
                        </Button>
                        {/* Makeup Inner Submenu */}
                        <div className="submenu absolute top-[0%] left-full min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                          <ul>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Lipstick
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Foundation
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Eyeshadow
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Mascara
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Blush
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Concealer
                                </Button>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </li>

                    {/* ========== BEAUTY - SKINCARE SECTION ========== */}
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                          Skincare
                        </Button>
                        {/* Skincare Inner Submenu */}
                        <div className="submenu absolute top-[0%] left-full min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                          <ul>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Face Wash
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Moisturizer
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Sunscreen
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Serums
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Face Masks
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Toner
                                </Button>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </li>

                    {/* ========== BEAUTY - HAIR CARE SECTION ========== */}
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                          Hair Care
                        </Button>
                        {/* Hair Care Inner Submenu */}
                        <div className="submenu absolute top-[0%] left-full min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                          <ul>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Shampoo
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Conditioner
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Hair Oil
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Styling Products
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Color
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Hair Mask
                                </Button>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              {/* ============== WELLNESS SECTION ============== */}
              <li className="list-none relative">
                <Link
                  to="/"
                  className="link transition text-[15px] font-medium"
                >
                  <Button className="link transition font-medium! text-[rgba(0,0,0,0.9)]! hover:text-primary!">
                    Wellness
                  </Button>
                </Link>
                <div className="submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                  <ul>
                    {/* ========== WELLNESS - VITAMINS & SUPPLEMENTS SECTION ========== */}
                    <li className="list-none w-full relative">
                      <Link to="/" className="w-full">
                        <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                          Vitamins & Supplements
                        </Button>
                        {/* Vitamins Inner Submenu */}
                        <div className="submenu absolute top-[0%] left-full min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                          <ul>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Multivitamins
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Protein
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Omega-3
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Calcium
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Iron
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Vitamin D
                                </Button>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </li>

                    {/* ========== WELLNESS - PERSONAL CARE SECTION ========== */}
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                          Personal Care
                        </Button>
                        {/* Personal Care Inner Submenu */}
                        <div className="submenu absolute top-[0%] left-full min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                          <ul>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Oral Care
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Deodorants
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Feminine Hygiene
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Shaving
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Body Wash
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Hand Sanitizer
                                </Button>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </li>

                    {/* ========== WELLNESS - MEDICAL SUPPLIES SECTION ========== */}
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                          Medical Supplies
                        </Button>
                        {/* Medical Supplies Inner Submenu */}
                        <div className="submenu absolute top-[0%] left-full min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                          <ul>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  First Aid
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Thermometers
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Blood Pressure
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Masks
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Sanitizers
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Bandages
                                </Button>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              {/* ============== JEWELLERY SECTION ============== */}

              <li className="list-none relative">
                <Link
                  to="/"
                  className="link transition text-[15px] font-medium"
                >
                  <Button className="link transition font-medium! text-[rgba(0,0,0,0.9)]! hover:text-primary!">
                    Jewellery
                  </Button>
                </Link>
                <div className="submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                  <ul>
                    {/* ========== JEWELLERY - GOLD SECTION ========== */}
                    <li className="list-none w-full relative">
                      <Link to="/" className="w-full">
                        <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                          Gold
                        </Button>
                        {/* Gold Inner Submenu */}
                        <div className="submenu absolute top-[0%] left-full min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                          <ul>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Necklaces
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Earrings
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Bangles
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Rings
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Pendants
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Bracelets
                                </Button>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </li>

                    {/* ========== JEWELLERY - SILVER SECTION ========== */}
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                          Silver
                        </Button>
                        {/* Silver Inner Submenu */}
                        <div className="submenu absolute top-[0%] left-full min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                          <ul>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Silver Necklaces
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Silver Earrings
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Silver Rings
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Silver Bracelets
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Silver Pendants
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Silver Anklets
                                </Button>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </li>

                    {/* ========== JEWELLERY - FASHION JEWELLERY SECTION ========== */}
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                          Fashion Jewellery
                        </Button>
                        {/* Fashion Jewellery Inner Submenu */}
                        <div className="submenu absolute top-[0%] left-full min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                          <ul>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Costume Necklaces
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Statement Earrings
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Beaded Bracelets
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Brooches
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Hair Accessories
                                </Button>
                              </Link>
                            </li>

                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.7)]! w-full text-left! justify-start! rounded-none!">
                                  Charm Bracelets
                                </Button>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          {/* ============== FREE DELIVERY COLUMN ============== */}
          <div className="col_3 w-[15%]">
            <p className="text-[16px] flex items-center font-medium gap-2 mb-0 mt-0">
              <TbTruckDelivery size={22} />
              Free Delivery
            </p>
          </div>
        </div>
      </nav>

      {/* ============== SIDEBAR COMPONENT ============== */}
      <Sidebar isOpenSideBar={isOpenSideBar} setOpenSideBar={setOpenSideBar} />
    </>
  );
};

export default Navigation;
