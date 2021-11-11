const router = require('express').Router();
const { Coupon } = require('../../models');
const withAuth = require('../../utils/auth');
// we need to add req.params to req.session.user_id
//add with auth 
router.get('/:user_id', async (req, res) => {
    const userCoupon = await Coupon.findAll({ where: { user_id: req.params.user_id} })

    res.status(200).json(userCoupon);
    // res.render('medication', { userCoupon, logged_in: req.session.logged_in })
})

//add with auth 
// get rid of the double pipes 

router.post('/', async (req, res) => {
    try {
        const newCoupon = await Coupon.create({
            user_id: req.session.user_id || 1,
            medication_name: req.body.medication_name,
            coupon_description: req.body.coupon_description,
            coupon_url: req.body.coupon_url,
        });

        res.status(200).json(newCoupon);

    } catch (err) {

        res.status(500).json(err);
    }
});

module.exports = router;