const router = require('express').Router();
const axios = require('axios')
const withAuth = require('../utils/auth');

router.get('/:name', withAuth, async (req, res)=> {
    let medicationData = await axios.get(`https://rxnav.nlm.nih.gov/REST/drugs.json?name=${req.params.name}&limit=10`)
    const medData = medicationData.data.drugGroup.conceptGroup
    let medDataFilter = medData.filter((drug)=> drug.hasOwnProperty('conceptProperties'));
    let conceptData = medDataFilter.map((concept)=> concept.conceptProperties).flat();
    console.log(conceptData);
    
res.render('homepage', {conceptData, user_id: req.session.user_id, logged_in: req.session.logged_in})

});

module.exports = router;