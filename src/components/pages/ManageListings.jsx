import React, { useEffect, useState } from "react";
import axios from "axios";
import CategoryForm from "./ManageListingsForm.jsx";
import { Modal } from "antd";
import toast from "react-hot-toast";
import Axios from './Axios';
import Sidebar from "../Layout/Sidebar.jsx";
const ManageListings = () => {
  const[categories,setCategories] = useState([]);
  const [refresh, setrefresh] = useState(false);
  const[categoryDetails, setCategoryDetails] = useState({
    name:"", 
    description:"",
  });
  const getCategories =  async(e) =>{
    // e.preventDefault();
    const {data} = await Axios.post("/product/categories"); 
    console.log("success in the gc"); 
    console.log("data created" , data)
   
  }
  
  useEffect(()=>{
    getCategories();
  },[refresh]) ; 

  function changeHandler(e){
     const {name, value} = e.target
     setCategoryDetails({
      ...categoryDetails , 
      [name]:value
    })
    console.log("inside the function");
    console.log(categoryDetails)
  }

  //get all categories

  
  //update category
  

  return (
    <>
      <div className="dash-main">
        <div className="sidebar-main">
          <Sidebar />
        </div>
        <div className="dashboard-main">
          <div className="head">
            <span>Manage Listings</span>
          </div>
          <div className="list-items">
            <div className="flex w-full border-black border-2 p-3 justify-between">
              <div className="flex flex-col w-1/4 m-2 justify-start ">
                <h1 className="flex font-bold items-start justify-center">
                  MANAGE CATEGORY
                </h1>
                <CategoryForm category={categoryDetails}  change ={changeHandler} refresh={refresh} setrefresh={setrefresh} setCategoryDetails ={setCategoryDetails}/>
              </div>
              <div className="w-2/3 p-2 h-96 overflow-y-auto">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">CATEGORY NAME</th>
                      <th scope="col">ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories?.map((c) => (
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
