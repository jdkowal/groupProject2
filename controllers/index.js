const router = require('express').Router();


const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const medRoutes = require('./medicationRoutes');
const userCoupon = require('./userCouponRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/medication', medRoutes);
router.use('/coupon', userCoupon);

module.exports = router;
