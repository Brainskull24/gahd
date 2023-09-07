import Sidebar from "../Layout/Sidebar.jsx";
import React, { useEffect } from "react";
import "../../css/Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import { CCol, CCard, CCardBody, CCardTitle, CCardText } from "@coreui/react";
import { useState } from "react";
import Calendar from "react-calendar";
import Axios from "./Axios.js";
import "react-calendar/dist/Calendar.css";
const Dashboard = () => {
  // const selectedDate = document.getElementsByClassName("selected-date");
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDateRange, setSelectedDateRange] = useState([
    new Date(),
    new Date(),
  ]);

  const [allOrders, setOrders] = useState([]); 
  const getOrders = async()=>{
            
    const {data} = await Axios.post("/order/get-orders");
    console.log(" fetched data is ", data.orders); 
    setOrders(data.orders);
  } 
  
  useEffect(()=>{
    getOrders();
  }, [])

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
                  {
                  allOrders.map((order, index) => 
                    { return <tr key={index}>
                      {console.log(order.products)}
                      <td className="text-black text-md">
                      <img src={ `${order.products.length>0?order.products[0].url :"NAN"}`
                      } alt="loading" />
                      </td>
                      <td className="text-black text-md">{order.sku}</td>
                      <td className="text-black text-md">{order._id}</td>
                      <td className="text-black text-md">{order.date}</td>
                      <td className="text-black text-md">{order.amount}</td>
                      <td className="text-black text-md">{order.status}</td>
                      <td className="text-black text-md">{`${order.products.length>0?order.products[0].color :"NAN"}`}</td>
                      <td className="text-black text-md">{`${order.products.length>0?order.products[0].customization :"NAN"}`}</td>
                      <td className="text-black text-md">{1200}pcs</td>
                     </tr> 
                    })
                  }
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
