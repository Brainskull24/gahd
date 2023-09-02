import React from "react";
import Sidebar from "../Layout/Sidebar.jsx";
import "../../css/Listings.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
const Listings = () => {
  return (
    <>
      <div className="dash-main">
        <div className="sidebar-main">
          <Sidebar />
        </div>
        <div className="dashboard-main">
          <div className="head">
            <span>Listings</span>
          </div>
          <div className="list-items">
            <div className="product-items">
              <div className="show-products">
                <NavLink>Products</NavLink>
                <NavLink>Collections</NavLink>
              </div>
              <div className="manage-products">
                <button>
                  <FontAwesomeIcon icon={faDownload} />
                  <NavLink>Import Products</NavLink>
                </button>
                <button>
                  <FontAwesomeIcon icon={faDownload} />
                  <NavLink>Export Products</NavLink>
                </button>
                <button>
                  <FontAwesomeIcon icon={faDownload} />
                  <NavLink to = "/listings/addlisting">New Product</NavLink>
                </button>
              </div>
            </div>
            <div className="filter-items">
              <div className="filters">
                <button>Filters 0</button>
                <button>+</button>
              </div>
              <div className="searchbar">
                <button>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                  <span>Search</span>
                </button>
              </div>
            </div>
          </div>
          <table className="table orders-table">
            <thead>
              <tr>
                <th className="text-black text-lg">Image/SKU</th>
                <th className="text-black text-lg">Collection</th>
                <th className="text-black text-lg">Ocassion</th>
                <th className="text-black text-lg">Category/Tags</th>
                <th className="text-black text-lg">Amount</th>
                <th className="text-black text-lg">Inventory</th>
                <th className="text-black text-lg">Total Sales</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Listings;
