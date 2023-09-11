import React from "react";
import Axios from './Axios';
const CustomForm = ({change , custom , refresh , setrefresh, setCustom}) => {
  const name = custom.name ; 
  const description = custom.description;
  const createCustom = async(e)=>{
    e.preventDefault();
    const {data} = await Axios.post("/product/add-custom",{
       ...custom
    }); 
    
    setrefresh(!refresh); 
    console.log("success"); 
  setCustom({
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
            placeholder="Customization Name"
            value={name}
            name ="name"
            onChange={change}
          />
            <textarea
            type="text"
            className="form-control mt-3 h-48 "
            placeholder=" Description"
            value={description}
            name ="description"
            onChange={change}
          />
        </div>
        <button
          type="submit"
          className="border border-black py-2 px-5 rounded-[5px] bg-[#6D282C] text-white w-40 flex justify-center m-auto items-center text-[18px] font-[400]" onClick={createCustom} >
          ADD
        </button>
    </>
  );
};

export default CustomForm;
