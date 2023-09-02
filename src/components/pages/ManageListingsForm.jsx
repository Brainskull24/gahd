import React from "react";
const CategoryForm = ({ handleSubmit, value, setValue }) => {
  return (
    <>
      <div className="flex flex-col justify-between items-center ">
        <div className="flex items-center justify-center p-2 h-16">
          <input
            type="text"
            className="form-control"
            placeholder="ENTER NEW NAME"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="border border-black py-2 px-3 rounded-[5px] bg-[#6D282C] text-white text-[18px] font-[400]"
          onClick={handleSubmit}
        >
          ADD
        </button>
      </div>
    </>
  );
};

export default CategoryForm;
