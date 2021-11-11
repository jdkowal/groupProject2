const router = require('express').Router();
const userRoutes = require('./userRoutes');
const couponRoutes = require('./couponRoutes');


router.use('/users', userRoutes);
router.use('/coupon', couponRoutes);

module.exports = router;
