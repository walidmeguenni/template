import React, {useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  updateimageemployee,
  getemployees,
} from "../../../redux/actions/actionEmployee";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { Button } from "@material-ui/core";
const ImageCard = ({ currentId }) => {
  const dispatch = useDispatch();
  const post=useSelector((state) => currentId ? state.employees.find((p) => p._id === currentId) : null)   
  
  const [PostNew, setPostNew] = useState({
    EmployeeImage: null,
  });
  const handleUpload = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("EmployeeImage", PostNew.EmployeeImage);
    dispatch(updateimageemployee(formData, post._id));
    setPostNew({ EmployeeImage: null });
  };
  useEffect(() => {
    dispatch(getemployees());
  }, [currentId, dispatch]);
  return (
    <div>
      <form onSubmit={handleUpload} encType="multipart/form-data">
        <div>
          <img
            src={post && post.EmployeeImage}
            alt=""
            style={{ width: "350px", height: "400px" }}
          />
        </div>
        {PostNew.EmployeeImage && (
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
            name="EmployeeImage"
            onChange={(e) =>
              setPostNew({ ...PostNew, EmployeeImage: e.target.files[0] })
            }
            hidden
          />
        </Button>
      </form>
    </div>
  );
};

export default ImageCard;