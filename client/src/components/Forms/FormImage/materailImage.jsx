import React, {useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  updateimagematerial,
  getmaterails,
} from "../../../redux/actions/actionMaterail";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { Button } from "@material-ui/core";
const ImageCard = ({ currentId }) => {
  const dispatch = useDispatch();
  const post=useSelector((state) => currentId ? state.materails.find((p) => p._id === currentId) : null)   
  
  const [PostNew, setPostNew] = useState({
    MaterailImage: null,
  });
  const handleUpload = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("MaterailImage", PostNew.MaterailImage);
    dispatch(updateimagematerial(formData, post._id));
    setPostNew({ MaterailImage: null });
  };
  useEffect(() => {
    dispatch(getmaterails());
  }, [currentId, dispatch]);
  return (
    <div>
      <form onSubmit={handleUpload} encType="multipart/form-data">
        <div>
          <img
            src={post && post.MaterailImage}
            alt=""
            style={{ width: "350px", height: "400px" }}
          />
        </div>
        {PostNew.MaterailImage && (
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
            name="MaterailImage"
            onChange={(e) =>
              setPostNew({ ...PostNew, MaterailImage: e.target.files[0] })
            }
            hidden
          />
        </Button>
      </form>
    </div>
  );
};

export default ImageCard;