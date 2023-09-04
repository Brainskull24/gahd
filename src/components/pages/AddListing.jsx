import React, { useState, useEffect } from "react";

import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import { Select } from "antd";
import axios from "axios";
import Axios  from "./Axios";
const { Option } = Select;

export default function AddListing() {
  const [images, setImages] = useState([]);
  const [productId, setProductId] = useState("");
  const[categories,setCategories] = useState([]);
  const [product, setProduct] = useState({
    title: "",
    description: "",
    category: "",
    ocassion: "",
    collectionName: "",
    material: "",
    fabric: "",
    tags: "",
    color: "",
    customization: [],
    work: "",
    sku: "",
    price: "",
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value
    })
  }
  const getAllCategory = async () => {
    try {
      const { data } = await Axios.post("/product/categories");
      if (data?.success) {
        console.log(data);
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something wwent wrong in getting catgeory");
    }
  };
  useEffect(() => {
    getAllCategory();
  }, []);
  const handleCreate = async (e) => {
    if (product) {
      const { data } = await Axios.post("/product/add-product",{
        ...product
      });
      toast.success("Product created successfully");
      console.log("successsß");
      setProductId(data.newListing._id);
    } 
    else {
        toast.error("Error in creating product");
      }
    }
  return (
    <div className="w-full">
      <div
        className="py-2 px-6 flex justify-between items-center rounded-[5px] mx-16 my-2"
        style={{ fontFamily: "Roboto, sans-serif", backgroundColor: "#A95F44" }}
      >
        <div className="text-black font-[500] text-[24px]">
          Add a new listing
        </div>
        <div className="py-2 px-6 flex gap-2 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M11.4885 13.59H11.4651V13.6134V15.3627C11.4649 15.4346 11.4436 15.5047 11.4038 15.5645C11.3641 15.6244 11.3077 15.6712 11.2415 15.6992C11.1754 15.7272 11.1025 15.7352 11.0319 15.7221C10.9613 15.7091 10.8961 15.6756 10.8443 15.6258L10.8442 15.6256L6.88697 11.8864L6.88694 11.8864C6.8511 11.8526 6.82255 11.8119 6.80303 11.7667C6.78351 11.7215 6.77344 11.6728 6.77344 11.6236C6.77344 11.5744 6.78351 11.5257 6.80303 11.4805C6.82255 11.4353 6.8511 11.3946 6.88694 11.3608L6.88697 11.3608L10.846 7.62298L10.8461 7.62293C10.898 7.57364 10.9632 7.54061 11.0336 7.52794C11.1041 7.51526 11.1767 7.52348 11.2425 7.55159C11.3083 7.5797 11.3645 7.62647 11.404 7.68612C11.4436 7.74578 11.4648 7.8157 11.4651 7.88728V9.63656V9.66H11.4885C13.5628 9.66 14.9319 10.3101 15.8146 11.3161C16.698 12.323 17.0972 13.6895 17.2247 15.1272L17.2247 15.1273C17.2559 15.4681 16.8332 15.6594 16.5952 15.4104C16.0292 14.8176 15.4228 14.3621 14.6218 14.055C13.8213 13.748 12.8278 13.59 11.4885 13.59Z"
              fill="#232321"
              stroke="#232321"
              stroke-width="0.046875"
            />
            <path
              d="M12 3C7.03125 3 3 7.03125 3 12C3 16.9688 7.03125 21 12 21C16.9688 21 21 16.9688 21 12C21 7.03125 16.9688 3 12 3Z"
              stroke="#232321"
              stroke-width="1.5"
              stroke-miterlimit="10"
            />
          </svg>
          <NavLink to="/listings" className="text-[18px] font-[500]">
            Back to Listing
          </NavLink>
        </div>
      </div>
      <div
        className="py-2 px-6 flex flex-col mx-16 my-2 mt-6 text-[18px] border border-black rounded-md "
        style={{ fontFamily: "Roboto, sans-serif" }}
      >
        <div className="text-black font-[400] text-[22px] mt-2">
          Listing Details
        </div>

        <div className="space-y-4 mt-4">
          <div className="flex flex-col gap-2 items-start">
            <label htmlFor="title" className="font-[400]">
              Title: *
            </label>
            <input
              type="text"
              name="title"
              value={product.title}
              onChange = {handleChange}
              className="border border-gray-400 rounded-[5px] py-2 px-3 w-full"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            {/* <div className="flex flex-col gap-2 items-start">
              <label htmlFor="category" className="font-[400]">
                Category: *
              </label>
              <Select
                bordered={false}
                placeholder="SELECT CATEGORY"
                size="medium"
                showSearch
                className="border border-gray-400 rounded-[5px] py-1.5 px-1 w-full bg-white text-black"
                onChange={(value) => {
                  setCategory(value);
                }}
              >
                {categories?.map((c) => (
                  <Option key={c._id} value={c._id}>
                    {c.name}
                  </Option>
                ))}
              </Select>
            </div> */}
            <div className="flex flex-col gap-2 items-start">
              <label htmlFor="occasion" className="font-[400]">
                Occasion: *
              </label>
              <input
                type="text"
                name="ocassion"
                value={product.ocassion}
              onChange = {handleChange}
                className="border border-gray-400 rounded-[5px] py-2 px-3 w-full"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <label htmlFor="collection" className="font-[400]">
              Collection: *
            </label>
            <input
              type="text"
              name="collectionName"
              value={product.collectionName}
              onChange = {handleChange}
              className="border border-gray-400 rounded-[5px] py-2 px-3 w-full"
            />
          </div>
          <div className="flex flex-col gap-2 items-start">
            <label htmlFor="description" className="font-[400]">
              Description: *
            </label>
            <textarea
              type="text"
              name="description"
              value={product.description}
              onChange = {handleChange}
              className="border block w-full h-200 border-gray-400 rounded-[5px] py-2 px-3 h-200"
              rows={4}
            />
          </div>
          <div className="grid grid-cols-2 gap-12">
            <div>
              <label htmlFor="input" className="block font-[400]">
                Material
              </label>
              <div className="flex">
                <input
                  type="text"
                  id="input"
                  placeholder="MATERIAL"
                  name = "material"
                  className="border border-gray-400 rounded-l-md py-2 px-3 flex-1"
                  value={product.material}
              onChange = {handleChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="input" className="block font-[400]">
                fabric
              </label>
              <div className="flex">
                <input
                  type="text"
                  id="input"
                  placeholder="FABRIC"
                  name = "fabric"
                  className="border border-gray-400 rounded-l-md py-2 px-3 flex-1"
                  value={product.fabric}
              onChange = {handleChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="input" className="block font-[400]">
                Color
              </label>
              <div className="flex">
                <input
                  type="text"
                  id="input"
                  placeholder="COLOR"
                  name = "color"
                  className="border border-gray-400 rounded-l-md py-2 px-3 flex-1"
                  value={product.color}
              onChange = {handleChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="input" className="block font-[400]">
                Customizations:
              </label>
              <div className="flex">
                <input
                  type="text"
                  id="input"
                  placeholder="CUSTOMIZATION"
                  name = "customization"
                  className="border border-gray-400 rounded-l-md py-2 px-3 flex-1"
                  value={product.customization}
              onChange = {handleChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="input" className="block font-[400]">
                Tags:
              </label>
              <div className="flex">
                <input
                  type="text"
                  id="input"
                  placeholder="Tags"
                  name = "tags"
                  className="border border-gray-400 rounded-l-md py-2 px-3 flex-1"
                  value={product.tags}
              onChange = {handleChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="input" className="block font-[400]">
                Work:
              </label>
              <div className="flex">
                <input
                  type="text"
                  id="input"
                  placeholder="WORK"
                  name = "work"
                  className="border border-gray-400 rounded-l-md py-2 px-3 flex-1"
                  value={product.work}
              onChange = {handleChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="input" className="block font-[400]">
                SKU:
              </label>
              <div className="flex">
                <input
                  type="text"
                  id="input"
                  placeholder="SKU"
                  name = "sku"
                  className="border border-gray-400 rounded-l-md py-2 px-3 flex-1"
                  value={product.sku}
              onChange = {handleChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="input" className="block font-[400]">
                price:
              </label>
              <div className="flex">
                <input
                  type="Number"
                  id="input"
                  placeholder="price"
                  name = "price"
                  className="border border-gray-400 rounded-l-md py-2 px-3 flex-1"
                  value={product.price}
              onChange = {handleChange}
                />
              </div>
            </div>
          </div>
        </div>
        <button
          className="border border-black py-2 px-3 m-3 rounded-[5px] bg-[#6D282C] text-white text-[18px] font-[400] mx-auto"
          onClick={handleCreate}
        >
          ADD
        </button>
      </div>
      <div
        className='className="py-2 px-6 mx-16 my-2 mt-6 text-[18px] border border-black rounded-md"
    style={{ fontFamily: "Roboto, sans-serif" }}'
      >
      </div>
      <div className="flex justify-center items-center m-3">
        <button className="border border-black py-2 px-3 rounded-[5px] bg-[#6D282C] text-white text-[18px] font-[400] mx-auto">
          DONE
        </button>
      </div>
    </div>
  );
}