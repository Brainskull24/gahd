import React from "react";
import Axios from './Axios';
const CategoryForm = ({change , category , refresh , setrefresh, setCategoryDetails}) => {
  const name = category.name ; 
  const description = category.description;
  const createCategory = async(e)=>{
    e.preventDefault();
    const {data} = await Axios.post("/product/add-category",{
       ...category

    }); 
    
    setrefresh(!refresh); 
    console.log("success"); 
  setCategoryDetails({
    name:"", 
    description:""
  })
    console.log("data created" , data)
  }
  return (
    <>
        <div className="flex flex-col h-56 w-full items-center justify-center p-2">
          <input
            type="text"
            className="form-control h-12"
            placeholder="CATEGORY NAME"
            value={name}
            name ="name"
            onChange={change}
          />
            <textarea
            type="text"
            className="form-control mt-3 h-48 "
            placeholder="CATEGORY DESCRIPTION"
            value={description}
            name ="description"
            onChange={change}
          />
        </div>
        <button
          type="submit"
          className="border border-black py-2 px-3 rounded-[5px] bg-[#6D282C] text-white w-20 flex justify-center m-auto items-center text-[18px] font-[400]" onClick={createCategory} >
          ADD
        </button>
    </>
  );
};

export default CategoryForm;
