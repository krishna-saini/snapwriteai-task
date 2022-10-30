import { useState, useEffect } from "react";
import classes from "./ImageUploadSection.module.css";
import uploadImg from "../../assets/uploadIndicator.png";

function ImageUploadSection() {
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);

  useEffect(() => {
    // localStorage.clear();
    let uploadedImage = JSON.parse(sessionStorage.getItem("imageURLs"));

    if (!uploadedImage) return;
    setImageURLs(uploadedImage);
  }, []);

  useEffect(() => {
    if (images.length < 1) return;
    const newImageURLs = [];

    [...images].forEach((image) =>
      newImageURLs.push(URL.createObjectURL(image))
    );
    setImageURLs(newImageURLs);

    sessionStorage.setItem("imageURLs", JSON.stringify(newImageURLs));
  }, [images]);

  const imageChangeHandler = (e) => {
    setImages(e.target.files);
  };

  return (
    <div className={classes.container}>
      {!imageURLs.length && (
        <div className={classes.beforeUpload}>
          <img src={uploadImg} className={classes.fakeImg} alt="upload image sign" />
          <input
            type="file"
            accept="image/jpeg, image/png"
            onChange={imageChangeHandler}
            className={classes.fileInput}
          />
          <span>PNG, JPEG files only</span>
        </div>
      )}
      {!imageURLs.length || (
        <img
          src={imageURLs}
          key={Math.random().toString}
          className={classes.imgUpload}
        alt="uploaded image"/>
      )}
    </div>
  );
}

export default ImageUploadSection;
