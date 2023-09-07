import React, { useEffect, useState } from "react";
import Sidebar from "../Layout/Sidebar.jsx";
import "../../css/Listings.css";
import { NavLink } from "react-router-dom";
import Axios from './Axios.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const Listings = () => {
  const [allproducts , setProducts] = useState([]); 
 const arr =[1,3,4,5,6]
  async function getProducts(){
        const {data} = await Axios.get("product/all-products"); 
        // setProducts(data.products, "g");  
        // console.log(data);
        setProducts(data.products[0]);
      }
useEffect(()=>{
    getProducts();
    console.log("state",allproducts)
    
},[])
   
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
            <tbody>
              {allproducts.map((product, index) => (
                <tr key={index}>
                  <td className="text-black text-md">{product.sku}</td>
                  <td className="text-black text-md">{product.collection}</td>
                  <td className="text-black text-md">{product.ocassion}</td>
                  <td className="text-black text-md">{product.tags}</td>
                  <td className="text-black text-md">{product.amount}</td>
                  <td className="text-black text-md">{product.amount}</td>
                  <td className="text-black text-md">{1200}pcs</td>
                  {/* Add more cells as needed */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Listings;
