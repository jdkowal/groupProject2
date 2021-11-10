// const express = require('express');
// const app = express();
// app.listen(3001, () => console.log('listening at 3001'));
// app.use(express.static('public'));
// axios promise based fetch requests
// https://open.fda.gov/
// Api key ndbtYqbnrhmXbKSjfQL3XlVXfoMlD2KMqeYx8z9H
// we want a specific drug by name
/**
 * 
 * @param {*} name string value of the drug name you want to search for
 * @param {*} limit number to determine how many results you want-- max 99, default 1
 */
function getDrugInfoBySearch(name, limit) {
    fetch(`https://api.fda.gov/drug/drugsfda.json?api_key=ndbtYqbnrhmXbKSjfQL3XlVXfoMlD2KMqeYx8z9H&search=${name}&limit=${limit}`,{
    method: 'GET',
    header: {
    'content-type': 'application/json'
    }
    }).then(res => {
    return res.json()
    })
    .then(data =>console.log(data))
    .catch(error =>console.log('ERROR'))

}
getDrugInfoBySearch('advil', 5); // advil would be the input field from your html