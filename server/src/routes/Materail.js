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
const MaterailControllers=require('../controllers/materail');


router.get('/',checkAuth,MaterailControllers.GetAllMaterails);

router.post('/',checkAuth,upload.single('MaterailImage'),MaterailControllers.PostMaterails);

router.get('/:id',checkAuth,MaterailControllers.GetMaterail);

router.patch('/:id',checkAuth,upload.single('MaterailImage'),MaterailControllers.UpdateMaterail);

router.delete('/:id',checkAuth,MaterailControllers.DeleteMaterail);

router.delete('/deleteallMaterail',checkAuth,MaterailControllers.DeleteAllMaterail);

module.exports = router;