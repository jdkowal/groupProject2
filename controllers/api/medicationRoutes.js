const router = require('express').Router();
const axios = require('axios')

router.get('/:name', async (req, res)=> {
    let medicationData = await axios.get(`https://api.fda.gov/drug/label.json?search=${req.params.name}&limit=10`)
    console.log(medicationData.data.results)
res.render('homepage')
});

module.exports = router;