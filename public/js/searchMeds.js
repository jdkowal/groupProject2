

let searchField = document.querySelector('.search_req');
let searchButton = document.querySelector('#search-button');

function getDrugInfoBySearch(searchValue) {
    fetch(`https://api.fda.gov/drug/label.json?search=${searchValue}&limit=10`,{
    method: 'GET',
    header: {
    'content-type': 'application/json'
    }
    }).then(res => {
    return res.json()
    })
    .then(function (data){
        console.log(data)

    })

    .catch(error =>console.log('ERROR'))

}


searchButton.addEventListener('click', function (event){
    event.preventDefault();
    let searchValue = searchField.value.trim(); 

    getDrugInfoBySearch(searchValue);
})