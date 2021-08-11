const express=require('express');
const router = express.Router();


const checkAuth = require('../middleware/checkAuth');
const orderControllers = require('../controllers/orders');


router.get('/',checkAuth,orderControllers.GetAllOrders);

router.post('/',checkAuth,orderControllers.PostOrders);

router.patch('/:id',checkAuth,orderControllers.UpdateOrder);

router.delete('/:id',checkAuth,orderControllers.DeleteOrder);


module.exports=router;