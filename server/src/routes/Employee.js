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
const employeeControllers=require('../controllers/employee');


router.get('/',checkAuth,employeeControllers.GetAllemployees);

router.post('/',checkAuth,upload.single('EmployeeImage'),employeeControllers.Postemployees);

router.get('/:id',checkAuth,employeeControllers.Getemployee);

router.patch('/:id',upload.single('EmployeeImage'),employeeControllers.Updateemployee);

router.delete('/:id',checkAuth,employeeControllers.Deleteemployee);

router.delete('/deleteallemployee',checkAuth,employeeControllers.DeleteAllemployee);

module.exports = router;