const express = require('express');
const router = express.Router();
const multer = require('multer');

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


const checkAuth = require('../middleware/checkAuth');
const productControllers=require('../controllers/products');


router.get('/',checkAuth,productControllers.GetAllProducts);

router.post('/',checkAuth,upload.single('productImage'),productControllers.PostProducts);

router.patch('/:id',checkAuth,productControllers.UpdateProduct);

router.patch('/updateproductimage/:id',checkAuth,upload.single('productImage'),productControllers.UpadteProductImage);

router.delete('/:id',checkAuth,productControllers.DeleteProduct);

router.delete('/deleteallproduct',checkAuth,productControllers.DeleteAllProduct);

module.exports = router;