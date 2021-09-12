import React, {useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  updateimageproduct,
  getproducts,
} from "../../../redux/actions/actionProducts";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { Button } from "@material-ui/core";
const ImageCard = ({ currentId }) => {
  const dispatch = useDispatch();
  const post=useSelector((state) => currentId ? state.products.find((p) => p._id === currentId) : null)   
  const [PostNew, setPostNew] = useState({
    productImage: null,
  });
  const handleUpload = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("productImage", PostNew.productImage);
    dispatch(updateimageproduct(formData, post._id));
    setPostNew({ productImage: null });
  };
  useEffect(() => {
    dispatch(getproducts());
  }, [currentId, dispatch]);
  return (
    <div>
      <form onSubmit={handleUpload} encType="multipart/form-data">
        <div>
          <img
            src={post && post.productImage}
            alt=""
            style={{ width: "350px", height: "400px" }}
          />
        </div>
        {PostNew.productImage && (
          <Button
            type="submit"
            variant="outlined"
            color="primary"
            fullWidth
            style={{
              marginBottom: "5px",
            }}
          >
            save
          </Button>
        )}
        <Button
          variant="contained"
          color="default"
          component="label"
          startIcon={<CloudUploadIcon />}
          fullWidth
        >
          Upload
          <input
            type="file"
            name="productImage"
            onChange={(e) =>
              setPostNew({ ...PostNew, productImage: e.target.files[0] })
            }
            hidden
          />
        </Button>
      </form>
    </div>
  );
};

export default ImageCard;