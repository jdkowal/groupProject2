let searchField = document.querySelector('.search_req');
let searchButton = document.querySelector('#search-medication');

function getDrugInfoBySearch(searchValue) {
    fetch(`https://api.fda.gov/drug/label.json?search=${searchValue}&limit=10`,{
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


searchButton.addEventListener('submit', function (event){
    event.preventDefault();
    let searchValue = searchField.value.trim(); 

    getDrugInfoBySearch(searchValue);
    console.log(searchValue);
})