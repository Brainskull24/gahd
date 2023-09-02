import React from "react";
import Sidebar from "../Layout/Sidebar.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
const Orders = () => {
  return (
    <>
      <div className="dash-main">
        <div className="sidebar-main">
          <Sidebar />
        </div>
        <div className="dashboard-main">
          <div className="head">
            <span>Orders</span>
          </div>
          <div className="list-items">
            <div className="product-items">
              <div className="show-products">
                <a>Orders</a>
                <a>Drafts</a>
              </div>
              <div className="manage-products">
                <button>
                  <FontAwesomeIcon icon={faDownload} />
                  <a>Export Orders</a>
                </button>
              </div>
            </div>
            <div className="filter-items">
              <div className="filters">
                <button>Filters 0</button>
                <button>+</button>
                <button>Complete</button>
                <button>Incomplete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
