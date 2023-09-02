import React from "react";
import "../../css/Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { faUser } from "@fortawesome/free-solid-svg-icons";
const Sidebar = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll(".sidebar-items");
    navItems.forEach((item) => {
      item.addEventListener("click", function () {
        navItems.forEach((navItem) => {
          navItem.classList.remove("selected");
        });
        item.classList.add("selected");
      });
    });
  });
  return (
    <>
      <div className="sidebar-main">
        <div className="avatar-main">
          <img src="https://www.mockofun.com/wp-content/uploads/2019/12/circle-profile-pic.jpg" />
          <span>Hi Admin!</span>
        </div>
        <div className="side-items">
            <div className="sidebar-items dashboard-btn">
            <FontAwesomeIcon icon={faUser} />
                <NavLink to="/" className="side-links">DashBoard</NavLink>
            </div>
            <div className="sidebar-items">
            <FontAwesomeIcon icon={faUser} />
                <NavLink to="/listings" className="side-links">Listings</NavLink>
            </div>
            <div className="sidebar-items">
            <FontAwesomeIcon icon={faUser} />
                <NavLink to="/orders" className="side-links">Orders</NavLink>
            </div>
            <div className="sidebar-items">
            <FontAwesomeIcon icon={faUser} />
                <NavLink to="/transactions" className="side-links">Transactions</NavLink>
            </div>
            <div className="sidebar-items">
            <FontAwesomeIcon icon={faUser} />
                <NavLink to="/manageall" className="side-links">Manage Listings</NavLink>
            </div>
            <div className="sidebar-items">
            <FontAwesomeIcon icon={faUser} />
                <NavLink to="/blogs" className="side-links">Blogs</NavLink>
            </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
