const router = require('express').Router();


const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const medRoutes = require('./medicationRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/medication', medRoutes);

module.exports = router;
