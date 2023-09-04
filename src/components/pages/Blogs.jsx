import React, { useRef, useState } from "react";
import "../../css/Blogs.css";
import Sidebar from "../Layout/Sidebar.jsx";
import PhotoIcon from "../../assets/photos.svg";

const Blogs = () => {
  const [Blog,setBlog] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({
      ...Blog,
      [name]: value,
    });
  };
  return (
    <>
      <div className="dash-main">
        <div className="sidebar-main">
          <Sidebar />
        </div>
        <div className="dashboard-main">
          <div className="head">
            <span>Blogs</span>
          </div>
          <div className="flex flex-col mt-10 border-2 border-black p-10 h-4/5">
            <div className="form-items flex justify-between items-start pl-10 pr-10 h-20 mt-2.5 ">
              <span>Title:*</span>
              <input
                className="w-4/5 bg-[#FEF0DC] border-1 border-black h-10 rounded-md
              "
              name = "title"
              onChange={handleChange}
              />
            </div>
            <div className="form-items" style={{ height: "15rem" }}>
              <span>Description:*</span>
              <textarea style={{ maxHeight: "13rem", minHeight: "13rem"}} name = "description"
              onChange={handleChange} />
            </div>
            <div className="flex flex-row justify-between items-start w-full pl-2.5 pr-2.5 h-80 mt-2">
              <span>Image:*</span>
              <div className="flex flex-row w-4/5 justify-between items-start height-full ml-2.5 mr-2.5">
                <div className="flex flex-col m-2 justify-center items-center">
                  <div
                    className={`h-[200px] w-[200px] border border-black border-solid rounded-md ${
                       "bg-gray-100"
                    }`}
                
                  >
                   
                      <label
                        htmlFor="fileInput"
                        className="cursor-pointer h-[200px] w-[200px] "
                      >
                        <div className="h-[240px] w-[200px] flex flex-col items-center justify-center">
                          <img src={PhotoIcon} alt="image" />
                          <span className="text-lg font-semibold">
                            Add a Photo
                          </span>
                          <span className="text-sm">Max size: 100MB</span>
                        </div>
                      </label>
                    <input
                      type="file"
                      id="fileInput"
                      accept="image/*"
                      className="hidden"
                      multiple
                    
                    />
                  </div>
                  <div>
                    <button className="uploadimg">Upload</button>
                  </div>
                </div>
                <div className="flex flex-col justify-evenly items-center h-40 w-80">
                  <div className="flex justify-between items-center w-full">
                    <span>Writer:</span>
                    <input className="w-4/5 bg-[#FEF0DC] border-1 border-black h-10 rounded-md pl-2" />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <span>Date:</span>
                    <input className="w-4/5 bg-[#FEF0DC] border-1 border-black h-10 rounded-md pl-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center m-4">
            <button className="border-1 border-black rounded-md bg-[#751818] h-8 p-1 w-max text-white">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
