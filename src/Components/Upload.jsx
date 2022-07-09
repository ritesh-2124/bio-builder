import React, { useState } from "react";

const UploadButtons = () => {
  const [selectedImage, setSelectedImage] = useState(null);

   
 
  return (
      <div>
      <h1>Upload and Display Image usign React Hook's</h1>
      {selectedImage && (
        <div>
        <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
        <br />
        </div>
      )}
      <br />
     
      <br /> 
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />

    </div>
  );
};

// export default UploadAndDisplayImage;
export default UploadButtons;