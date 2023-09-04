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
      <div className="flex flex-col justify-between items-center ">
        <div className="flex items-center justify-center p-2 h-16">
          <input
            type="text"
            className="form-control"
            placeholder="ENTER NEW NAME"
            value={name}
            name ="name"
            onChange={change}
          />
            <input
            type="text"
            className="form-control p-10"
            placeholder="ENTER description"
            value={description}
            name ="description"
            onChange={change}
          />
        </div>
        <button
          type="submit"
          className="border border-black py-2 px-3 rounded-[5px] bg-[#6D282C] text-white text-[18px] font-[400]" onClick={createCategory} >
          ADD
        </button>
      </div>
    </>
  );
};

export default CategoryForm;
