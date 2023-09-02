import React from "react";
import Sidebar from "../Layout/Sidebar.jsx";
const Transactions = () => {
  return (
    <>
      <div className="dash-main">
        <div className="sidebar-main">
          <Sidebar />
        </div>
        <div className="dashboard-main">
          <div className="head">
            <span>Transactions</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transactions;
