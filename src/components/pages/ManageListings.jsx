import React, { useEffect, useState } from "react";
import axios from "axios";
import CategoryForm from "./ManageListingsForm.jsx";
import { Modal } from "antd";
import toast from "react-hot-toast";
import Sidebar from "../Layout/Sidebar.jsx";
const ManageListings = () => {
  const [categories, setCategories] = useState([]);
  const [customizations, setCustomizations] = useState([]);
  const [name, setName] = useState("");
  const [customizationName, setCustomizationName] = useState("");
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState("");
  const [updatedcustomizationName, setUpdatedcustomizationName] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/category/createcategory",
        {
          name,
        }
      );
      if (data?.success) {
        toast.success(`${name} is created`);
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("somthing went wrong in input form");
    }
  };

  const handleSubmitII = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/category/createcustomization",
        {
          customizationName,
        }
      );
      if (data?.success) {
        toast.success(`${customizationName} is created`);
        getAllCustomizations();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("somthing went wrong in input form");
    }
  };
  //get all cat
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/category/allcategory"
      );
      if (data.success) {
        setCategories(data.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in getting catgeory");
    }
  };

  const getAllCustomizations = async () => {
    try {
      const { data } = await axios.get("http://localhost:4000/api/v1/category/allcustomizations");
      if (data.success) {
        setCustomizations(data.customization);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something wwent wrong in getting catgeory");
    }
  };
  useEffect(() => {
    getAllCategory();
  }, []);

  useEffect(() => {
    getAllCustomizations();
  }, []);
  //update category
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `http://localhost:4000/api/v1/category/updatecategory/${selected._id}`,
        { name: updatedName }
      );
      if (data.success) {
        toast.success(`${updatedName} is updated`);
        setSelected(null);
        setUpdatedName("");
        setOpen(false);
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Somtihing went wrong");
    }
  };

  const handleUpdateII = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `http://localhost:4000/api/v1/category/updatecustomization/${selected._id}`,
        { customizationName: updatedcustomizationName }
      );
      if (data.success) {
        toast.success(`${updatedcustomizationName} is updated`);
        setSelected(null);
        setUpdatedcustomizationName("");
        setOpen(false);
        getAllCustomizations();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Somtihing went wrong");
    }
  };

  const handleDelete = async (pId) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:4000/api/v1/category/deletecategory/${pId}`
      );
      if (data.success) {
        toast.success(`category is deleted`);

        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Somtihing went wrong");
    }
  };

  const handleDeleteII = async (pId) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:4000/api/v1/category/deletecustomization/${pId}`
      );
      if (data.success) {
        toast.success(`customization is deleted`);

        getAllCustomizations();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Somtihing went wrong");
    }
  };
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
                <CategoryForm
                  handleSubmit={handleSubmit}
                  value={name}
                  setValue={setName}
                />
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
                              onClick={() => {
                                setOpen(true);
                                setUpdatedName(c.name);
                                setSelected(c);
                              }}
                            >
                              EDIT
                            </button>
                            <button
                              className="border border-black py-2 px-3 rounded-[5px] bg-[#6D282C] text-white text-[18px] font-[400]"
                              onClick={() => {
                                handleDelete(c._id);
                              }}
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
              <Modal onCancel={() => setOpen(false)} footer={null} open={open}>
                <CategoryForm
                  value={updatedName}
                  setValue={setUpdatedName}
                  handleSubmit={handleUpdate}
                />
              </Modal>
            </div>
          </div>
          <div className="list-items">
            <div className="flex w-full border-black border-2 p-3 justify-between">
              <div className="flex flex-col w-1/4 m-2 justify-start ">
                <h1 className="flex font-bold items-start justify-center">
                  MANAGE CUSTOMIZATIONS
                </h1>
                <CategoryForm
                  placeholder = "ENTER NEW CUSTOMIZATION"
                  handleSubmit={handleSubmitII}
                  value={customizationName}
                  setValue={setCustomizationName}
                />
              </div>
              <div className="w-2/3 p-2 h-96 overflow-y-auto">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">CUSTOMIZATION NAME</th>
                      <th scope="col">ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customizations?.map((c) => (
                      <>
                        <tr>
                          <td key={c._id}>{c.customizationName}</td>
                          <td>
                            <button
                              className="border border-black py-2 px-3 rounded-[5px] bg-[#6D282C] text-white text-[18px] font-[400] mx-2"
                              onClick={() => {
                                setOpen(true);
                                setUpdatedName(c.customizationName);
                                setSelected(c);
                              }}
                            >
                              EDIT
                            </button>
                            <button
                              className="border border-black py-2 px-3 rounded-[5px] bg-[#6D282C] text-white text-[18px] font-[400]"
                              onClick={() => {
                                handleDeleteII(c._id);
                              }}
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
              <Modal onCancel={() => setOpen(false)} footer={null} open={open}>
                <CategoryForm
                  value={updatedcustomizationName}
                  setValue={setUpdatedcustomizationName}
                  handleSubmit={handleUpdateII}
                />
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ManageListings;
