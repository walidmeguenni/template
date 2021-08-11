const express = require("express");
const router = express.Router();
const multer = require('multer');

const checkAuth = require('../middleware/checkAuth');
const userControllers=require('../controllers/users');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 40,
  },
  fileFilter: fileFilter,
});
router.post("/signup",userControllers.CreateUser);

router.post("/login",userControllers.LOGNIN);

router.get("/",checkAuth,userControllers.GetAllUser);
router.get("/:id",checkAuth,userControllers.GetUser);
router.patch('/:id',checkAuth,userControllers.UpdateUser);
router.patch('/updateimage/:id',checkAuth,upload.single('imageUrl'),userControllers.UpdateImage);
router.put('/updatepassword/:id',checkAuth,userControllers.UpdatePassword);
router.delete('/:id',checkAuth,userControllers.deleteUser)

module.exports = router;