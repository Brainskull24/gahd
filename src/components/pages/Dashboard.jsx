import Sidebar from "../Layout/Sidebar.jsx";
import React from "react";
import "../../css/Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import { CCol, CCard, CCardBody, CCardTitle, CCardText } from "@coreui/react";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
const Dashboard = () => {
  // const selectedDate = document.getElementsByClassName("selected-date");
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDateRange, setSelectedDateRange] = useState([
    new Date(),
    new Date(),
  ]);

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
    // document.getElementsByClassName("selected-data").style.display = "none";
  };

  const handleDateChange = (date) => {
    setSelectedDateRange(date);
    setShowCalendar(false);
  };
  return (
    <>
      <div className="dash-main">
        <Sidebar />
        <div className="dashboard-main">
          <div className="head">
            <span>Dashboard</span>
            <div className="calender mt-auto">
              <FontAwesomeIcon icon={faCalendarDays} onClick={toggleCalendar}>
                {showCalendar ? "Hide Calendar" : "Show Calendar"}
              </FontAwesomeIcon>
              {showCalendar && (
                <div className="react-calendar">
                  <Calendar
                    onChange={handleDateChange}
                    selectRange
                    value={selectedDateRange}
                  />
                </div>
              )}
              {!showCalendar && <span className="selected-date">
                {selectedDateRange[0].toDateString()} -{" "}
                {selectedDateRange[1].toDateString()}
              </span>
}
            </div>{" "}
          </div>
          <div className="cards1">
            <div className="flex flex-wrap gap-x-3 gap-y-3">
              <CCol className="flex">
                <CCard className="cardd">
                  <CCardBody>
                    <CCardTitle className="cardTitle">
                      <span>Total Orders</span>
                      <FontAwesomeIcon icon={faEllipsisVertical} />
                    </CCardTitle>
                    <CCardText>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CCardText>
                  </CCardBody>
                </CCard>
              </CCol>
              <CCol className="flex">
                <CCard className="cardd">
                  <CCardBody>
                    <CCardTitle className="cardTitle">
                      <span>Active Orders</span>
                      <FontAwesomeIcon icon={faEllipsisVertical} />
                    </CCardTitle>
                    <CCardText>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CCardText>
                  </CCardBody>
                </CCard>
              </CCol>
              <CCol className="flex">
                <CCard className="cardd">
                  <CCardBody>
                    <CCardTitle className="cardTitle">
                      <span>Shipped Orders</span>
                      <FontAwesomeIcon icon={faEllipsisVertical} />
                    </CCardTitle>
                    <CCardText>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CCardText>
                  </CCardBody>
                </CCard>
              </CCol>

              <CCol className="flex">
                <CCard className="cardd">
                  <CCardBody>
                    <CCardTitle className="cardTitle">
                      <span>Total Visitors</span>
                      <FontAwesomeIcon icon={faEllipsisVertical} />
                    </CCardTitle>
                    <CCardText>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CCardText>
                  </CCardBody>
                </CCard>
              </CCol>
              <CCol className="flex">
                <CCard className="cardd">
                  <CCardBody>
                    <CCardTitle className="cardTitle">
                      <span>Total Page View</span>
                      <FontAwesomeIcon icon={faEllipsisVertical} />
                    </CCardTitle>
                    <CCardText>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CCardText>
                  </CCardBody>
                </CCard>
              </CCol>
              <CCol className="flex">
                <CCard className="cardd BestSellers">
                  <CCardBody>
                    <CCardTitle className="cardTitle">
                      <span>Best Sellers</span>
                      <FontAwesomeIcon icon={faEllipsisVertical} />
                    </CCardTitle>
                  </CCardBody>
                </CCard>
              </CCol>
            </div>
          </div>
          <div className="recent-orders">
            <div className="recent-table">
              Recent Orders
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>
            <table className="table orders-table">
              <thead>
                <tr>
                  <th className="text-black text-lg">Image</th>
                  <th className="text-black text-lg">SKU</th>
                  <th className="text-black text-lg">Order Id</th>
                  <th className="text-black text-lg">Date</th>
                  <th className="text-black text-lg">Amount</th>
                  <th className="text-black text-lg">Status</th>
                  <th className="text-black text-lg">Color</th>
                  <th className="text-black text-lg">Customisation</th>
                  <th className="text-black text-lg">Payment</th>
                  <th className="text-black text-lg">Promo Code</th>
                </tr>
              </thead>
              <tbody>
                {/* <tr>
                  <th>
                    <div className="tb-image">
                      <img
                        src="https://e7.pngegg.com/pngimages/402/613/png-clipart-sari-silk-kanchipuram-zari-pink-saree-model-purple-blue.png"
                        alt=""
                      />
                    </div>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div>
                        <div className="font-bold">ZROX89</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    #25421
                    <br />
                  </td>
                  <td>July 23rd 2023</td>
                  <td>$200.00</td>
                  <td>Delivered</td>
                  <th>
                    <button className="">Magenta</button>
                  </th>
                  <td>Stitched</td>
                  <td>Paypal</td>
                  <td>UNIQ200</td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
