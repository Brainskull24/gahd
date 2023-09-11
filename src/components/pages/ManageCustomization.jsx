import React, { useEffect, useState } from "react";
import axios from "axios";
import CustomForm from "./CustomizationForm";
import { Modal } from "antd";
import toast from "react-hot-toast";
import Axios from './Axios';
import Sidebar from "../Layout/Sidebar.jsx";
const ManageListings = () => {
  
  //get all categories
  const [customs,setCustoms] = useState([]); 
  const [refresh, setrefresh] = useState(false);
  
  const [customDetails, setCustomDetails] = useState({
    name: "",
    description: "",
  });
  //update category
  function changeHandler(e) {
    const { name, value } = e.target
    setCustomDetails({
      ...customDetails,
      [name]: value
    })
    console.log("inside the function");
   
  }
  const getCustoms = async (e) => {
    // e.preventDefault();
    const { data } = await Axios.post("/product/customs");
    console.log("success in the gc");
    console.log("data created", data.customs)
    setCustoms(data.customs)
  }
  
  
  useEffect(() => {
    getCustoms();
  }, [refresh]);

  return (
    <>
      <div className="dash-main">
        <div className="sidebar-main">
          <Sidebar />
        </div>
        <div className="dashboard-main">
          <div className="head">
            <span>Manage Customization</span>
          </div>
          <div className="list-items">
            <div className="flex flex-col w-full border-black border-2 p-3 justify-between">
                <h1 className="flex font-bold items-start justify-center">
                  MANAGE Customization
                </h1>
              <div className="flex w-full h-72 flex-col m-2 justify-start ">
                <CustomForm custom={customDetails}  change ={changeHandler} refresh={refresh} setrefresh={setrefresh} setCustom ={setCustomDetails}/>
                <CustomForm custom={customDetails} change={changeHandler} refresh={refresh} setrefresh={setrefresh} setCustom ={setCustomDetails} />
              </div>
              <div className="h-96 overflow-y-auto m-2 w-full p-2">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">CUSTOMIZATION NAME</th>
                      <th scope="col">ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customs?.map((c) => (
                      <>
                        <tr>
                          <td key={c._id}>{c.name}</td>
                          <td>
                            <button
                              className="border border-black py-2 px-3 rounded-[5px] bg-[#6D282C] text-white text-[18px] font-[400] mx-2"

                            >
                              EDIT
                            </button>
                            <button
                              className="border border-black py-2 px-3 rounded-[5px] bg-[#6D282C] text-white text-[18px] font-[400]"

                            >
                              DELETE
                            </button>
                          </td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* <Modal onCancel={() => setOpen(false)} footer={null} open={open}>
                <CategoryForm/>
              </Modal> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ManageListings;
