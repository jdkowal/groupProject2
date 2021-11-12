const router = require('express').Router();
const axios = require('axios')
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res)=> {
    let userCouponPage = await axios.get(`/api/coupon/${req.session.user_id}`)
userCouponPage = userCouponPage.data
    console.log(userCouponPage);
res.render('coupons', {userCouponPage, logged_in: req.session.logged_in})

});

module.exports = router;