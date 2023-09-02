import React, { useRef, useState } from "react";
import VideoIcon from "../../assets/videos.svg";
import useFileUpload from "./UseFileUpload";

const Videos = () => {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [color,setColor] = useState("")

  const {
    isDragging,
    files,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
    handleFileInputChange,
    removeFile,
  } = useFileUpload();
  const fileInputRef = useRef(null);
  // console.log(fileInputRef.current.value);

  const handleUploadButtonClick = () => {
    setUploadedImages([...uploadedImages, ...files]);
    console.log(fileInputRef.current.value);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  
    
  };

  return (
    <div>
      <div className="text-[18px]">Add up to 10 photos to show your product</div>
      <div className="flex gap-8 w-fit m-2">
        <div
          className={`h-[240px] w-[200px] border border-black border-solid rounded-md p-2 ${
            isDragging ? "bg-gray-100" : "bg-white"
          }`}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {files.length === 0 ? (
            <label htmlFor="fileInput" className="cursor-pointer">
              <div className="h-[240px] w-[200px] flex flex-col items-center justify-center">
                <img src={VideoIcon} alt="image" />
                <span className="text-lg font-semibold">Add a VideoIcon</span>
                <span className="text-sm">Max size: 100MB</span>
              </div> 
            </label>
          ) : (
            <div className="h-full overflow-x-auto">
              {files.map((file, index) => (
                <div key={index} className="my-1">
                  <img src={URL.createObjectURL(file)} alt="uploaded" />
                  <button
                    type="button"
                    className="ml-2 bg-red-500 text-white p-1 rounded-full"
                    onClick={() => removeFile(index)}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          )}
          <input
            type="file"
            id="fileInput"
            ref={fileInputRef}
            accept="video/*"
            className="hidden"
            multiple
            onChange={handleFileInputChange}
          />
        </div>
        <div className="flex flex-col gap-4 mt-8 items-start">
          <input
            type="text"
            className="border border-black rounded-md py-2 px-3"
            placeholder="Select color"
            onChange={(e)=>setColor(e.target.value)}
          />
          <button
            className="border border-black py-2 px-3 rounded-[5px] bg-[#6D282C] text-white text-[18px] font-[400] mx-auto"
            onClick={handleUploadButtonClick} 
          >
            Upload
          </button>
        </div>
        <div>
          {uploadedImages.length > 0 && (
            <div className="grid grid-cols-8">
              {uploadedImages.map((image, index) => (
                <div className="flex flex-col items-center">
                <img
                  key={index}
                  src={URL.createObjectURL(image)}
                  alt={`uploaded-${index}`}
                  className="m-2 border border-gray-400 rounded-[5px] p-1"
                  style={{ width: "50px", height: "60px" }}
                />
                <span>{color}</span>
                </div>

              ))}
    
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Videos;
